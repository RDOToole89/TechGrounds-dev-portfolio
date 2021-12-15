import { Quiz } from './Quiz.js';
import { Question } from './Question.js';

const quizMount = document.querySelector('body');

const question = new Question(6);

const questionObject = question.createMathQuestion(12);

const quizApp = new Quiz(quizMount, questionObject, 5);
quizApp.createQuiz();
quizApp.populate();
