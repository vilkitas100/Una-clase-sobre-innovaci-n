import React, { useState } from 'react';
import { User, Users, Trophy, Award, CheckCircle2, Edit2, Check, Save, Key, RefreshCw, X } from 'lucide-react';
import { StudentProfile } from '../types';

interface StudentBarProps {
  studentProfile: StudentProfile;
  lastSavedAt: string;
  onUpdateName: (name: string, teamName: string) => void;
  onGenerateSyncCode: () => string;
  onRestoreFromSyncCode: (code: string) => boolean;
  onResetProgress: () => void;
}

export const StudentBar: React.FC<StudentBarProps> = ({
  studentProfile,
  lastSavedAt,
  onUpdateName,
  onGenerateSyncCode,
  onRestoreFromSyncCode,
  onResetProgress
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(studentProfile.name);
  const [team, setTeam] = useState(studentProfile.teamName);

  // Sync Modal
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [syncCodeInput, setSyncCodeInput] = useState('');
  const [syncMsg, setSyncMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleSave = () => {
    onUpdateName(name.trim() || 'Estudiante Innovador', team.trim() || 'Equipo Alfa');
    setIsEditing(false);
  };

  const handleCopyCode = () => {
    const code = onGenerateSyncCode();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleApplyRestore = () => {
    if (!syncCodeInput.trim()) return;
    const ok = onRestoreFromSyncCode(syncCodeInput.trim());
    if (ok) {
      setSyncMsg({ type: 'success', text: '¡Progreso restaurado correctamente! Actualizando la clase...' });
      setTimeout(() => {
        setIsSyncModalOpen(false);
        setSyncMsg(null);
        setSyncCodeInput('');
      }, 1500);
    } else {
      setSyncMsg({ type: 'error', text: 'Código de sincronización no válido. Verifica el texto e intentalo de nuevo.' });
    }
  };

  return (
    <div className="bg-slate-900/90 border-b border-slate-800/90 py-3 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Student & Team identity info */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 p-0.5 shrink-0 shadow-md shadow-orange-500/20">
            <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center text-orange-400 font-bold">
              <User className="w-5 h-5" />
            </div>
          </div>

          {isEditing ? (
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu Nombre Completo"
                className="bg-slate-800 border border-orange-500/50 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <input
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                placeholder="Nombre de Tu Equipo"
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-white text-xs focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
              <button
                onClick={handleSave}
                className="bg-orange-500 hover:bg-orange-600 text-white p-1 rounded-lg transition-colors"
                title="Guardar nombre"
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">{studentProfile.name}</span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-slate-400 hover:text-orange-400 transition-colors p-0.5"
                  title="Editar nombre y equipo"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400 font-medium">
                  <Users className="w-3 h-3" /> {studentProfile.teamName}
                </span>
                <span aria-hidden="true">·</span>
                <span>Hora {studentProfile.currentHour} en Progreso</span>
              </div>
            </div>
          )}
        </div>

        {/* AI Memory Agent persistence indicator & code sync */}
        <div className="flex items-center gap-2 bg-slate-950 border border-emerald-500/40 px-3 py-1.5 rounded-xl text-[11px]">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Save className="w-3 h-3 text-emerald-400" /> Agente Memoria IA: Guardado
            </span>
            <span className="text-slate-400 text-[9px] font-mono">Última sync: {lastSavedAt}</span>
          </div>

          <button
            onClick={() => setIsSyncModalOpen(true)}
            className="ml-2 text-slate-400 hover:text-cyan-400 p-1 rounded-md hover:bg-slate-800 transition-colors"
            title="Sincronizar o Guardar Código de Avance"
          >
            <Key className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Progress bar & stats */}
        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
          
          {/* Progress bar */}
          <div className="flex flex-col gap-1 w-36 sm:w-48">
            <div className="flex justify-between items-center text-[11px] text-slate-400">
              <span>Progreso de Clase</span>
              <span className="font-mono font-bold text-orange-400">{studentProfile.progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/50">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${studentProfile.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Innovation score */}
          <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl">
            <Trophy className="w-4 h-4 text-amber-400" />
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-medium">Cociente Innovador</span>
              <span className="font-mono font-bold text-white text-xs">{studentProfile.innovationScore} pts</span>
            </div>
          </div>

          {/* Badges count */}
          <div className="flex items-center gap-1.5">
            {studentProfile.badges.map((b) => (
              <div
                key={b.id}
                title={`${b.title}: ${b.description}`}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                  b.earnedAt
                    ? 'bg-gradient-to-tr from-emerald-500 to-cyan-500 text-white shadow-sm ring-1 ring-emerald-400/50'
                    : 'bg-slate-800 text-slate-600 border border-slate-700/50'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Sync / Memory Modal */}
      {isSyncModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0F172A] border border-cyan-500/50 rounded-2xl max-w-md w-full p-6 text-slate-100 relative shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white text-base">Agente Memoria IA: Avance Guardado</h3>
              </div>
              <button onClick={() => setIsSyncModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 space-y-4 text-xs text-slate-300">
              <p>
                Tu información (nombre, respuestas, proyectos y certificado) se guarda <strong>automáticamente en este navegador</strong>. Si cierras la ventana y vuelves mañana, la encontrarás exactamente donde la dejaste.
              </p>

              {/* Copy Sync Code option */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-white block">1. Copiar tu Código de Avance (Para cambiar de dispositivo):</span>
                <button
                  onClick={handleCopyCode}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-95 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  {copiedCode ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Key className="w-4 h-4" />}
                  <span>{copiedCode ? '¡Código Copiado al Portapapeles!' : 'Copiar Código de Avance'}</span>
                </button>
              </div>

              {/* Restore code input */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-white block">2. Cargar Avance desde un Código:</span>
                <input
                  type="text"
                  value={syncCodeInput}
                  onChange={(e) => setSyncCodeInput(e.target.value)}
                  placeholder="Pega tu código de avance aquí..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
                <button
                  onClick={handleApplyRestore}
                  disabled={!syncCodeInput.trim()}
                  className="w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white font-bold rounded-lg transition-all"
                >
                  Restaurar Mi Clase
                </button>
              </div>

              {syncMsg && (
                <div className={`p-2.5 rounded-lg text-xs font-semibold ${
                  syncMsg.type === 'success' ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950 text-red-300 border border-red-800'
                }`}>
                  {syncMsg.text}
                </div>
              )}

              {/* Reset option */}
              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px]">
                <span className="text-slate-400">¿Deseas reiniciar la clase desde cero?</span>
                <button
                  onClick={() => {
                    if (confirm('¿Estás seguro de reiniciar todo el avance? Se borrarán tus datos locales.')) {
                      onResetProgress();
                      setIsSyncModalOpen(false);
                    }
                  }}
                  className="text-red-400 hover:text-red-300 flex items-center gap-1 font-semibold"
                >
                  <RefreshCw className="w-3 h-3" /> Reiniciar Avance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
