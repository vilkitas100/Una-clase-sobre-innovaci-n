import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API Endpoint for Profesor Guía AI
app.post('/api/profesor-guia', async (req, res) => {
  try {
    const { prompt, studentName, teamName } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      return res.status(200).json({
        reply: `¡Hola ${studentName}! Como tu Profesor Guía de Innovación para el equipo "${teamName}", te recuerdo que para innovar debemos conectar el pensamiento crítico con la agilidad digital. ¡Sigue probando en el laboratorio interactivo!`
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Eres un inspirador Profesor Guía de Innovación en una masterclass universitaria de 3 horas. 
El estudiante se llama "${studentName}" y pertenece al equipo "${teamName}". 
El tema actual es la Clase 9: Innovación en la Era Digital, Foro Económico Mundial, Design Thinking, Psicología de la Innovación y Modelos de Negocio Emergentes.
Responde de forma entusiasta, clara y estructurada (máximo 3 párrafos cortos) a la siguiente consulta del estudiante:
"${prompt}"`
    });

    const reply = response.text || `¡Excelente pregunta ${studentName}! Sigamos explorando los modelos emergentes de la Clase 9.`;
    return res.json({ reply });
  } catch (err: any) {
    console.error('Error in Profesor Guía API:', err);
    return res.status(200).json({
      reply: `¡Gran consulta! Recuerda que en Design Thinking y en la era digital (Clase 9), la clave está en empatizar con el usuario e iterar rápidamente en equipo.`
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true }
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Masterclass App server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
