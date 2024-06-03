export type Question = {
  id: string;
  question: string;
  choices: string[];
  answer: string;
};

export type FormQuestions = {
  [key: string]: string;
};
