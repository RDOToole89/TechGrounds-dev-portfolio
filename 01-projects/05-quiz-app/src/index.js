import { Quiz } from './Quiz.js';
import { MathQuestion } from './Question.js';

const quizMount = document.querySelector('body');

const mathQuestionInstance = new MathQuestion(5);
// console.log('INSTANCE', mathQuestionInstance);

const questionObject = mathQuestionInstance.createMathQuestion(12);
// console.log('QUESTION OBJECT', questionObject);

const quizApp = new Quiz(quizMount, questionObject, 5);
quizApp.createQuiz();
quizApp.populate();
