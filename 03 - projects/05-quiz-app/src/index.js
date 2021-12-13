import { Quiz } from './Quiz.js';
import { MathQuestion } from './Question.js';

const quizMount = document.querySelector('body');

const quizApp = new Quiz(quizMount);
quizApp.createQuiz(5);

const mathQuestionInstance = new MathQuestion(5);
const questionObject = mathQuestionInstance.createMathQuestion(100);
console.log(questionObject);

const populate = () => {
  const questions = document.querySelectorAll('.quiz-question');

  // [...questions].forEach((question, i) => {
  //   question.textContent = questionObject[0].
  // });
  // console.log(questions);
};

populate();
