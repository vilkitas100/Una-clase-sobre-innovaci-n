import React from 'react';
import { X, Printer, Award, Sparkles, CheckCircle2, ShieldCheck, Globe, Star } from 'lucide-react';
import { StudentProfile } from '../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentProfile: StudentProfile;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentProfile
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-[#0F172A] border-2 border-amber-500/60 rounded-3xl max-w-3xl w-full p-6 lg:p-10 shadow-2xl shadow-amber-500/20 text-slate-100 relative print:m-0 print:p-8 print:border-4 print:border-amber-600 print:bg-white print:text-black">
        
        {/* Action bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>Documento Oficial de Graduación</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Certificate Card Printable Area */}
        <div className="border-4 border-double border-amber-500/40 p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 print:bg-white print:text-slate-900 text-center relative overflow-hidden">
          
          {/* Subtle ornate background circles */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none print:hidden" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none print:hidden" />

          {/* Header Seal */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-orange-500 to-red-500 p-0.5 shadow-xl shadow-amber-500/30">
              <div className="w-full h-full bg-[#0B0F19] print:bg-white rounded-[14px] flex items-center justify-center text-amber-400">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>

          <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-amber-400 block mb-2">
            ACADEMIA DE INNOVACIÓN DIGITAL & ESTRATEGIA
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white print:text-slate-900 tracking-tight mb-2">
            CERTIFICADO DE EXCELENCIA
          </h2>

          <p className="text-xs text-slate-400 print:text-slate-600 mb-6 font-medium">
            Se otorga con distinción de honor el presente reconocimiento a:
          </p>

          {/* Student Name */}
          <div className="my-4 py-2 border-b-2 border-amber-500/50 inline-block px-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-cyan-300 print:text-amber-700 tracking-tight">
              {studentProfile.name}
            </h1>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 max-w-xl mx-auto my-6 leading-relaxed">
            Por haber completado exitosamente las 3 Horas de Masterclass y superado los retos de <strong>Clase 9: Innovación en la Era Digital y Modelos de Negocio Emergentes</strong>, aplicando principios del Foro Económico Mundial (WEF), metodologías de Design Thinking, psicología de la innovación y liderazgo en el equipo <strong>"{studentProfile.teamName}"</strong>.
          </p>

          {/* Key Metrics / Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 my-6 py-4 border-y border-slate-800 print:border-slate-300 text-xs">
            <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Star className="w-4 h-4 text-amber-400" />
              <span>Cociente Innovador: {studentProfile.innovationScore} pts</span>
            </div>
            <span aria-hidden="true" className="text-slate-700 print:text-slate-300">·</span>
            <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Estrategia WEF & 4IR</span>
            </div>
            <span aria-hidden="true" className="text-slate-700 print:text-slate-300">·</span>
            <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Seguridad Psicológica</span>
            </div>
          </div>

          {/* Signatures & Seal */}
          <div className="grid grid-cols-2 gap-8 pt-8 mt-4 border-t border-slate-800/80 print:border-slate-300 max-w-lg mx-auto text-center">
            <div>
              <div className="font-heading font-extrabold text-white print:text-slate-900 text-sm mb-1 italic">
                Profesor Guía de Innovación
              </div>
              <div className="h-0.5 w-32 bg-amber-500/60 mx-auto my-2" />
              <span className="text-[10px] text-slate-400 print:text-slate-600 uppercase tracking-wider block">
                Director de Masterclass
              </span>
            </div>

            <div>
              <div className="font-mono font-bold text-cyan-400 print:text-slate-900 text-xs mb-1">
                {currentDate}
              </div>
              <div className="h-0.5 w-32 bg-cyan-500/60 mx-auto my-2" />
              <span className="text-[10px] text-slate-400 print:text-slate-600 uppercase tracking-wider block">
                Fecha de Emisión
              </span>
            </div>
          </div>

          {/* Verification Code */}
          <div className="mt-8 text-[9px] font-mono text-slate-500 print:text-slate-400 uppercase tracking-widest">
            ID DE VERIFICACIÓN OFICIAL: CLASE9-INNOV-{Math.floor(100000 + Math.random() * 900000)}
          </div>

        </div>

      </div>
    </div>
  );
};
