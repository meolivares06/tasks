export interface Question {
  index: number,
  question: string;
  userAnswer?: string;
  status?: 'ok' | 'wrong';
}

export interface Lesson {
  id: number;
  title: string;
  questions: Question[];
  content: string;
  status?: 'complete' | 'incomplete';
}

export interface InputForAI {
  question: string;
  answer: string;
}

export interface QuestionEvaluation {
  questionNumber: number;
  evaluation: number;
  details: string;
}
export interface EvaluationResponse {
  evaluations: Array<QuestionEvaluation>
}

