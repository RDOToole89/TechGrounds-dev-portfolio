import { Quiz } from './Quiz';
const quizMount: HTMLElement = document?.querySelector('.quiz')!;

console.log(quizMount);

const quizApp = new Quiz(quizMount);
quizApp.createQuiz();
