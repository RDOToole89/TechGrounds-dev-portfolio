import { Quiz } from './Quiz.js';
import { MathQuestion } from './Question.js';

const quizMount = document.querySelector('body');

const mathQuestionInstance = new MathQuestion(6);

const questionObject = mathQuestionInstance.createMathQuestion(12);

const quizApp = new Quiz(quizMount, questionObject, 5);
quizApp.createQuiz();
quizApp.populate();
