import { Quiz } from './Quiz.js';
const quizMount = document.querySelector('#quiz');

console.log(quizMount);

const quizApp = new Quiz(quizMount);
quizApp.createQuiz();
