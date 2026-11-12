import { StudentProfile } from '../types';
import { INITIAL_BADGES } from '../data/courseData';

const STORAGE_KEY = 'masterclass_student_progress_v1';

export interface MemorySaveState {
  profile: StudentProfile;
  activeHour: 1 | 2 | 3;
  lastSavedAt: string;
}

export const defaultProfile: StudentProfile = {
  name: 'Estudiante Innovador',
  teamName: 'Equipo Alfa 4IR',
  currentHour: 1,
  progressPercent: 20,
  unlockedTerms: [],
  unlockedModules: ['m1_wef'],
  completedQuizzes: [],
  badges: INITIAL_BADGES,
  innovationScore: 120
};

export class StudentMemoryAgent {
  /**
   * Carga el estado guardado en el navegador del estudiante
   */
  static loadProgress(): MemorySaveState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return {
          profile: defaultProfile,
          activeHour: 1,
          lastSavedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      const parsed = JSON.parse(raw) as MemorySaveState;
      if (!parsed.profile || !parsed.profile.name) {
        return {
          profile: defaultProfile,
          activeHour: 1,
          lastSavedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
      }

      return parsed;
    } catch (err) {
      console.warn('Error al cargar memoria del agente:', err);
      return {
        profile: defaultProfile,
        activeHour: 1,
        lastSavedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    }
  }

  /**
   * Guarda automáticamente el progreso actual del estudiante
   */
  static saveProgress(profile: StudentProfile, activeHour: 1 | 2 | 3): string {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const payload: MemorySaveState = {
      profile,
      activeHour,
      lastSavedAt: timestamp
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      console.error('Error al guardar en memoria local:', err);
    }

    return timestamp;
  }

  /**
   * Genera un código de sincronización / restauración
   */
  static generateSyncCode(profile: StudentProfile, activeHour: 1 | 2 | 3): string {
    const payload = {
      profile,
      activeHour,
      v: 1
    };
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    } catch {
      return '';
    }
  }

  /**
   * Restaura el progreso desde un código de sincronización copiado
   */
  static restoreFromSyncCode(code: string): MemorySaveState | null {
    try {
      const jsonStr = decodeURIComponent(escape(atob(code.trim())));
      const parsed = JSON.parse(jsonStr);
      if (parsed && parsed.profile && parsed.profile.name) {
        const restored: MemorySaveState = {
          profile: parsed.profile,
          activeHour: parsed.activeHour || 1,
          lastSavedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(restored));
        return restored;
      }
      return null;
    } catch (err) {
      console.error('Código de sincronización inválido:', err);
      return null;
    }
  }

  /**
   * Limpia la memoria local para reiniciar la clase desde cero
   */
  static resetMemory(): MemorySaveState {
    localStorage.removeItem(STORAGE_KEY);
    const initial: MemorySaveState = {
      profile: defaultProfile,
      activeHour: 1,
      lastSavedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
}
