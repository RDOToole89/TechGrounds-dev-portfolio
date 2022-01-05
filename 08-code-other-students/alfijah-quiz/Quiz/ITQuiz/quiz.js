const generalContainer = document.querySelector('.generalContainer');
let pageCounter = 1;
let allSelectedAnswers = [];
let correctSelectedAnswers = [];

//CREATE THE QUIZ BLUEPRINT
const question = [
  'What does HTML stand for?',
  "What is a computer's main circuit board called?",
  'What does I.T. stand for?',
  'How do you pronounce PNG?',
  'Firefox and Opera are types of what?',
  'In 1936, Russia built a computer that runs on what?',
];

const answers = [
  {
    eachPage: [
      'Hyper Text Markup Language',
      'How To Make Lumpia',
      'Hyper Text Management Laguage',
      'Hyper Things Managing Language',
      'Hyper Things Making Lumpia',
    ],
    userAnswer: null,
    correctAnswer: 'Hyper Text Markup Language',
  },
  {
    eachPage: ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard'],
    userAnswer: null,
    correctAnswer: 'Motherboard',
  },
  {
    eachPage: [
      'Internet Technology',
      'Information Technology',
      'Irritating Tuxedos',
      'Impossible Torpedoes',
      'Ivanka Trump',
    ],
    userAnswer: null,
    correctAnswer: 'Information Technology',
  },
  {
    eachPage: ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format'],
    userAnswer: null,
    correctAnswer: 'Pea-en-gee',
  },
  {
    eachPage: ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes'],
    userAnswer: null,
    correctAnswer: 'Browser',
  },
  {
    eachPage: ['Vodka', 'Water', 'Jealousy', 'Communism', 'Nested Dolls'],
    userAnswer: null,
    correctAnswer: 'Water',
  },
];

const correctAnswer = [
  'Hyper Text Markup Language',
  'Motherboard',
  'Information Technology',
  'Pea-en-gee',
  'Browser',
  'Water',
];

class Page {
  constructor(page) {
    this.quizContainer = document.createElement('div');
    this.quizTitle = document.createElement('div');
    this.pageNumber = document.createElement('div');
    this.questionBox = document.createElement('div');
    this.answerBox = document.createElement('div');

    this.quizContainer.classList.add('quizContainer');
    this.quizTitle.classList.add('quizTitle');
    this.pageNumber.classList.add('pageNumber');
    this.questionBox.classList.add('questionBox');
    this.answerBox.classList.add('answerBox');

    this.quizTitle.innerText = "It's Quiz Time!";
    this.pageNumber.innerText = page + '/' + question.length;
    this.questionBox.innerText = question[page - 1];

    generalContainer.appendChild(this.quizContainer);
    this.quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.answerBox);

    for (let i = 1; i < question.length; i++) {
      this.eachAnswer = document.createElement('div');
      this.answerNumber = document.createElement('div');
      this.answerText = document.createElement('div');

      this.eachAnswer.classList.add('eachAnswer');
      this.answerNumber.classList.add('answerNumber');
      this.answerText.classList.add('answerText');

      this.answerNumber.innerText = i;
      this.answerText.innerText = answers[page - 1].eachPage[i - 1];

      this.answerBox.appendChild(this.eachAnswer);
      this.eachAnswer.append(this.answerNumber, this.answerText);
    }
    clickAnyAnswer();
  }
}

class ResultPage {
  constructor() {
    const result = document.createElement('div');
    const restartBtn = document.createElement('div');

    result.classList.add('result');
    restartBtn.classList.add('restartBtn', 'button');

    generalContainer.appendChild(
      result
    ).innerText = `Your score is: ${correctSelectedAnswers.length} out of ${question.length}!`;
    generalContainer.appendChild(restartBtn).innerText = 'Restart';

    restartBtn.onclick = getRestarted;
  }
}

//CREATE THE STARTBUTTON
const startBtn = document.createElement('div');
startBtn.classList.add('startBtn', 'button');
generalContainer.appendChild(startBtn).innerText = 'Start!';
startBtn.onclick = startQuiz;

function startQuiz() {
  generalContainer.removeChild(startBtn);
  new Page(pageCounter);
  createNavButtons();
}

function createNavButtons() {
  const navButtons = document.createElement('div');
  const previousBtn = document.createElement('div');
  const nextBtn = document.createElement('div');

  navButtons.classList.add('navButtons');
  previousBtn.classList.add('previousBtn', 'button');
  nextBtn.classList.add('nextBtn', 'button');

  generalContainer.append(navButtons);
  navButtons.appendChild(previousBtn).innerText = 'Previous';
  navButtons.appendChild(nextBtn).innerText = 'Next';

  previousBtn.onclick = goToPreviousPage;
  nextBtn.onclick = goToNextPage;
}

