import React, { useState } from 'react';
import { Layers, Compass, Film, Smartphone, Home, Rocket, Sparkles, CheckCircle2, Unlock, ArrowRight, HelpCircle, AlertCircle } from 'lucide-react';
import { StudentProfile, InnovationTerm } from '../types';
import { CASE_STUDIES } from '../data/courseData';
import { DesignThinkingSimulator } from './DesignThinkingSimulator';

interface Hour2ContentProps {
  studentProfile: StudentProfile;
  terms: InnovationTerm[];
  onOpenTermUnlock: (term: InnovationTerm) => void;
  onSaveDesignIdea: (idea: any) => void;
  onAdvanceToNextHour: () => void;
  onAddScore: (points: number) => void;
}

export const Hour2Content: React.FC<Hour2ContentProps> = ({
  studentProfile,
  terms,
  onOpenTermUnlock,
  onSaveDesignIdea,
  onAdvanceToNextHour,
  onAddScore
}) => {
  const blueOceanTerm = terms.find((t) => t.id === 'term_blue_ocean');
  const ambidextrousTerm = terms.find((t) => t.id === 'term_ambidextrous');

  const isBlueOceanUnlocked = studentProfile.unlockedTerms.includes('term_blue_ocean');
  const isAmbidextrousUnlocked = studentProfile.unlockedTerms.includes('term_ambidextrous');

  const [activeCase, setActiveCase] = useState<string>('netflix');
  const [caseAnswers, setCaseAnswers] = useState<Record<string, number>>({});

  const handleSelectCaseAnswer = (caseId: string, optIndex: number, isCorrect: boolean) => {
    setCaseAnswers((prev) => ({ ...prev, [caseId]: optIndex }));
    if (isCorrect) {
      onAddScore(50);
    }
  };

  const currentCase = CASE_STUDIES.find((c) => c.id === activeCase) || CASE_STUDIES[0];
  const selectedCaseOptIndex = caseAnswers[currentCase.id];
  const selectedCaseOpt = selectedCaseOptIndex !== undefined ? currentCase.interactiveChallenge.options[selectedCaseOptIndex] : null;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-[#0F172A] min-h-[320px] flex items-center p-6 lg:p-10">
        <img
          src="/src/assets/images/design_thinking_collaborative_1793662343484.jpg"
          alt="Design Thinking Workshop"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-mono font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>HORA 2 DE 3: METODOLOGÍA & ESTRATEGIA CORPORATIVA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Design Thinking & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Estrategias Disruptivas</span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            En esta segunda hora entraremos a la acción: estructuraremos un proyecto paso a paso con <strong>Design Thinking</strong>, revisaremos las mejores técnicas de administración estratégica y descubriremos las historias detrás de las innovaciones más deslumbrantes.
          </p>
        </div>
      </div>

      {/* Module 2.1: Design Thinking 5-Stage Interactive Sandbox */}
      <DesignThinkingSimulator studentProfile={studentProfile} onSaveIdea={onSaveDesignIdea} />

      {/* Module 2.2: Business Administration & Strategy */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Módulo 2.2</span>
            <h2 className="text-xl font-bold font-heading text-white">
              Técnicas de Administración de Empresas para Innovar
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">1. Estrategia de Océano Azul (Chan Kim & Mauborgne)</h4>
            <p className="text-slate-300 leading-relaxed">
              En lugar de pelear en el "Océano Rojo" saturado de competidores reduciendo precios, la empresa crea un nuevo espacio de mercado que vuelve irrelevante a la competencia mediante la innovación en valor.
            </p>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-cyan-400 text-sm">2. Innovación Disruptiva vs Sostenible (Clayton Christensen)</h4>
            <p className="text-slate-300 leading-relaxed">
              La innovación sostenible mejora productos existentes para los mejores clientes actuales. La <strong>innovación disruptiva</strong> introduce soluciones más accesibles o simples que eventualmente transforman toda la industria.
            </p>
          </div>
        </div>

        {/* Surprise Terms 3 & 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {blueOceanTerm && (
            <div className="bg-slate-950/90 border border-emerald-500/40 p-4 rounded-xl flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">Término Sorpresa</span>
                <h4 className="font-bold text-white text-xs">{blueOceanTerm.term}</h4>
              </div>
              <button
                onClick={() => onOpenTermUnlock(blueOceanTerm)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  isBlueOceanUnlocked
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                {isBlueOceanUnlocked ? '✓ Visto' : 'Desbloquear'}
              </button>
            </div>
          )}

          {ambidextrousTerm && (
            <div className="bg-slate-950/90 border border-cyan-500/40 p-4 rounded-xl flex items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">Término Sorpresa</span>
                <h4 className="font-bold text-white text-xs">{ambidextrousTerm.term}</h4>
              </div>
              <button
                onClick={() => onOpenTermUnlock(ambidextrousTerm)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  isAmbidextrousUnlocked
                    ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                    : 'bg-cyan-500 text-white hover:bg-cyan-600'
                }`}
              >
                {isAmbidextrousUnlocked ? '✓ Visto' : 'Desbloquear'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Module 2.3: Fascinating Stories of Innovation */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Módulo 2.3</span>
              <h2 className="text-xl font-bold font-heading text-white">
                Historias de las Innovaciones Más Deslumbrantes
              </h2>
            </div>
          </div>

          {/* Selector tabs */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs overflow-x-auto">
            {CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(c.id)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeCase === c.id ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.company}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study */}
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-xl font-extrabold text-white font-heading">{currentCase.company}</h3>
              <p className="text-xs text-orange-400 font-medium">{currentCase.tagline}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="font-mono text-[10px] text-orange-400 font-bold uppercase">1. La Chispa (The Spark)</span>
              <p className="text-slate-300">{currentCase.theSpark}</p>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase">2. La Disrupción</span>
              <p className="text-slate-300">{currentCase.theDisruption}</p>
            </div>

            <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase">3. La Fórmula Secreta</span>
              <p className="text-slate-300">{currentCase.theSecretFormula}</p>
            </div>
          </div>

          {/* Interactive Case Quiz Challenge */}
          <div className="bg-slate-900/90 border border-orange-500/30 p-4 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
              <HelpCircle className="w-4 h-4" />
              <span>Reto de Análisis del Caso {currentCase.company}:</span>
            </div>
            <p className="text-xs font-semibold text-white">{currentCase.interactiveChallenge.scenario}</p>

            <div className="space-y-2">
              {currentCase.interactiveChallenge.options.map((opt, idx) => {
                const selected = selectedCaseOptIndex === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectCaseAnswer(currentCase.id, idx, opt.isCorrect)}
                    className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      selected
                        ? opt.isCorrect
                          ? 'bg-emerald-950/90 border-emerald-400 text-emerald-100 font-bold'
                          : 'bg-red-950/90 border-red-500 text-red-200'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-orange-500/60'
                    }`}
                  >
                    <span>{opt.text}</span>
                    {selected && opt.isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {selected && !opt.isCorrect && (
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedCaseOpt && (
              <div className={`p-3 rounded-xl text-xs flex items-start gap-2 animate-fade-in ${
                selectedCaseOpt.isCorrect ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-200' : 'bg-red-950/80 border border-red-500/50 text-red-200'
              }`}>
                {selectedCaseOpt.isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold mb-0.5">
                    {selectedCaseOpt.isCorrect ? '¡Análisis Correcto (+50 pts)!' : 'Respuesta Incorrecta:'}
                  </strong>
                  <p>{selectedCaseOpt.feedback}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Advance to Hour 3 CTA */}
      <div className="flex justify-end pt-4">
        <button
          onClick={onAdvanceToNextHour}
          className="px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-xl shadow-emerald-500/25 flex items-center gap-2 transition-all cursor-pointer"
        >
          <span>Avanzar a Hora 3: Clase 9 Era Digital & Modelos Emergentes</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
