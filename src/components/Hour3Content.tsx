import React, { useState } from 'react';
import { BookOpen, Compass, Users, Award, Sparkles, CheckCircle2, Unlock, ArrowRight, HelpCircle, AlertCircle, RotateCcw } from 'lucide-react';
import { StudentProfile, InnovationTerm } from '../types';
import { MASTERCLASS_QUIZ, EMERGING_BUSINESS_MODELS_DATA } from '../data/courseData';
import { BusinessModelCanvas } from './BusinessModelCanvas';
import { CollaborativeTeamWorkshop } from './CollaborativeTeamWorkshop';

interface Hour3ContentProps {
  studentProfile: StudentProfile;
  terms: InnovationTerm[];
  onOpenTermUnlock: (term: InnovationTerm) => void;
  onSaveBusinessModel: (model: any) => void;
  onCompleteWorkshop: (bonus: number) => void;
  onAddScore: (points: number) => void;
  onOpenCertificate: () => void;
}

export const Hour3Content: React.FC<Hour3ContentProps> = ({
  studentProfile,
  terms,
  onOpenTermUnlock,
  onSaveBusinessModel,
  onCompleteWorkshop,
  onAddScore,
  onOpenCertificate
}) => {
  const xaasTerm = terms.find((t) => t.id === 'term_xaas');
  const isXaasUnlocked = studentProfile.unlockedTerms.includes('term_xaas');

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showMissingAlert, setShowMissingAlert] = useState(false);

  const handleSelectQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optIdx }));
    setShowMissingAlert(false);
  };

  const handleEvaluateQuiz = () => {
    if (Object.keys(quizAnswers).length < MASTERCLASS_QUIZ.length) {
      setShowMissingAlert(true);
      return;
    }

    let score = 0;
    MASTERCLASS_QUIZ.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 20; // 20 pts per question = 100 max
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
    onAddScore(score);
  };

  const handleRetryQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
    setShowMissingAlert(false);
  };

  const answeredCount = Object.keys(quizAnswers).length;

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-[#00F0FF]/30 bg-[#0F172A] min-h-[320px] flex items-center p-6 lg:p-10">
        <img
          src="/src/assets/images/emerging_business_models_1793662343662.jpg"
          alt="Emerging Digital Business Models"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/90 to-transparent" />

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>HORA 3 DE 3: CLASE 9 - LA ERA DIGITAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Innovación en la Era Digital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Modelos de Negocio Emergentes</span>
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Bienvenido al clímax de la Masterclass (<strong>Clase 9</strong>). Analizaremos la economía de plataformas, el modelo XaaS (Everything-as-a-Service), la economía circular y la hiper-personalización con IA, finalizando con el Taller Colaborativo y tu Examen de Certificación.
          </p>
        </div>
      </div>

      {/* Overview Cards of 4 Emerging Models */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {EMERGING_BUSINESS_MODELS_DATA.map((mod) => (
          <div
            key={mod.id}
            className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex flex-col justify-between space-y-3 hover:border-cyan-500/50 transition-colors"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded-md">
                {mod.tag}
              </span>
              <h4 className="font-bold text-white text-sm mt-2">{mod.name}</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{mod.description}</p>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500 font-mono">
              Ejemplos: {mod.examples}
            </div>
          </div>
        ))}
      </div>

      {/* Surprise Term 5: XaaS */}
      {xaasTerm && (
        <div className="bg-slate-950/90 border border-cyan-500/40 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                Término Sorpresa Clase 9 #5
              </span>
              <h4 className="font-bold text-white text-sm">{xaasTerm.term}</h4>
            </div>
          </div>

          <button
            onClick={() => onOpenTermUnlock(xaasTerm)}
            className={`px-4 py-2 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
              isXaasUnlocked
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:opacity-95'
            }`}
          >
            {isXaasUnlocked ? (
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

      {/* Module 3.1: Business Model Creator */}
      <BusinessModelCanvas studentProfile={studentProfile} onSaveModel={onSaveBusinessModel} />

      {/* Module 3.2: Collaborative Team Workshop */}
      <CollaborativeTeamWorkshop studentProfile={studentProfile} onCompleteWorkshop={onCompleteWorkshop} />

      {/* Module 3.3: Final Masterclass Quiz & Graduation */}
      <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 flex items-center justify-center text-white shadow-md shadow-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Módulo 3.3</span>
              <h2 className="text-xl font-bold font-heading text-white">
                Evaluación Final & Graduación de la Masterclass
              </h2>
            </div>
          </div>

          <div className="text-xs font-mono font-bold text-orange-400 bg-orange-950/80 border border-orange-800 px-3 py-1.5 rounded-xl w-fit">
            Respuestas Completa: {answeredCount}/5
          </div>
        </div>

        <p className="text-xs text-slate-300">
          Haz clic en la opción que consideres correcta para cada una de las 5 preguntas. Una vez respondidas todas, evalúa tu examen para obtener tu Certificado Oficial.
        </p>

        {showMissingAlert && (
          <div className="p-3.5 bg-amber-950/90 border border-amber-500 rounded-xl text-xs text-amber-200 flex items-center gap-2 animate-bounce">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong>Faltan preguntas por responder:</strong> Has contestado {answeredCount} de 5 preguntas. Por favor selecciona una opción en las preguntas pendientes marcadas en rojo.
            </span>
          </div>
        )}

        <div className="space-y-4">
          {MASTERCLASS_QUIZ.map((q, idx) => {
            const isAnswered = quizAnswers[q.id] !== undefined;
            const isMissing = showMissingAlert && !isAnswered;

            return (
              <div
                key={q.id}
                className={`p-4 rounded-xl space-y-3 text-xs transition-all border ${
                  isMissing
                    ? 'bg-red-950/40 border-red-500 shadow-md shadow-red-500/20'
                    : isAnswered
                    ? 'bg-slate-950 border-emerald-800/80'
                    : 'bg-slate-950 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-orange-400 font-mono font-bold block">
                    Pregunta {idx + 1} de 5 (Hora {q.hour})
                  </span>
                  {isAnswered && !quizSubmitted && (
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Respondida
                    </span>
                  )}
                </div>

                <p className="font-semibold text-white text-sm">{q.question}</p>

                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = quizAnswers[q.id] === oIdx;

                    let optStyle = "bg-slate-900 border-slate-800 text-slate-300 hover:border-orange-500/60 hover:bg-slate-850 cursor-pointer";
                    if (isSelected) {
                      optStyle = "bg-orange-950/90 border-orange-500 text-white font-bold shadow-sm shadow-orange-500/20";
                    }
                    if (quizSubmitted) {
                      if (oIdx === q.correctIndex) {
                        optStyle = "bg-emerald-950/90 border-emerald-400 text-emerald-100 font-bold";
                      } else if (isSelected && oIdx !== q.correctIndex) {
                        optStyle = "bg-red-950/90 border-red-500 text-red-200";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={quizSubmitted}
                        onClick={() => handleSelectQuizAnswer(q.id, oIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between gap-2 ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {isSelected && !quizSubmitted && (
                          <div className="w-2.5 h-2.5 rounded-full bg-orange-400 shrink-0" />
                        )}
                        {quizSubmitted && oIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {quizSubmitted && (
                  <div className="mt-2 p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-[11px] text-slate-300">
                    <strong className="text-emerald-400">Explicación:</strong> {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiz result feedback & Certificate Trigger */}
        {!quizSubmitted ? (
          <button
            onClick={handleEvaluateQuiz}
            className="w-full py-3.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:opacity-95 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4" />
            <span>Evaluar Examen Final Masterclass ({answeredCount}/5 Respondidas)</span>
          </button>
        ) : (
          <div className="bg-slate-950 border-2 border-amber-500/60 p-6 rounded-2xl text-center space-y-4 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/50 text-amber-400 font-mono font-extrabold text-2xl">
              {quizScore}%
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              ¡Examen Evaluado con Éxito para {studentProfile.name}!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Has completado las 3 Horas de la Masterclass y los contenidos de la Clase 9 de Innovación Digital. ¡Obtén tu Certificado Oficial de Excelencia!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={onOpenCertificate}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 hover:opacity-95 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Award className="w-5 h-5 text-white" />
                <span>Ver & Imprimir Certificado de Excelencia</span>
              </button>

              <button
                onClick={handleRetryQuiz}
                className="w-full sm:w-auto px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-orange-400" />
                <span>Re-intentar Examen</span>
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
