import React, { useState, useEffect } from 'react';
import { Brain, Play, Pause, RefreshCw, Sparkles, CheckCircle2, Zap, HelpCircle } from 'lucide-react';

interface MentalTrainingToolProps {
  onCompleteExercise: (scoreBonus: number) => void;
}

export const MentalTrainingTool: React.FC<MentalTrainingToolProps> = ({ onCompleteExercise }) => {
  const [activeTab, setActiveTab] = useState<'focus_diffuse' | 'scamper' | 'lateral'>('focus_diffuse');

  // Focus Diffuse Timer State
  const [timerSeconds, setTimerSeconds] = useState(120); // 2 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'focal' | 'difuso'>('focal');

  // SCAMPER State
  const scamperItems = [
    { name: 'Parada de Autobús Urbana', target: 'Convertirla en un centro de salud comunitario o huerto vertical solar' },
    { name: 'Factura de Luz en Papel', target: 'Transformarla en un juego de tokens educativos sostenibles' },
    { name: 'Silla de Oficina Convencional', target: 'Convertirla en un generador kinético de energía para laptops' }
  ];
  const [scamperIndex, setScamperIndex] = useState(0);
  const [scamperAnswer, setScamperAnswer] = useState('');
  const [scamperSubmitted, setScamperSubmitted] = useState(false);

  // Lateral Thinking Puzzle State
  const [lateralAnswer1, setLateralAnswer1] = useState('');
  const [lateralAnswer2, setLateralAnswer2] = useState('');
  const [lateralAnswer3, setLateralAnswer3] = useState('');
  const [lateralCompleted, setLateralCompleted] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 60 && timerMode === 'focal') {
            setTimerMode('difuso');
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      onCompleteExercise(50);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds, timerMode, onCompleteExercise]);

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(120);
    setTimerMode('focal');
  };

  const handleSCAMPERSubmit = () => {
    if (!scamperAnswer.trim()) return;
    setScamperSubmitted(true);
    onCompleteExercise(40);
  };

  const handleLateralSubmit = () => {
    if (!lateralAnswer1.trim() || !lateralAnswer2.trim() || !lateralAnswer3.trim()) return;
    setLateralCompleted(true);
    onCompleteExercise(60);
  };

  return (
    <div className="bg-slate-900/90 border border-orange-500/30 rounded-2xl p-5 lg:p-6 shadow-xl relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
              Disciplina & Gimnasio Cerebral
            </span>
            <h3 className="text-lg font-bold font-heading text-white">
              Entrenamiento de Neuroplasticidad e Innovación Mental
            </h3>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('focus_diffuse')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'focus_diffuse' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Modo Difuso / Focal
          </button>
          <button
            onClick={() => setActiveTab('scamper')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'scamper' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Generador SCAMPER
          </button>
          <button
            onClick={() => setActiveTab('lateral')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'lateral' ? 'bg-orange-500 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Fijación Funcional
          </button>
        </div>
      </div>

      {/* Tab 1: Focal vs Diffuse Breathing & Brainwave Visualizer */}
      {activeTab === 'focus_diffuse' && (
        <div className="py-6 flex flex-col items-center justify-center text-center max-w-xl mx-auto space-y-5">
          <p className="text-xs text-slate-300">
            Técnica respaldada por la neurociencia (empleada por Thomas Edison): alterna 1 minuto de <strong>Foco Intenso</strong> en un problema y 1 minuto en <strong>Modo Difuso</strong> (relajación guiada) para permitir que la red neuronal por defecto conecte ideas sinapsis distantes.
          </p>

          {/* Visual sphere */}
          <div className="relative flex items-center justify-center my-2">
            <div
              className={`w-36 h-36 rounded-full flex items-center justify-center transition-all duration-1000 ${
                timerMode === 'focal'
                  ? 'bg-gradient-to-tr from-orange-500 via-red-500 to-amber-500 shadow-2xl shadow-orange-500/40 scale-100'
                  : 'bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-2xl shadow-cyan-500/40 scale-110 animate-pulse'
              }`}
            >
              <div className="w-28 h-28 bg-[#0B0F19] rounded-full flex flex-col items-center justify-center p-2 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  {timerMode === 'focal' ? '● Red Focal Anterograda' : '✦ Red Neuronal Difusa'}
                </span>
                <span className="font-mono text-2xl font-bold text-white my-0.5">
                  {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
                </span>
                <span className="text-[9px] text-orange-400 font-medium">
                  {timerMode === 'focal' ? 'Concentración' : 'Desconexión Creativa'}
                </span>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-xs text-slate-300 w-full">
            {timerMode === 'focal' ? (
              <span><strong>Fase 1 (0:00 - 1:00):</strong> Enfoca tu mente en un problema complejo que desees resolver hoy.</span>
            ) : (
              <span><strong>Fase 2 (1:00 - 2:00):</strong> Cierra suavemente los ojos, respira profundo y deja que tu cerebro asocie libremente.</span>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className={`px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 shadow-lg transition-all ${
                isTimerRunning ? 'bg-amber-600 hover:bg-amber-700' : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isTimerRunning ? 'Pausar Entrenamiento' : 'Iniciar Sesión (2 min)'}</span>
            </button>
            <button
              onClick={handleResetTimer}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors"
              title="Reiniciar timer"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: SCAMPER Generator */}
      {activeTab === 'scamper' && (
        <div className="py-4 space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300">
              <strong className="text-white">Técnica SCAMPER (Bob Eberle):</strong> Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar, Reorganizar. Aplica este marco mental al objeto reto.
            </div>
          </div>

          <div className="bg-slate-950/90 border border-orange-500/40 p-4 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono text-orange-400 uppercase font-bold">Objeto Reto Actual</span>
              <button
                onClick={() => {
                  setScamperIndex((prev) => (prev + 1) % scamperItems.length);
                  setScamperAnswer('');
                  setScamperSubmitted(false);
                }}
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
              >
                <RefreshCw className="w-3 h-3" /> Cambiar Objeto Reto
              </button>
            </div>

            <h4 className="text-base font-bold text-white mb-1">
              {scamperItems[scamperIndex].name}
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Ejemplo de transformación deseada: {scamperItems[scamperIndex].target}
            </p>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-200">
                Tu idea disruptiva usando SCAMPER:
              </label>
              <textarea
                value={scamperAnswer}
                onChange={(e) => setScamperAnswer(e.target.value)}
                placeholder="Ej. 'Sustituir el material por fibra biológica y Eliminar la necesidad de cables agregando paneles fotovoltaicos...'"
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
              <button
                onClick={handleSCAMPERSubmit}
                disabled={!scamperAnswer.trim() || scamperSubmitted}
                className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
              >
                {scamperSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>¡Idea SCAMPER Registrada (+40 pts)!</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Enviar Transformación SCAMPER</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Lateral Thinking / Functional Fixedness */}
      {activeTab === 'lateral' && (
        <div className="py-4 space-y-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
            <strong className="text-white block mb-1">Rompiendo el Sesgo de Fijación Funcional (Duncker):</strong>
            El cerebro tiende a ver los objetos solo para el propósito con el que fueron fabricados. Los grandes innovadores desglosan el objeto en sus propiedades físicas brutas (peso, forma, conductividad).
          </div>

          <div className="bg-slate-950/90 border border-slate-800 p-4 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400">RETO LATERAL EN VIVO: "Un Ladrillo de Construcción"</span>
              <span className="text-[10px] text-slate-500 font-mono">Escribe 3 usos no convencionales</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Uso No Convencional #1</span>
                <input
                  type="text"
                  value={lateralAnswer1}
                  onChange={(e) => setLateralAnswer1(e.target.value)}
                  placeholder="ej. Disipador térmico para estufa"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Uso No Convencional #2</span>
                <input
                  type="text"
                  value={lateralAnswer2}
                  onChange={(e) => setLateralAnswer2(e.target.value)}
                  placeholder="ej. Filtro poroso de sedimentos"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Uso No Convencional #3</span>
                <input
                  type="text"
                  value={lateralAnswer3}
                  onChange={(e) => setLateralAnswer3(e.target.value)}
                  placeholder="ej. Molde artesanal de arcilla"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <button
              onClick={handleLateralSubmit}
              disabled={lateralCompleted || !lateralAnswer1 || !lateralAnswer2 || !lateralAnswer3}
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              {lateralCompleted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>¡Fijación Funcional Rompida con Éxito (+60 pts)!</span>
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4" />
                  <span>Validar Usos Horizontales</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