// NEW CODE ADDED BY ROIBIN => BELOW => HELPER FUNCTION TO DETERMINE IF THE ANSWER HAS BEEN ANSWERED
function checkCorrectnessOnControls() {
  // grabs currentUserAnswer
  const currentUserAnswer = answers[pageCounter - 1].userAnswer;
  // grabs the correctAnswer of the ANSWERS object
  const correctAnswer = answers[pageCounter - 1].correctAnswer;

  // checks if the currentUserAnswer is NOT null
  // so if the user has already answered the question OR not
  // WE ALLWAYS want to show the correct answer regardless of what the user answered
  if (currentUserAnswer !== null) {
    const allAnswers = document.querySelectorAll('.eachAnswer');

    // loop over all the ANSWERS divs with the class .eachAnswer
    allAnswers.forEach((answer) => {
      console.log('ANSWERSSSS', answer);

      // the textcontent of the .answerText div is the same as the CORRECT answer turn the box green
      if (answer.childNodes[1].textContent === correctAnswer) {
        answer.childNodes[0].style.backgroundColor = '#34BE82';
        answer.childNodes[1].style.backgroundColor = '#34BE82';
      }
    });
  }

  // checks if the user HAS answered a question and of that answer IS NOT EQUAL to the correct answers
  // in this case we want to turn that answerbox red
  if (currentUserAnswer !== null && currentUserAnswer !== correctAnswer) {
    // select all answer divs
    const allAnswers = document.querySelectorAll('.eachAnswer');

    // LOOP over the answer div
    allAnswers.forEach((answer) => {
      console.log('ANSWERSSSS', answer);

      // CHECK if the textContent of the answer being looped over is the user answer
      // if so TURN THE BOX RED
      if (answer.childNodes[1].textContent === currentUserAnswer) {
        answer.childNodes[0].style.backgroundColor = '#D0312D';
        answer.childNodes[1].style.backgroundColor = '#D0312D';
      }
    });
  }
}

/// ===>

function goToPreviousPage() {
  if (pageCounter === 1) return;
  pageCounter--;
  generalContainer.innerHTML = '';
  new Page(pageCounter);
  createNavButtons();

  // added by Roibin call the checking function on previous
  checkCorrectnessOnControls();
}

function goToNextPage() {
  if (pageCounter === question.length && allSelectedAnswers.length < question.length) return;
  generalContainer.innerHTML = '';
  pageCounter++;
  if (pageCounter === question.length + 1) {
    new ResultPage();
    return;
  }
  new Page(pageCounter);
  createNavButtons();

  // added by Roibin call the checking function next
  checkCorrectnessOnControls();
}

function clickAnyAnswer() {
  const answerBox = document.querySelector('.answerBox');
  answerBox.childNodes.forEach((node) => {
    const answerOnClick = node.childNodes[1].textContent;

    node.onclick = function checkIfAnswerCorrect(event) {
      // CODE ADDED BY ROIBIN => BELOW

      // grab the click event and check which text is in the answerbox the user clicked on
      console.log('USER CLICK', event.target.textContent);

      // Logs the answers array we deduct 1 from pagecounter to account for 0 indexing of arrays
      console.log('ANSWERS', answers[pageCounter - 1]);

      // This variable hold what the user clicked on
      const userClick = event.target.textContent;

      console.log('ANSWERS BEFORE CLICK EVENT', answers[pageCounter - 1]);

      // grab the question on the current page and add the userAnswer to the questions object
      answers[pageCounter - 1].userAnswer = userClick;

      // this log show that the value has been updated after the click event
      console.log('ANSWERS AFTER CLICK EVENT', answers[pageCounter - 1]);

      if (correctAnswer[pageCounter - 1] === answerOnClick) {
        correctSelectedAnswers.push(answerOnClick.value);
        allSelectedAnswers.push(answerOnClick.value);
        console.log('correct', correctSelectedAnswers.length);
        console.log('all', allSelectedAnswers.length);
        showCorrectAnswer();
        disableClickOnAnswer();
      } else {
        node.childNodes[0].style.backgroundColor = '#D0312D';
        node.childNodes[1].style.backgroundColor = '#D0312D';
        node.childNodes[0].style.borderColor = '#D0312D';
        node.childNodes[1].style.borderColor = '#D0312D';
        allSelectedAnswers.push(answerOnClick.value);
        console.log('all2', allSelectedAnswers.length);
        showCorrectAnswer();
        disableClickOnAnswer();
      }
    };
  });
}

function showCorrectAnswer() {
  const answerBox = document.querySelector('.answerBox');
  let correct = correctAnswer[pageCounter - 1];
  answerBox.childNodes.forEach((node) => {
    let answer = node.textContent.substring(1);
    if (answer === correct) {
      node.childNodes[0].style.backgroundColor = '#34BE82';
      node.childNodes[1].style.backgroundColor = '#34BE82';
      node.childNodes[0].style.borderColor = '#34BE82';
      node.childNodes[1].style.borderColor = '#34BE82';
    }
  });
}

function disableClickOnAnswer() {
  const answerBox = document.querySelector('.answerBox');
  answerBox.childNodes.forEach((node) => {
    node.onclick = null;
  });
}

function getRestarted() {
  generalContainer.innerHTML = '';
  startBtn.classList.add('startBtn', 'button');
  generalContainer.appendChild(startBtn).innerText = 'Start!';
  pageCounter = 1;
  correctSelectedAnswers = [];
}
