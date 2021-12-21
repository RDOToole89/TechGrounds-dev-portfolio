import {
  createElement,
  createStringNumbersArray,
  mountElements,
  removeClassesChildrenNodes,
} from './helper.js';

import { Question } from './Question.js';
import { checkAnswerCorrectAddClass } from './quizHelper.js';

export class Quiz {
  constructor(target, questionTotalCount) {
    this.target = target;
    this.questionObject = null;
    this.questionTotalCount = questionTotalCount;
    this.quiz = this.createQuiz();
    this.questionNumber = 0;
    this.questionsAnswered = 0;
    this.questionsCorrectlyAnswered = 0;
    this.start = false;
  }

  // Method which builds the quiz UI and mounts it to a target on the DOM.
  createQuiz() {
    // Parent Element
    const newQuiz = createElement('div', 'quiz-container');

    // Child element of the newQuiz.
    const quizTop = createElement('div', 'quiz-top');

    // Child elements of quizTop.
    const quizHeading = createElement('h1', 'quiz-top__heading', 'Math Problem');
    const quizCount = createElement('p', 'quiz-top__count', '1 / 6');
    const quizDisplay = createElement('p', 'quiz-top__display');

    // Mounts child elements of quiztop to quiz-top container.
    mountElements([quizHeading, quizCount, quizDisplay], quizTop);

    // Create question container.
    const quizQuestionContainer = createElement('div', 'quiz-question__container');

    // Holds questions to be mounted to the quiz question container.
    const quizQuestions = [];

    // Array to add the correct className to the question element.
    const stringNumbers = createStringNumbersArray(this.questionTotalCount);

    // Loops over the numbers array and creates a question element.

    for (let i = 1; i < stringNumbers.length; i++) {
      // Creates a question and adds the correct classes.
      const question = createElement(
        'div',
        ['quiz-question', `quiz-question__${stringNumbers[i]}`],
        null,
        null,
        ['number', `${i}`]
      );

      const questionNumber = createElement('div', 'quiz-question__number', i);
      const questionAnswer = createElement('p', 'quiz-question__answer');
      this.isCorrect(questionAnswer);

      // Depending on if i is even or not it will be mounted in a different direction.
      if (i % 2 === 0) {
        mountElements([questionAnswer, questionNumber], question);
        quizQuestions.push(question);
      }

      if (i % 2 !== 0) {
        mountElements([questionNumber, questionAnswer], question);
        quizQuestions.push(question);
      }
    }

    // Creates controls for the UI (previous and next button).
    const controls = createElement('div', ['controls']);
    const buttonPrevious = createElement(
      'button',
      ['controls__btn', 'controls__btn--previous', 'btn'],
      'previous'
    );
    this.controls(buttonPrevious, 'previous');

    const buttonNext = createElement(
      'button',
      ['controls__btn', 'controls__btn--next', 'btn'],
      'next'
    );

    this.controls(buttonNext, 'next');

    // Mounts elements to the different components of the UI.
    mountElements([buttonPrevious, buttonNext], controls);
    mountElements([...quizQuestions], quizQuestionContainer);
    mountElements([quizTop, quizQuestionContainer], newQuiz);

    // Start button with onClick handler function to initialize the quiz.
    const startOnClick = () => {
      this.start = true;
      this.init();
    };

    const startBtn = createElement(
      'button',
      ['controls__btn', 'controls__btn--start', 'btn'],
      'start',
      startOnClick
    );

    this.target.append(controls);
    this.target.append(startBtn);

    return newQuiz;
  }

