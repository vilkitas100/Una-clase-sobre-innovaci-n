export interface StudentProfile {
  name: string;
  teamName: string;
  currentHour: 1 | 2 | 3;
  progressPercent: number; // 0 to 100
  unlockedTerms: string[];
  unlockedModules: string[];
  completedQuizzes: string[];
  badges: Badge[];
  innovationScore: number; // calculated from quiz answers & challenges
  designThinkingIdea?: {
    problem: string;
    targetUser: string;
    solution: string;
    businessModel: string;
  };
  createdBusinessModel?: {
    name: string;
    type: string;
    valueProp: string;
    revenueStream: string;
    techStack: string[];
  };
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt?: string;
  color: 'orange' | 'red' | 'green' | 'cyan';
}

export interface InnovationTerm {
  id: string;
  term: string;
  category: 'WEF' | 'Psychology' | 'Business' | 'DesignThinking' | 'Digital';
  summary: string;
  detailedExplanation: string;
  keyTakeaway: string;
  question: {
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  tagline: string;
  theSpark: string;
  theDisruption: string;
  theSecretFormula: string;
  keyLesson: string;
  interactiveChallenge: {
    scenario: string;
    options: {
      text: string;
      isCorrect: boolean;
      feedback: string;
    }[];
  };
}

export interface QuizQuestion {
  id: string;
  hour: 1 | 2 | 3;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  badgeToUnlock?: Badge;
}

export interface MentalExercise {
  id: string;
  title: string;
  description: string;
  technique: string;
  durationSeconds: number;
}
