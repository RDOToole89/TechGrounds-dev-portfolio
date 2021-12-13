import { Quiz } from './Quiz.js';
const quizMount = document.querySelector('body');

console.log(quizMount);

const quizApp = new Quiz(quizMount);
quizApp.createQuiz(5);
