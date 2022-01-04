const container = document.getElementById('container');
const startBtn = document.querySelector('.button');

const questions = [
  {
    question: 'Wat is 49 - 32',
    number: '1',
    options: ['13', '17', '-17', '16', '697'],
    rightAnswer: 1,
    correctAnswer: 17,
    userAnswer: null,
  },
  {
    question: 'Wat is 70 - 14',
    number: '2',
    options: ['18', '79', '56', '32', '34'],
    rightAnswer: 2,
    correctAnswer: 56,
    userAnswer: null,
  },
  {
    question: 'Wat is 80 - 15',
    number: '3',
    options: ['74', '65', '93', '40', '975'],
    rightAnswer: 1,
    correctAnswer: 65,
    userAnswer: null,
  },
  {
    question: 'Wat is 10 - 20',
    number: '4',
    options: ['-350', '-15', '-10', '-34', '34'],
    rightAnswer: 2,
    correctAnswer: -10,
    userAnswer: null,
  },
  {
    question: 'Wat is 56 + 11',
    number: '5',
    options: ['102', '37', '44', '67', '50'],
    rightAnswer: 3,
    correctAnswer: 67,
    userAnswer: null,
  },
  {
    question: 'Wat is 21 - 16',
    number: '6',
    options: ['170', '18', '5', '2', '26'],
    rightAnswer: 2,
    correctAnswer: 5,
    userAnswer: null,
  },
];

// Quiz STATE variables
let counter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;

// UI CEATION LOGIC

//Creates a start button with an onClick handler that STARTS the quiz and requests a new question
const startBtnHandler = () => {
  const startBtn = document.createElement('button');
  startBtn.classList.add('button');
  startBtn.innerText = 'START';
  container.append(startBtn);

  startBtn.onclick = () => {
    startQuiz();
    getNewQuestion();

    startBtn.classList.add('hide');
  };
};

startBtnHandler();

// Creates Title and appends to the UI
const createTitle = () => {
  const quizContent = document.querySelector('.quiz_content');
  const quizTitle = document.createElement('div');
  quizTitle.classList.add('quiz_title');
  quizTitle.innerText = 'Math problems';
  quizContent.append(quizTitle);
};

// Creates Question Boxes and appends to the UI
const createQuestionBox = () => {
  const quizContent = document.querySelector('.quiz_content');
  const numberOfQuestion = document.createElement('div');
  numberOfQuestion.classList.add('number_of_all_questions');
  quizContent.append(numberOfQuestion);
  const questionBox = document.createElement('div');
  questionBox.classList.add('quiz_question');
  quizContent.append(questionBox);
};

// Creates Answer Boxes and appends to the UI
const createAnswerBoxes = () => {
  const quizContent = document.querySelector('.quiz_content');
  const answerBoxes = document.createElement('div');
  answerBoxes.classList.add('answer_boxes');
  quizContent.append(answerBoxes);
};

// USER RESULT CHECKING LOGIC

function getResult(element) {
  const answerBoxesDivs = document.querySelectorAll('.answer');

  console.log('ANSWERBOXES', answerBoxesDivs);

  const id = parseInt(element.id);
  //get the answer by comparing the id of clicked option
  if (id === currentQuestion.rightAnswer) {
    element.classList.add('correct');
    correctAnswers++;
    // console.log('correct:' + correctAnswers);
  } else {
    element.classList.add('wrong');
    const answersLen = answerBoxesDivs.length;
    for (let i = 0; i < answersLen; i++) {
      if (answerBoxesDivs[i].id === currentQuestion.rightAnswer.toString()) {
        answerBoxesDivs[i].classList.add('correct');
      }
    }
  }
  unClickableOptions();
}

function unClickableOptions() {
  const answerBoxesDivs = document.querySelectorAll('.answer');
  const answersLen = answerBoxesDivs.length;
  for (let i = 0; i < answersLen; i++) {
    answerBoxesDivs[i].classList.add('already_answered');
  }
}

// Checks if the user has answered and adds the correct or wrong class accordingly
function checkCorrectness() {
  // Check if the user has answered the current question
  if (currentQuestion.userAnswer !== null) {
    // Select all the answer DIVS on the page
    const answers = document.querySelectorAll('.answer');

    // The user HAS answered the question => disable the click events
    unClickableOptions();

    // [...answers] => verandert de answers DOM NODELIST hierboven naar een JavaScript array => dit heet 'array destructuring' is heel handig om dingen zoals kopies van array of array achtige datastructuren te maken.

    [...answers].forEach((answer) => {
      // Deze loop kijkt naar iedere answer in de currentQuestion

      // Dit zijn de variabelen die we willen vergelijken om te bepalen of we
      // correct of wrong class moeten toevoegen.
      const answerNumber = Number(answer.textContent);
      const userAnswer = currentQuestion.userAnswer;
      const correctAnswer = currentQuestion.correctAnswer;

      // Add correct class if Answer has been given by the user regardless of whether
      // the user has answered correct or not
      if (userAnswer !== null && answerNumber === correctAnswer) {
        answer.classList.add('correct');
      }

      // Add wrong class ONLY if the user has answered the question and the user
      // answered the question wrong.
      if (userAnswer !== null && answerNumber === userAnswer) {
        answer.classList.add('wrong');
      }
    });
  }
}

