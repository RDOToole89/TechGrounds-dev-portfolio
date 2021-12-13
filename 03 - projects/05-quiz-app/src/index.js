import { Quiz } from './Quiz.js';
import { MathQuestion } from './Question.js';

const quizMount = document.querySelector('body');

const mathQuestionInstance = new MathQuestion(5);
const questionObject = mathQuestionInstance.createMathQuestion(100);
// console.log(questionObject);

const quizApp = new Quiz(quizMount, questionObject);
quizApp.createQuiz(5);

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
