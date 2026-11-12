import React from 'react';
import { Globe, Brain, Sparkles, HelpCircle, Unlock, CheckCircle2, ArrowRight } from 'lucide-react';
import { StudentProfile, InnovationTerm } from '../types';
import { WEF_FUTURE_SKILLS } from '../data/courseData';
import { MentalTrainingTool } from './MentalTrainingTool';

interface Hour1ContentProps {
  studentProfile: StudentProfile;
  terms: InnovationTerm[];
  onOpenTermUnlock: (term: InnovationTerm) => void;
  onCompleteMentalExercise: (bonus: number) => void;
  onAdvanceToNextHour: () => void;
}

export const Hour1Content: React.FC<Hour1ContentProps> = ({
  studentProfile,
  terms,
  onOpenTermUnlock,
  onCompleteMentalExercise,
  onAdvanceToNextHour
}) => {
  const wefTerm = terms.find((t) => t.id === 'term_wef_4ir');
  const growthMindsetTerm = terms.find((t) => t.id === 'term_growth_mindset');

  const isWefUnlocked = studentProfile.unlockedTerms.includes('term_wef_4ir');
  const isGrowthUnlocked = studentProfile.unlockedTerms.includes('term_growth_mindset');

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Banner with Generated Image */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0F172A] min-h-[320px] flex items-center p-6 lg:p-10">
        <img
          src="/src/assets/images/hero_digital_innovation_lab_1793662343035.jpg"
          alt="Laboratorio Digital de Innovación"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-orange-950/80 border border-orange-500/50 text-orange-400 text-xs font-mono font-bold">
            <Globe className="w-3.5 h-3.5" />
            <span>HORA 1 DE 3: LOS CIMIENTOS GLOBAL Y MENTAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-amber-300">Innovar</span> en la Era Digital?
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Bienvenido, <strong>{studentProfile.name}</strong>. En esta primera hora desglosaremos el panorama del <strong>Foro Económico Mundial (WEF)</strong>, la psicología detrás de los grandes innovadores y las disciplinas mentales para recablear tu cerebro.
          </p>
        </div>
      </div>

      {/* Module 1: World Economic Forum (WEF) & 4IR */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider">Módulo 1.1</span>
              <h2 className="text-xl font-bold font-heading text-white">
                El Panorama Global del Foro Económico Mundial (WEF)
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
            <p>
              El <strong>Foro Económico Mundial (WEF)</strong> proyecta que más del 85% de los empleos del futuro requerirán habilidades de pensamiento crítico, resiliencia y creatividad. La <strong>4ª Revolución Industrial (4IR)</strong> no es solo tecnología: es la velocidad con la que convertimos problemas en oportunidades.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-400">
                Top Habilidades del Innovador según el WEF:
              </h4>
              {WEF_FUTURE_SKILLS.map((sk, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-semibold text-slate-200">{sk.name}</span>
                    <span className="font-mono text-cyan-400 font-bold">{sk.level}% Relevancia</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div className={`h-full bg-gradient-to-r ${sk.color} rounded-full`} style={{ width: `${sk.level}%` }} />
                  </div>
                  <p className="text-[10px] text-slate-400">{sk.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            <img
              src="/src/assets/images/wef_digital_transformation_1793662342731.jpg"
              alt="World Economic Forum 4IR"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Surprise Gated Term 1 */}
        {wefTerm && (
          <div className="bg-slate-950/90 border border-orange-500/40 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-orange-400 font-bold uppercase">
                  Término Sorpresa de Innovación #1
                </span>
                <h4 className="font-bold text-white text-sm">{wefTerm.term}</h4>
              </div>
            </div>

            <button
              onClick={() => onOpenTermUnlock(wefTerm)}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all ${
                isWefUnlocked
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:opacity-95'
              }`}
            >
              {isWefUnlocked ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Desbloqueado</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Descubrir & Responder</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Module 2: Psychology of Innovation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Módulo 1.2</span>
            <h2 className="text-xl font-bold font-heading text-white">
              Psicología de la Innovación: Confianza Creativa & Seguridad Psicológica
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-orange-400 text-sm">1. Seguridad Psicológica (Amy Edmondson)</h4>
            <p className="text-slate-300 leading-relaxed">
              El estudio "Project Aristotle" de Google demostró que el factor número uno que separa a los equipos altamente innovadores de los mediocres es la <strong>seguridad psicológica</strong>: la certeza de que nadie en el equipo será castigado ni ridiculizado por proponer una idea loca o admitir un error.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2. Mentalidad de Crecimiento vs Fija (Carol Dweck)</h4>
            <p className="text-slate-300 leading-relaxed">
              La mentalidad fija cree que el talento para innovar es innato ("se nace creativo"). La <strong>Mentalidad de Crecimiento</strong> entiende que la creatividad es un músculo neurológico que se fortalece al experimentar, equivocarse y ajustar hipótesis rápidamente.
            </p>
          </div>
        </div>

        {/* Surprise Gated Term 2 */}
        {growthMindsetTerm && (
          <div className="bg-slate-950/90 border border-orange-500/40 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-orange-400 font-bold uppercase">
                  Término Sorpresa de Innovación #2
                </span>
                <h4 className="font-bold text-white text-sm">{growthMindsetTerm.term}</h4>
              </div>
            </div>

            <button
              onClick={() => onOpenTermUnlock(growthMindsetTerm)}
              className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all ${
                isGrowthUnlocked
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  : 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 hover:opacity-95'
              }`}
            >
              {isGrowthUnlocked ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Desbloqueado</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Descubrir & Responder</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Module 3: Interactive Mental Discipline Training */}
      <MentalTrainingTool onCompleteExercise={onCompleteMentalExercise} />

      {/* Advance to Hour 2 CTA */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onAdvanceToNextHour}
          className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xl shadow-orange-500/25 flex items-center gap-2 transition-all"
        >
          <span>Avanzar a Hora 2: Design Thinking & Estrategia</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
