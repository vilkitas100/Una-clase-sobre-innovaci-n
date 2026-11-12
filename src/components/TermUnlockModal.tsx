import React, { useState } from 'react';
import { Lock, Unlock, HelpCircle, CheckCircle2, AlertCircle, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { InnovationTerm } from '../types';

interface TermUnlockModalProps {
  term: InnovationTerm;
  isOpen: boolean;
  onClose: () => void;
  onSuccessUnlock: (termId: string) => void;
}

export const TermUnlockModal: React.FC<TermUnlockModalProps> = ({
  term,
  isOpen,
  onClose,
  onSuccessUnlock,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
    const correct = idx === term.question.correctIndex;
    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      onSuccessUnlock(term.id);
    }
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#0F172A] border-2 border-orange-500/60 rounded-2xl max-w-xl w-full p-6 shadow-2xl shadow-orange-500/20 text-slate-100 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Glow backdrop header */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Surprise header */}
        <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-orange-400">
                ¡Sorpresa de Innovación Encontrada!
              </span>
              <h3 className="text-xl font-bold font-heading text-white">{term.term}</h3>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-lg">
            <Lock className="w-3.5 h-3.5" />
            <span>Desbloqueo Requerido</span>
          </div>
        </div>

        {/* Explanation text */}
        <div className="my-5 space-y-3 text-sm text-slate-300">
          <p className="font-medium text-slate-100">{term.summary}</p>
          <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-xl text-xs leading-relaxed text-slate-300">
            {term.detailedExplanation}
          </div>
          <div className="flex items-start gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
            <span><strong>Regla de Oro:</strong> {term.keyTakeaway}</span>
          </div>
        </div>

        {/* Mandatory Gate Question */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-orange-400 mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Selecciona la respuesta correcta para continuar:</span>
          </div>
          <p className="text-sm font-semibold text-white mb-3">{term.question.prompt}</p>

          {/* Options */}
          <div className="space-y-2.5 mb-4">
            {term.question.options.map((opt, idx) => {
              let optionStyle = "bg-slate-900 border-slate-800 hover:border-orange-500/60 hover:bg-slate-800 text-slate-200 cursor-pointer";
              if (selectedOption === idx) {
                if (isCorrect) {
                  optionStyle = "bg-emerald-950/90 border-emerald-400 text-emerald-100 font-bold shadow-md shadow-emerald-500/20";
                } else {
                  optionStyle = "bg-red-950/90 border-red-500 text-red-200 font-medium";
                }
              } else if (isAnswered && idx === term.question.correctIndex) {
                optionStyle = "bg-emerald-950/70 border-emerald-500/70 text-emerald-200 font-semibold";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                >
                  <span>{opt}</span>
                  {selectedOption === idx && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {selectedOption === idx && !isCorrect && (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback message */}
          {isAnswered && (
            <div className={`p-4 rounded-xl text-xs mb-4 flex items-start gap-3 animate-fade-in ${
              isCorrect ? 'bg-emerald-950/90 border border-emerald-500/60 text-emerald-200' : 'bg-red-950/90 border border-red-500/60 text-red-200'
            }`}>
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm mb-1 text-emerald-300">¡Respuesta Correcta! Término Desbloqueado (+50 pts)</strong>
                    <p className="leading-relaxed">{term.question.explanation}</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm mb-1 text-red-300">Respuesta Incorrecta</strong>
                    <p className="leading-relaxed">Revisa la definición arriba e intenta seleccionar otra opción para desbloquear el módulo.</p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            {isCorrect ? (
              <button
                onClick={onClose}
                className="w-full py-3 px-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>¡Continuar con la Masterclass!</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : isAnswered ? (
              <button
                onClick={handleReset}
                className="w-full py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4 text-orange-400" />
                <span>Intentar Seleccionar Otra Respuesta</span>
              </button>
            ) : (
              <p className="text-[11px] text-slate-400 text-center w-full">
                Haz clic en la opción que consideres correcta para responder en vivo.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
