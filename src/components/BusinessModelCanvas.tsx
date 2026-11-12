import React, { useState } from 'react';
import { Compass, CloudLightning, Share2, RefreshCw, Sparkles, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { StudentProfile } from '../types';

interface BusinessModelCanvasProps {
  studentProfile: StudentProfile;
  onSaveModel: (model: { name: string; type: string; valueProp: string; revenueStream: string; techStack: string[] }) => void;
}

export const BusinessModelCanvas: React.FC<BusinessModelCanvasProps> = ({ studentProfile, onSaveModel }) => {
  const [modelName, setModelName] = useState('EcoDrive AI Platform');
  const [selectedArchetype, setSelectedArchetype] = useState<'xaas' | 'platform' | 'circular' | 'ai_hyper'>('xaas');
  const [selectedRevenue, setSelectedRevenue] = useState('Suscripción Recurrente por Uso (Pay-per-Mile) + API B2B');
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([
    'IA Generativa de Rutas Eco-Eficientes',
    'Conexión IoT a Sensores de Vehículos',
    'Mercado Bilateral de Créditos de Carbono'
  ]);

  const [isEvaluated, setIsEvaluated] = useState(false);

  const archetypes = [
    {
      id: 'xaas',
      title: 'Everything-as-a-Service (XaaS)',
      icon: CloudLightning,
      desc: 'Suscripciones en la nube que sustituyen activos costosos por servicio continuo.',
      color: 'cyan'
    },
    {
      id: 'platform',
      title: 'Economía de Plataforma Ecosistémica',
      icon: Share2,
      desc: 'Conecta dos o más lados del mercado con costo marginal cero de escala.',
      color: 'orange'
    },
    {
      id: 'circular',
      title: 'Economía Circular Digital',
      icon: RefreshCw,
      desc: 'Trazabilidad digital y ciclos infinitos de reacondicionamiento y reciclaje.',
      color: 'green'
    },
    {
      id: 'ai_hyper',
      title: 'Motor de Hiper-Personalización con IA',
      icon: Sparkles,
      desc: 'Recomendaciones autónomas adaptadas en milisegundos a cada individuo.',
      color: 'red'
    }
  ];

  const toggleCapability = (cap: string) => {
    if (selectedCapabilities.includes(cap)) {
      setSelectedCapabilities(selectedCapabilities.filter((c) => c !== cap));
    } else {
      setSelectedCapabilities([...selectedCapabilities, cap]);
    }
  };

  const handleEvaluate = () => {
    onSaveModel({
      name: modelName,
      type: archetypes.find((a) => a.id === selectedArchetype)?.title || 'XaaS',
      valueProp: 'Transformación digital con eficiencia operacional y valor sostenible.',
      revenueStream: selectedRevenue,
      techStack: selectedCapabilities
    });
    setIsEvaluated(true);
  };

  return (
    <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-5 lg:p-6 shadow-xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">
              Clase 9: Innovación Disruptiva Digital
            </span>
            <h3 className="text-lg font-bold font-heading text-white">
              Creador de Modelos de Negocio Emergentes
            </h3>
          </div>
        </div>

        <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-3 py-1.5 rounded-xl">
          Ecosistema Digital 2026
        </div>
      </div>

      {/* Interactive Builder Grid */}
      <div className="py-5 space-y-6">
        
        {/* Name input */}
        <div>
          <label className="block text-xs font-bold text-slate-200 mb-1">
            Nombre de Tu Modelo Emergente / Startup:
          </label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-cyan-500 font-semibold"
          />
        </div>

        {/* 1. Select Archetype */}
        <div>
          <label className="block text-xs font-bold text-slate-200 mb-2">
            1. Arquetipo del Modelo de Negocio Emergente:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {archetypes.map((arch) => {
              const Icon = arch.icon;
              const isSelected = selectedArchetype === arch.id;

              return (
                <button
                  key={arch.id}
                  onClick={() => setSelectedArchetype(arch.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <h4 className="font-bold text-xs text-white">{arch.title}</h4>
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-400">{arch.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Digital Capabilities */}
        <div>
          <label className="block text-xs font-bold text-slate-200 mb-2">
            2. Capacidades Tecnológicas Digitales Integradas:
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'IA Generativa de Rutas Eco-Eficientes',
              'Conexión IoT a Sensores de Vehículos',
              'Mercado Bilateral de Créditos de Carbono',
              'Telemetría en Tiempo Real en la Nube',
              'Contratos Inteligentes Blockchain',
              'Analítica Predictiva de Mantenimiento'
            ].map((cap) => {
              const isChecked = selectedCapabilities.includes(cap);
              return (
                <button
                  key={cap}
                  onClick={() => toggleCapability(cap)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    isChecked
                      ? 'bg-cyan-500 text-white font-semibold border-cyan-400 shadow-sm'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isChecked ? '✓ ' : '+ '} {cap}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Revenue Architecture */}
        <div>
          <label className="block text-xs font-bold text-slate-200 mb-2">
            3. Fuente de Ingresos & Monetización:
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {[
              'Suscripción Recurrente por Uso (Pay-per-Mile) + API B2B',
              'Freemium para Usuarios + Comisión por Transacción en Plataforma',
              'Suscripción Enterprise SaaS + Monetización Anónima de Datos',
              'Modelo de Economía Circular con Recompensa por Reciclaje'
            ].map((rev) => (
              <button
                key={rev}
                onClick={() => setSelectedRevenue(rev)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedRevenue === rev
                    ? 'bg-gradient-to-r from-cyan-950 to-slate-900 border-cyan-400 text-white font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {rev}
              </button>
            ))}
          </div>
        </div>

        {/* Evaluation Feedback */}
        {isEvaluated && (
          <div className="bg-slate-950 border border-emerald-500/50 p-4 rounded-xl text-xs space-y-2 animate-fade-in">
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>Evaluación de Viabilidad por el Profesor Guía: 96/100 (Excelente Escala)</span>
            </div>
            <p className="text-slate-300">
              Tu modelo <strong>"{modelName}"</strong> combina un modelo de monetización continuo con capacidades digitales disruptivas. Esta es la esencia de la Clase 9 de la Masterclass.
            </p>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={handleEvaluate}
          disabled={isEvaluated}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:opacity-95 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
        >
          {isEvaluated ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>¡Modelo Emergente Evaluado & Registrado (+80 pts)!</span>
            </>
          ) : (
            <>
              <Zap className="w-4 h-4" />
              <span>Simular Viabilidad & Guardar Modelo</span>
            </>
          )}
        </button>

      </div>

    </div>
  );
};
