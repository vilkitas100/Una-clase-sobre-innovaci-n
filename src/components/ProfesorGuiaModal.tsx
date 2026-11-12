import React, { useState } from 'react';
import { X, Send, Sparkles, Bot, Lightbulb, Users, ShieldCheck, Rocket } from 'lucide-react';

interface ProfesorGuiaModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  teamName: string;
}

interface ChatMessage {
  sender: 'profesor' | 'student';
  text: string;
  timestamp: string;
}

export const ProfesorGuiaModal: React.FC<ProfesorGuiaModalProps> = ({
  isOpen,
  onClose,
  studentName,
  teamName
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'profesor',
      text: `¡Hola ${studentName}! Soy tu Profesor Guía de Innovación. Estoy aquí para trabajar codo a codo contigo y con tu equipo "${teamName}". ¿En qué concepto, reto o técnica de Design Thinking o modelos de negocio deseas profundizar hoy?`,
      timestamp: 'Ahora'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    "¿Cómo vencemos el miedo al fracaso en el equipo?",
    "¿Qué nos enseña el Foro Económico Mundial sobre la 4IR?",
    "¿Cómo aplicamos Design Thinking a una idea digital?",
    "¿Qué es una Organización Ambidextra en palabras simples?"
  ];

  const generateGuideResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('miedo') || q.includes('fracaso') || q.includes('psicología')) {
      return `¡Gran pregunta, ${studentName}! En psicología de la innovación (como demuestra Amy Edmondson en Google), la clave es la "Seguridad Psicológica". En el equipo "${teamName}", ningún integrante debe sentirse juzgado por lanzar una idea audaz. Recuerda: los prototipos que fallan rápido ahorran millones de dólares y meses de trabajo. ¡El error es solo una hipótesis no validada!`;
    }
    if (q.includes('wef') || q.includes('foro') || q.includes('4ir') || q.includes('futuro')) {
      return `El Foro Económico Mundial (WEF) señala que en la 4ª Revolución Industrial las empresas no compiten producto a producto, sino por la agilidad de sus ecosistemas. Para ti y ${teamName}, las habilidades clave son el pensamiento crítico, la resolución de problemas complejos y la flexibilidad cognitiva.`;
    }
    if (q.includes('design thinking') || q.includes('empatía') || q.includes('prototipo')) {
      return `En Design Thinking, jamás empieces diseñando la solución sin haber sentido el dolor del usuario. La ruta dorada es: 1) Empatizar profundamente, 2) Definir el problema real (no los síntomas), 3) Idear sin censura previa, 4) Prototipar lo más simple posible, y 5) Probar con usuarios reales.`;
    }
    if (q.includes('ambidextra') || q.includes('modelo') || q.includes('negocio') || q.includes('xaas')) {
      return `En administración de empresas, una Organización Ambidextra tiene una mano optimizando el negocio actual (explotar) y la otra mano experimentando modelos del futuro (explorar). Hoy en la era digital (Clase 9), pasar de vender productos físicos a servicios recurrentes (XaaS) es el movimiento más potente.`;
    }
    return `¡Excelente inquietud, ${studentName}! Como profesor guía, mi recomendación para ti y ${teamName} es desglosar la idea desde los Primeros Principios (First Principles): ¿cuál es la necesidad humana fundamental y qué tecnología digital de la Clase 9 te permite resolverla 10 veces mejor? ¡Pruébalo en el laboratorio interactivo!`;
  };

  const handleSend = async (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'student',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // Try backend endpoint if available or compute smart professor answer
      const res = await fetch('/api/profesor-guia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: messageText, studentName, teamName })
      });
      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          {
            sender: 'profesor',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
        setIsTyping(false);
        return;
      }
    } catch {
      // Fallback to guide response engine
    }

    setTimeout(() => {
      const guideText = generateGuideResponse(messageText);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'profesor',
          text: guideText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0F172A] border border-cyan-500/40 rounded-2xl max-w-2xl w-full h-[600px] flex flex-col shadow-2xl shadow-cyan-500/20 text-slate-100 overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/30">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white font-heading text-base">Profesor Guía de Innovación</h3>
                <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-md font-mono">
                  En Línea
                </span>
              </div>
              <p className="text-xs text-slate-400">Mentoría colaborativa para {studentName} & {teamName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 ${
                msg.sender === 'student' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  msg.sender === 'student'
                    ? 'bg-orange-500 text-white'
                    : 'bg-cyan-600 text-white'
                }`}
              >
                {msg.sender === 'student' ? studentName.charAt(0) : 'PG'}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                  msg.sender === 'student'
                    ? 'bg-orange-600 text-white rounded-tr-none'
                    : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
                <span
                  className={`block text-[9px] mt-1 text-right ${
                    msg.sender === 'student' ? 'text-orange-200' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-cyan-400 bg-slate-900 border border-slate-800 p-3 rounded-2xl w-fit">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>El Profesor Guía está redactando una orientación...</span>
            </div>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(qp)}
              className="px-2.5 py-1 text-[11px] bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg text-slate-300 hover:text-white whitespace-nowrap shrink-0 transition-colors"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pregúntale algo al Profesor Guía..."
            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 text-white p-2 rounded-xl transition-all shadow-md shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
