import { Quiz } from './Quiz.js';
import { MathQuestion } from './Question.js';

let questionNumber = 1;

const quizMount = document.querySelector('body');

const mathQuestionInstance = new MathQuestion(5);
// console.log('INSTANCE', mathQuestionInstance);

const questionObject = mathQuestionInstance.createMathQuestion(12);
// console.log('QUESTION OBJECT', questionObject);

const quizApp = new Quiz(quizMount, questionObject, 5);
quizApp.createQuiz();

const populate = () => {
  const questions = document.querySelectorAll('.quiz-question');
  const question = document.querySelector('.quiz-top__display');

  question.textContent = questionObject[0].question;

  [...questions].forEach((question, i) => {
    const questionContent = [...question.children].find((el) =>
      el.classList.contains('quiz-question__answer')
    );
    questionContent.innerText = questionObject[0].possibleAnswers[i];
  });
  // console.log(questions);
};

populate();