  // Controls dictate forward and backward movement on the on the quiz.
  // Takes in an element and a direction: (previous / next).
  controls(buttonElement, direction) {
    switch (direction) {
      case 'next': {
        buttonElement.addEventListener('click', () => {
          const buttons = document.querySelector('.controls');
          const nextButton = document.querySelector('.controls__btn--next');
          // Why doesn't this work in the outerscope of the switch => ?!
          const questionNodes = document.querySelectorAll('.quiz-question');

          // If all questions have been answered change text on the next button to 'finish'.
          if (this.questionNumber === 5 && this.questionsAnswered === 5) {
            nextButton.textContent = 'finish';
          }

          // If the next button is in the 'finish; state and the questions have all been answered finish the quiz.
          if (nextButton.textContent === 'finish' && this.questionsAnswered === 5) {
            this.start = false;
            this.quiz = this.quiz.remove();
            buttons.classList.remove('display-controls');
            this.questionObject = null;

            this.finish();
            return;
          }

          if (this.questionNumber + 1 === 6 && this.questionsAnswered === 5) {
            const nextButton = document.querySelector('.controls__btn--next');
            nextButton.innerText = 'finish';
          }

          // If the end of the quiz has been reached don't allow next.
          if (this.questionNumber === this.questionTotalCount) return;
          this.questionNumber++;

          // Checks if the user has answered the question if not it will reset the pointer event to initial.
          if (!this.questionObject[this.questionNumber].userAnswer) {
            questionNodes.forEach((question) => (question.style.pointerEvents = 'initial'));
          }

          // When the user clicks next removes all classes from the questions so 'correctness of answers' doesn't persist.
          removeClassesChildrenNodes([...questionNodes], ['correct', 'incorrect']);

          // Repopulate the quiz with the next list of generated questions.
          this.populate(this.questionNumber);

          const userAnswer = this.questionObject[this.questionNumber].userAnswer?.toString();
          const correctAnswer = this.questionObject[this.questionNumber]?.correctAnswer.toString();

          // If the user has ANSWERED call the helper function which searches the childnodes of the questions
          // and adds the correct class based on correctness of the answer
          if (userAnswer) {
            checkAnswerCorrectAddClass(
              questionNodes,
              'quiz-question__answer',
              userAnswer,
              correctAnswer,
              ['correct', 'incorrect']
            );
          }
        });
        break;
      }

      case 'previous': {
        buttonElement.addEventListener('click', () => {
          if (this.questionNumber < 6) {
            const nextButton = document.querySelector('.controls__btn--next');
            nextButton.innerText = 'next';
          }

          const questionNodes = [...document.querySelectorAll('.quiz-question')];

          // If the user tries to go back in the quiz at count 0, dont allow previous.
          if (this.questionNumber < 1) return;
          this.questionNumber--;

          // Checks if the user has answered the question if not it will reset the pointer event to initial.
          if (!this.questionObject[this.questionNumber].userAnswer) {
            questionNodes.forEach((question) => (question.style.pointerEvents = 'initial'));
          }

          // When the user clicks previous removes all classes from the questions so 'correctness of answers' doesn'.
          removeClassesChildrenNodes([...questionNodes], ['correct', 'incorrect']);

          // Repopulate the quiz with the next list of generated questions.
          this.populate(this.questionNumber);

          const userAnswer = this.questionObject[this.questionNumber].userAnswer?.toString();
          const correctAnswer = this.questionObject[this.questionNumber]?.correctAnswer.toString();

          // If the user has ANSWERED call the helper function which searches the childnodes of the question
          // and adds the correct class based on correctness of the answer.
          if (userAnswer) {
            checkAnswerCorrectAddClass(
              questionNodes,
              'quiz-question__answer',
              userAnswer,
              correctAnswer,
              ['correct', 'incorrect']
            );
          }
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  // Method that determines whether the answer that is being clicked on is correct.
  isCorrect(element) {
    element.addEventListener('click', () => {
      if (this.questionsAnswered < 5) this.questionsAnswered++;

      // Changes the text on the next button to 'finish' when the quiz has been completed.
      if ((this.questionsAnswered === 5) & (this.questionNumber === 5)) {
        const nextButton = document.querySelector('.controls__btn--next');
        nextButton.innerText = 'finish';
      }

      let questionObject = this.questionObject;
      const answer = Number(element.textContent);
      questionObject[this.questionNumber].userAnswer = answer;

      // Grabs the correct answer in the questions
      const correctAnswer = questionObject[this.questionNumber].correctAnswer;

      // Grabs all questions on the current iteration
      const questionsOnPage = document.querySelectorAll('.quiz-question');

      // If the answer is correct add the correct class and disable further interaction with questions
      if (answer === correctAnswer) {
        const correct = new Audio(
          'https://www.freesoundslibrary.com/wp-content/uploads/2018/03/right-answer-ding-ding-sound-effect.mp3'
        );
        correct.play();

        this.questionsCorrectlyAnswered++;

        questionsOnPage.forEach((question) => (question.style.pointerEvents = 'none'));

        element.parentNode.childNodes.forEach((element) => element.classList.add('correct'));
      } else {
        const wrong = new Audio(
          'https://www.freesoundslibrary.com/wp-content/uploads/2018/03/game-show-buzzer-sound-effect.mp3'
        );
        wrong.play();

        // If the answer is not correct it must be incorrect
        element.parentNode.childNodes.forEach((element) => element.classList.add('incorrect'));

        // Loop over all questions and find the correct answer
        questionsOnPage.forEach((question, i) => {
          const findAnswerNode = [...question.children].find((node) =>
            node.classList.contains('quiz-question__answer')
          );

          // Convert the text to an integer for comparison
          const foundAnswer = Number(findAnswerNode.textContent);

          // if the foundAnswer iteration is the correct answer add the 'correct' class.
          if (correctAnswer === foundAnswer) {
            findAnswerNode.parentNode.childNodes.forEach((element) =>
              element.classList.add('correct')
            );
          }

          question.style.pointerEvents = 'none';
        });
        return;
      }
    });
  }

  // Method which populates the quiz with the questions.
  populate() {
    const questions = document.querySelectorAll('.quiz-question');
    const question = document.querySelector('.quiz-top__display');
    const questionUiCounter = document.querySelector('.quiz-top__count');

    question.textContent = this.questionObject[this.questionNumber].question;

    // Loops over the question to select the answer part of the ui.
    [...questions].forEach((question, i) => {
      const questionContent = [...question.children].find((el) =>
        el.classList.contains('quiz-question__answer')
      );

      // Appends the question count to the UI.
      questionUiCounter.textContent = `${this.questionNumber + 1} / 6`;

      // Inserts the answers from the possible answers array into the UI.
      questionContent.innerText = this.questionObject[this.questionNumber].possibleAnswers[i];
    });
  }

  // The finish method ends the game and provides the user with an outcome.
  finish() {
    if (this.questionsCorrectlyAnswered < 4) {
      const loser = new Audio(
        'https://www.freesoundslibrary.com/wp-content/uploads/2017/11/boo-sound.mp3'
      );
      loser.play();
    } else {
      const winner = new Audio(
        'https://www.freesoundslibrary.com/wp-content/uploads/2018/05/crowd-sound-effect.mp3'
      );
      winner.play();
    }

    // Determines the outcome styles based on user performance.
    const quizOutcomeClass =
      this.questionsCorrectlyAnswered < 4 ? 'quiz-outcome--loser' : 'quiz-outcome--winner';
    const quizOutcome = createElement('div', ['quiz-outcome', quizOutcomeClass]);

    // Determines the outcome sentence based on the user performance.
    const outcomeSenctence =
      this.questionsCorrectlyAnswered < 4 ? 'Time to go back to school!' : "You're pretty smart!";
    const quizOutcomeHeading = createElement('h2', 'quiz-outcome__heading', outcomeSenctence);

    const quizOutcomeCountClass = this.questionsCorrectlyAnswered < 4 ? '--loser' : '--winner';
    const quizOutcomeText = createElement('p', 'quiz-outcome__text');

    // Changes the number of correct answers coloring styles based on the the user performance.
    quizOutcomeText.insertAdjacentHTML(
      'afterbegin',
      `You got <span class="quiz-outcome__number quiz-outcome__number${quizOutcomeCountClass}">
      ${this.questionsCorrectlyAnswered}</span> out of 
      <span class="quiz-outcome__number quiz-outcome__number${quizOutcomeCountClass}">${
        this.questionTotalCount + 1
      }
      </span>!`
    );

    // onClick handler which restarts the quiz.
    const restartOnClick = () => {
      const quizOutcomeContainer = document.querySelector('.quiz-outcome');
      quizOutcomeContainer.remove();

      this.quiz = null;
      this.questionObject = null;
      this.quiz = this.createQuiz();
      this.questionNumber = 0;
      this.questionsAnswered = 0;
      this.questionsCorrectlyAnswered = 0;
      const nextButton = document.querySelector('.controls__btn--next');
      nextButton.innerText = 'next';

      this.start = !this.start;
      this.init();
    };

    // Creates a restart button.
    const restartBtn = createElement(
      'button',
      ['btn', 'controls__btn', 'controls__btn--restart', 'display-controls'],
      'restart',
      restartOnClick
    );

    // Mounts it to the UI.
    mountElements([quizOutcomeHeading, quizOutcomeText, restartBtn], quizOutcome);

    this.target.append(quizOutcome);
  }

  // The init method starts the quiz and creates new random questions.
  init() {
    const startBtn = document.querySelector('.controls__btn--start');
    const controls = document.querySelector('.controls');

    this.questionObject = new Question(6).createMathQuestion(12);

    // If the quiz has been started remove the start button and display quiz.
    if (this.start) {
      startBtn.remove();
      this.target.insertAdjacentElement('afterbegin', this.quiz);
      this.populate();
      controls.classList.add('display-controls');
    }
  }
}
