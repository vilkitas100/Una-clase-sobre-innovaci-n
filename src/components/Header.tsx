import React from 'react';
import { Sparkles, Award, Compass, BookOpen, Clock } from 'lucide-react';
import { StudentProfile } from '../types';

interface HeaderProps {
  studentProfile: StudentProfile;
  activeHour: 1 | 2 | 3;
  onSelectHour: (hour: 1 | 2 | 3) => void;
  onOpenProfesorGuia: () => void;
  onOpenCertificate: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  studentProfile,
  activeHour,
  onSelectHour,
  onOpenProfesorGuia,
  onOpenCertificate
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); onSelectHour(1); }}
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 via-red-500 to-cyan-400 p-0.5 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0B0F19] rounded-[6px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-orange-400" />
            </div>
          </div>
          <span className="font-heading">
            Masterclass <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-cyan-400">Innovación</span>
          </span>
        </a>

        {/* Zone 2: Single-line hour navigation links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => onSelectHour(1)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeHour === 1
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Hora 1: Fundamentos & Mente</span>
          </button>

          <button
            onClick={() => onSelectHour(2)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeHour === 2
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Hora 2: Design Thinking & Estrategia</span>
          </button>

          <button
            onClick={() => onSelectHour(3)}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeHour === 3
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Hora 3: Modelos Era Digital</span>
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenProfesorGuia}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all shadow-sm whitespace-nowrap shrink-0 group"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
            <span>Profesor Guía IA</span>
          </button>

          <button
            onClick={onOpenCertificate}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-xl hover:opacity-95 transition-opacity shadow-md shadow-orange-500/25 whitespace-nowrap shrink-0"
          >
            <Award className="w-4 h-4" />
            <span className="hidden sm:inline">Certificado</span>
          </button>
        </div>

      </div>

      {/* Mobile nav tab row */}
      <div className="flex md:hidden items-center justify-around mt-2.5 pt-2 border-t border-slate-800/60 text-xs">
        <button
          onClick={() => onSelectHour(1)}
          className={`py-1 px-2 font-medium border-b-2 transition-colors ${
            activeHour === 1 ? 'border-orange-500 text-orange-400 font-bold' : 'border-transparent text-slate-400'
          }`}
        >
          Hora 1
        </button>
        <button
          onClick={() => onSelectHour(2)}
          className={`py-1 px-2 font-medium border-b-2 transition-colors ${
            activeHour === 2 ? 'border-emerald-500 text-emerald-400 font-bold' : 'border-transparent text-slate-400'
          }`}
        >
          Hora 2
        </button>
        <button
          onClick={() => onSelectHour(3)}
          className={`py-1 px-2 font-medium border-b-2 transition-colors ${
            activeHour === 3 ? 'border-cyan-500 text-cyan-400 font-bold' : 'border-transparent text-slate-400'
          }`}
        >
          Hora 3 (Clase 9)
        </button>
      </div>
    </header>
  );
};
