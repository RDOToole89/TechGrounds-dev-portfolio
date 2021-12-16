import {
  createElement,
  createStringNumbersArray,
  mountElements,
  removeClassesChildrenNodes,
} from './helper.js';

export class Quiz {
  constructor(target, questionObject, questionTotalCount) {
    this.quiz = this.createQuiz();
    this.questionObject = questionObject;
    this.target = target;
    this.questionNumber = 0;
    this.questionTotalCount = questionTotalCount;
  }

  // Method which builds the quiz UI and mounts it to a target on the DOM
  createQuiz() {
    const activeQuiz = document.querySelector('.quiz-container');
    if (activeQuiz) return;

    // Parent Element
    const newQuiz = createElement('div', 'quiz-container');

    // Child element of the newQuiz
    const quizTop = createElement('div', 'quiz-top');

    // Child elements of quizTop
    const quizHeading = createElement('h1', 'quiz-top__heading', 'Math Problem');
    const quizCount = createElement('p', 'quiz-top__count', '1 / 6');
    const quizDisplay = createElement('p', 'quiz-top__display');

    // Mounts child elements of quiztop to quiz-top container
    mountElements([quizHeading, quizCount, quizDisplay], quizTop);

    // Create question container
    const quizQuestionContainer = createElement('div', 'quiz-question__container');

    // Holds questions to be mounted to the quiz question container
    const quizQuestions = [];

    // Array to add the correct className to the question element
    const stringNumbers = createStringNumbersArray(this.questionTotalCount);

    // Loops over the numbers array and creates a question element

    for (let i = 1; i < stringNumbers.length; i++) {
      // creates a question and adds the correct classes
      const question = createElement('div', [
        'quiz-question',
        `quiz-question__${stringNumbers[i]}`,
      ]);

      const questionNumber = createElement('div', 'quiz-question__number', i);
      const questionAnswer = createElement('p', 'quiz-question__answer');
      this.isCorrect(questionAnswer);

      // Depending on if i is even or not it will be mounted in a different direction
      if (i % 2 === 0) {
        mountElements([questionAnswer, questionNumber], question);
        quizQuestions.push(question);
      }

      if (i % 2 !== 0) {
        mountElements([questionNumber, questionAnswer], question);
        quizQuestions.push(question);
      }
    }

    // Creates controls for the UI (previous and next button)
    const controls = createElement('div', 'controls');
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

    // Mounts elements to the different components of the UI
    mountElements([buttonPrevious, buttonNext], controls);
    mountElements([...quizQuestions], quizQuestionContainer);
    mountElements([quizTop, quizQuestionContainer], newQuiz);

    // Appends the quiz and controls to DOM target
    this.target?.appendChild(newQuiz);
    this.target?.appendChild(controls);

    return newQuiz;
  }

  // Controls dictate forward and backward movement on the on the quiz
  // Takes in an element and a direction: (previous / next)
  controls(buttonElement, direction) {
    switch (direction) {
      case 'next': {
        buttonElement.addEventListener('click', () => {
          // Why doesn't this work in the outerscope of the switch => ?!
          const questions = document.querySelectorAll('.quiz-question');

          // If the end of the quiz has been reached don't allow next
          if (this.questionNumber === this.questionTotalCount) return;
          this.questionNumber++;

          removeClassesChildrenNodes([...questions], ['correct', 'incorrect']);
          this.populate(this.questionNumber);
        });
        break;
      }

      case 'previous': {
        buttonElement.addEventListener('click', () => {
          const questions = document.querySelectorAll('.quiz-question');
          // If the user tries to go back in the quiz at count 0, dont allow previous.
          if (this.questionNumber < 1) return;
          this.questionNumber--;

          removeClassesChildrenNodes([...questions], ['correct', 'incorrect']);
          this.populate(this.questionNumber);
        });
        break;
      }
      default: {
        break;
      }
    }
  }

  // HOW TO REPOPULATE ON NEXT AND PREVIOUS
  // if (this.questionObject[this.questionNumber].answered) {
  //   console.log(
  //     'IF AN ANSWER EXISTS IN NEXT => ANSWER IS',
  //     this.questionObject[this.questionNumber].answered
  //   );

  //   const iteratableNodelist = [...questions[this.questionNumber].childNodes];

  //   if (iteratableNodelist) {
  //     const answerNode = iteratableNodelist.find((node) =>
  //       node.classList.contains('quiz-question__answer')
  //     );

  //     console.log('ANSWERNODE', answerNode);

  //     this.isCorrect(answerNode);
  //     this.populate(this.questionNumber);
  //     return;
  //   }
  // }

  // Method that determines whether the answer that is being clicked on is correct
  isCorrect(element) {
    console.log('ELEMENT in IS CORRECT', element);
    element.addEventListener('click', () => {
      console.log('CLICK');
      let questionObject = this.questionObject;
      const answer = Number(element.textContent);
      questionObject[this.questionNumber].answered = answer;

      // console.log('QUESTION-OBJECT', questionObject);

      // Grabs the correct answer in the questions
      const correctAnswer = questionObject[this.questionNumber].correctAnswer;
      // console.log('CORRECT ANSWER', correctAnswer);

      // Grabs all questions on the current iteration
      const questionsOnPage = document.querySelectorAll('.quiz-question');
      // console.log('SELECT ALL QUESTIONS', questionsOnPage);

      // If the answer is correct add the correct class and disable further interaction with questions
      if (answer === correctAnswer) {
        // questionsOnPage.forEach((question) => (question.style.pointerEvents = 'none'));

        element.parentNode.childNodes.forEach((element) => element.classList.add('correct'));
      } else {
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

          // question.style.pointerEvents = 'none';
        });
        return;
      }
    });
  }

  // Method which populates the quiz with the questions
  populate() {
    const questions = document.querySelectorAll('.quiz-question');
    const question = document.querySelector('.quiz-top__display');
    const questionUiCounter = document.querySelector('.quiz-top__count');

    question.textContent = this.questionObject[this.questionNumber].question;

    // Loops over the question to select the answer part of the ui
    [...questions].forEach((question, i) => {
      const questionContent = [...question.children].find((el) =>
        el.classList.contains('quiz-question__answer')
      );

      // Appends the question count to the UI
      questionUiCounter.textContent = `${this.questionNumber + 1} / 6`;

      // Inserts the answers from the possible answers array into the UI

      questionContent.innerText = this.questionObject[this.questionNumber].possibleAnswers[i];
    });
  }
}
