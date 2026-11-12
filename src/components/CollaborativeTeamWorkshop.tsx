import React, { useState } from 'react';
import { Users, Shield, Lightbulb, Code2, Coins, CheckCircle2, Award, Zap } from 'lucide-react';
import { StudentProfile } from '../types';

interface CollaborativeTeamWorkshopProps {
  studentProfile: StudentProfile;
  onCompleteWorkshop: (scoreBonus: number) => void;
}

export const CollaborativeTeamWorkshop: React.FC<CollaborativeTeamWorkshopProps> = ({
  studentProfile,
  onCompleteWorkshop
}) => {
  const [selectedRole, setSelectedRole] = useState<'visionario' | 'empatico' | 'tecnologo' | 'estratega'>('empatico');
  const [teamDecision, setTeamDecision] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const roles = [
    {
      id: 'empatico',
      name: 'El Empático Design Thinker',
      icon: Lightbulb,
      duty: 'Asegura que cada decisión empiece observando el dolor real del usuario y manteniendo la seguridad psicológica en las reuniones.',
      color: 'emerald'
    },
    {
      id: 'visionario',
      name: 'El Visionario del Océano Azul',
      icon: Users,
      duty: 'Desafía las suposiciones tradicionales de la industria y busca mercados donde la competencia sea irrelevante.',
      color: 'orange'
    },
    {
      id: 'tecnologo',
      name: 'El Arquitecto Digital 4IR',
      icon: Code2,
      duty: 'Integra Inteligencia Artificial, nube e IoT para construir plataformas de costo marginal cero.',
      color: 'cyan'
    },
    {
      id: 'estratega',
      name: 'El Financiero Ambidextro',
      icon: Coins,
      duty: 'Equilibra el flujo de caja del negocio actual mientras protege el presupuesto para la exploración del futuro.',
      color: 'red'
    }
  ];

  const simulationOptions = [
    {
      title: 'Opción A: Pivote Radical a Modelo XaaS con IA',
      desc: 'Reunir al equipo en un sprint de 48 horas de Design Thinking para convertir el producto en un servicio por suscripción guiado por IA.',
      isRecommended: true,
      feedback: '¡Excelente decisión colaborativa! Escucharon las alertas del mercado, mantuvieron la seguridad psicológica y pivotaron con agilidad.'
    },
    {
      title: 'Opción B: Reducción de Precios Físicos en 50%',
      desc: 'Competir en una guerra de precios directa recortando los márgenes del producto tradicional.',
      isRecommended: false,
      feedback: 'Esta decisión cae en el Océano Rojo. Destruye el margen de ganancia sin aportar valor verdaderamente innovador.'
    },
    {
      title: 'Opción C: Bloquear la entrada del competidor mediante demandas legales',
      desc: 'Distraer al equipo directivo en litigios prolongados en lugar de innovar.',
      isRecommended: false,
      feedback: 'Ceguera ante la disrupción. La historia demuestra que la innovación destruye a quienes intentan frenarla con litigios.'
    }
  ];

  const handleSelectDecision = (index: number) => {
    setTeamDecision(index);
    if (simulationOptions[index].isRecommended) {
      setIsCompleted(true);
      onCompleteWorkshop(70);
    }
  };

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 lg:p-6 shadow-xl relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Dinámica de Grupo & Resolución de Crisis
            </span>
            <h3 className="text-lg font-bold font-heading text-white">
              Taller de Innovación Colaborativa para {studentProfile.teamName}
            </h3>
          </div>
        </div>

        <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Seguridad Psicológica Activa</span>
        </div>
      </div>

      {/* 1. Assign Team Roles */}
      <div className="py-5 space-y-4">
        <h4 className="text-xs font-bold text-slate-200">
          1. Asigna tu Rol Clave dentro del Equipo "{studentProfile.teamName}":
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {roles.map((r) => {
            const Icon = r.icon;
            const isSelected = selectedRole === r.id;

            return (
              <button
                key={r.id}
                onClick={() => setSelectedRole(r.id as any)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <h5 className="font-bold text-xs text-white">{r.name}</h5>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">{r.duty}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Collaborative Challenge Simulation */}
      <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
          <Zap className="w-4 h-4" />
          <span>Reto Simulado de Crisis Empresarial:</span>
        </div>
        <p className="text-xs leading-relaxed text-slate-200">
          Un nuevo competidor tecnológico ha lanzado un producto similar al de tu empresa de forma 100% gratuita impulsado por IA. La junta directiva está en pánico. ¿Cómo toma el equipo <strong>"{studentProfile.teamName}"</strong> esta decisión crucial bajo tu liderazgo como <strong>{roles.find(r => r.id === selectedRole)?.name}</strong>?
        </p>

        {/* Options */}
        <div className="space-y-2">
          {simulationOptions.map((opt, idx) => {
            const isSelected = teamDecision === idx;

            return (
              <button
                key={idx}
                onClick={() => handleSelectDecision(idx)}
                className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex flex-col gap-1.5 ${
                  isSelected
                    ? opt.isRecommended
                      ? 'bg-emerald-950/90 border-emerald-400 text-white font-semibold'
                      : 'bg-red-950/90 border-red-500 text-red-200'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{opt.title}</span>
                  {isSelected && opt.isRecommended && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  )}
                </div>
                <p className="text-slate-400 text-[11px]">{opt.desc}</p>
                {isSelected && (
                  <p className={`text-[11px] mt-1 font-medium ${opt.isRecommended ? 'text-emerald-300' : 'text-red-300'}`}>
                    ➔ {opt.feedback}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {isCompleted && (
          <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 p-3 rounded-xl border border-emerald-800">
            <Award className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>¡Felicitaciones! El equipo {studentProfile.teamName} ha superado la crisis demostrando gran liderazgo colaborativo (+70 pts).</span>
          </div>
        )}
      </div>

    </div>
  );
};
