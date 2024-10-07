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