// Button Handling Functions UI and LOGIC
const buttonsHandler = () => {
  const quizContainer = document.querySelector('.quiz_container');
  const prevButton = document.createElement('button');

  prevButton.classList.add('button', 'prev_button');
  prevButton.innerText = 'Vorige';

  quizContainer.append(prevButton);
  const nextButton = document.createElement('button');
  nextButton.classList.add('button', 'next_button');
  nextButton.innerText = 'Volgende';
  quizContainer.append(nextButton);

  // On NEXT click button logic
  nextButton.onclick = () => {
    counter++;

    if (counter === questions.length) {
      quizOver();
    } else {
      // removes all the questions?
      document.querySelector('.answer_boxes').innerHTML = '';
      getNewQuestion();

      // Checks if the user has answered the question and if its correct
      checkCorrectness();

      console.log('QUESTION', questions);
    }
  };
  // On PREVIOUS click button logic
  prevButton.onclick = () => {
    // Checkt of je onder de 0 gaat in je vragen array zo ja returned de functie zodat je niet meer
    // kan klikken.
    if (counter <= 0) return;

    counter--;
    document.querySelector('.answer_boxes').innerHTML = '';

    getNewQuestion();
    // Checks if the user has answered the question and if its correct
    checkCorrectness();
  };
};

const getNewQuestion = () => {
  // QUESTION NUMBER ON THE UI
  const numberOfQuestion = document.querySelector('.number_of_all_questions');

  // MAIN QUIZ QUESTION
  const questionBox = document.querySelector('.quiz_question');

  // CONTAINER FOR THE ANSWERS! => not answers themself
  const answerBoxes = document.querySelector('.answer_boxes');

  numberOfQuestion.innerText = counter + 1 + ' / ' + questions.length;

  const questionIndex = availableQuestions[counter];

  currentQuestion = questionIndex;

  questionBox.innerText = currentQuestion.question;

  //get the length of options
  const optionLen = currentQuestion.options.length;
  // prev.push(questionIndex)
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
    //random option
    const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
    //get the position 'optionIndex' from availableOptions
    const index2 = availableOptions.indexOf(optionIndex);
    //remove the 'optionIndex' from availableOptions to prevent repeating
    availableOptions.splice(index2, 1);
    const answerOption = document.createElement('div');
    answerOption.classList.add('answer');
    answerBoxes.append(answerOption);
    answerOption.innerText = currentQuestion.options[optionIndex];
    answerOption.id = optionIndex;

    answerOption.addEventListener('click', (event) => {
      const userClickedAnswer = event.target.textContent;
      currentQuestion.userAnswer = Number(userClickedAnswer);
      getResult(answerOption);
    });
  }
};

function setAvailableQuestions() {
  const totalQuestion = questions.length;
  for (i = 0; i < totalQuestion; i++) {
    availableQuestions.push(questions[i]);
  }
}

// QUIZ START, END AND RESET LOGIC

function resetQuiz() {
  counter = 0;
  correctAnswers = 0;
}

function restartQuiz() {
  const result = document.querySelector('.end_result');

  result.remove();

  resetQuiz();
  startQuiz();
  getNewQuestion();
}

const quizOver = () => {
  const quizContainer = document.querySelector('.quiz_container');
  quizContainer.remove();

  const result = document.createElement('p');
  result.classList.add('end_result');
  container.appendChild(result);

  if (correctAnswers === 0) {
    result.innerText = 'Helaas jouw score is ' + correctAnswers + '. Volgende keer beter!';
  } else {
    result.innerText = 'Gefeliciteerd jij hebt ' + correctAnswers + ' van de 6 vragen goed';
  }

  const restartBtn = document.createElement('button');
  restartBtn.classList.add('button');
  restartBtn.innerText = 'restart';
  container.appendChild(restartBtn);
  restartBtn.onclick = () => {
    restartQuiz();
    restartBtn.remove();
  };
};

// START FUNCTION creates the quiz and THE UI add event listeners to buttons
const createQuiz = () => {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quiz_container');
  container.append(quizContainer);

  const quizContent = document.createElement('div');
  quizContent.classList.add('quiz_content');
  quizContainer.append(quizContent);

  createTitle();
  createQuestionBox();
  createAnswerBoxes();
  buttonsHandler();
};

// STARTS the quiz by creating a quiz and settings the available questions
const startQuiz = () => {
  createQuiz();
  setAvailableQuestions();
};
