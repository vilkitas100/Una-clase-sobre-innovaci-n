import React, { useState } from 'react';
import { Layers, Heart, Target, Lightbulb, PenTool, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { StudentProfile } from '../types';

interface DesignThinkingSimulatorProps {
  studentProfile: StudentProfile;
  onSaveIdea: (idea: { problem: string; targetUser: string; solution: string; businessModel: string }) => void;
}

export const DesignThinkingSimulator: React.FC<DesignThinkingSimulatorProps> = ({
  studentProfile,
  onSaveIdea
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [targetUser, setTargetUser] = useState('Estudiantes y Jóvenes Profesionales en Ciudades Latinoamericanas');
  const [userPain, setUserPain] = useState('Pierden 2 horas diarias en transporte y sienten estrés financiero al no poder acceder a educación técnica de vanguardia.');
  const [problemStatement, setProblemStatement] = useState('¿Cómo podríamos ofrecer micro-capacitaciones interactivas en audio y voz para optimizar el tiempo de traslado diario?');
  const [solutionIdea, setSolutionIdea] = useState('Plataforma EduVoice en la nube con tutor IA que convierte traslados en micro-clases interactivas de 15 minutos con certificación.');
  const [prototypeFormat, setPrototypeFormat] = useState('MVP Interactivo en Web App / PWA');
  const [testMetric, setTestMetric] = useState('80% de tasa de retención semanal en 100 usuarios piloto');

  const [isSaved, setIsSaved] = useState(false);

  const handleFinish = () => {
    onSaveIdea({
      problem: problemStatement,
      targetUser: targetUser,
      solution: solutionIdea,
      businessModel: 'Freemium / Suscripción XaaS'
    });
    setIsSaved(true);
  };

  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 lg:p-6 shadow-xl relative overflow-hidden">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
              Metodología de Estructuración
            </span>
            <h3 className="text-lg font-bold font-heading text-white">
              Laboratorio Design Thinking en 5 Etapas
            </h3>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { step: 1, label: 'Empatizar', icon: Heart },
            { step: 2, label: 'Definir', icon: Target },
            { step: 3, label: 'Idear', icon: Lightbulb },
            { step: 4, label: 'Prototipar', icon: PenTool },
            { step: 5, label: 'Evaluar', icon: CheckCircle }
          ].map((st) => {
            const Icon = st.icon;
            const isActive = currentStep === st.step;
            const isCompleted = currentStep > st.step;

            return (
              <button
                key={st.step}
                onClick={() => setCurrentStep(st.step as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                    : isCompleted
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                    : 'bg-slate-950 text-slate-500 border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{st.step}. {st.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="py-6">
        
        {/* Step 1: Empatizar */}
        {currentStep === 1 && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Heart className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Etapa 1: Empatizar con el Usuario Real</strong>
                Entiende las emociones, frustraciones y necesidades no articuladas de las personas antes de pensar en cualquier tecnología.
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  1.1 ¿Quién es tu usuario objetivo (Arquetipo / Persona)?
                </label>
                <input
                  type="text"
                  value={targetUser}
                  onChange={(e) => setTargetUser(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  1.2 ¿Cuál es su mayor dolor, fricción o necesidad profunda?
                </label>
                <textarea
                  value={userPain}
                  onChange={(e) => setUserPain(e.target.value)}
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Definir */}
        {currentStep === 2 && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Target className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Etapa 2: Definir el Problema Central (Pregunta HMW / ¿Cómo Podríamos...?)</strong>
                Sintetiza la investigación de empatía en una declaración de problema accionable y desafiante.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Formulación HMW (How Might We / ¿Cómo podríamos...?):
              </label>
              <textarea
                value={problemStatement}
                onChange={(e) => setProblemStatement(e.target.value)}
                rows={3}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        )}

        {/* Step 3: Idear */}
        {currentStep === 3 && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Etapa 3: Idear sin Juzgar (Pensamiento Divergente)</strong>
                Genera múltiples alternativas. Combina tecnología de la Clase 9 (IA, Nube, Suscripción XaaS) para resolver la pregunta HMW.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Descripción de la Solución Innovadora Selecciónada:
              </label>
              <textarea
                value={solutionIdea}
                onChange={(e) => setSolutionIdea(e.target.value)}
                rows={3}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>
        )}

        {/* Step 4: Prototipar */}
        {currentStep === 4 && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <PenTool className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Etapa 4: Prototipar Rápido (Producto Mínimo Viable)</strong>
                El prototipo debe ser algo tangible que se pueda probar con usuarios en menos de 48 horas.
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-semibold text-slate-200">
                Selecciona la Forma de Tu Prototipo Rápido:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  'MVP Interactivo en Web App / PWA',
                  'Figma Wireframe Interactivo',
                  'Video Demo Narrado de 60 segundos',
                  'Landing Page con Registro de Lista de Espera'
                ].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setPrototypeFormat(fmt)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      prototypeFormat === fmt
                        ? 'bg-emerald-950/80 border-emerald-500 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Evaluar */}
        {currentStep === 5 && (
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-300">
                <strong className="text-white block mb-0.5">Etapa 5: Evaluar con Métricas Clave de Validación</strong>
                Prueba la hipótesis con usuarios reales para recibir retroalimentación e iterar la idea.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1">
                Métrica de Éxito / Criterio de Validación del Prototipo:
              </label>
              <input
                type="text"
                value={testMetric}
                onChange={(e) => setTestMetric(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-emerald-500 mb-4"
              />
            </div>

            <div className="bg-slate-950/90 border border-emerald-500/50 p-4 rounded-xl text-xs space-y-2">
              <span className="text-emerald-400 font-bold uppercase tracking-wider block">Resumen del Proyecto Design Thinking:</span>
              <p><strong className="text-slate-300">Usuario:</strong> {targetUser}</p>
              <p><strong className="text-slate-300">Desafío:</strong> {problemStatement}</p>
              <p><strong className="text-slate-300">Solución:</strong> {solutionIdea}</p>
              <p><strong className="text-slate-300">Prototipo:</strong> {prototypeFormat}</p>
            </div>
          </div>
        )}

      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1) as any)}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold rounded-xl flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        {currentStep < 5 ? (
          <button
            onClick={() => setCurrentStep((prev) => Math.min(5, prev + 1) as any)}
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
          >
            <span>Siguiente Etapa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            disabled={isSaved}
            className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/30 transition-all"
          >
            {isSaved ? (
              <>
                <CheckCircle className="w-4 h-4 text-white" />
                <span>¡Proyecto Guardado en tu Perfil!</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Finalizar & Guardar Proyecto</span>
              </>
            )}
          </button>
        )}
      </div>

    </div>
  );
};
