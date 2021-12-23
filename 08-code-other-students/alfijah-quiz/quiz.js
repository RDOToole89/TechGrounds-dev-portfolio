//DEFINE VARIABLES
const generalContainer = document.querySelector('.generalContainer');
const startBtn = document.createElement('div');
const givenAnswer = [];
let pageCounter = 1;
let score;

//MAKE THE STARTBUTTON
startBtn.classList.add('startBtn', 'button');
generalContainer.appendChild(startBtn).innerText = 'Start!';
startBtn.onclick = startQuiz;

function startQuiz() {
  generalContainer.removeChild(startBtn);
  new Page(pageCounter);
  makeSwitchButtons();
}

//MAKE THE PREVIOUS AND NEXT BUTTON
function makeSwitchButtons() {
  const switchButtons = document.createElement('div');
  switchButtons.classList.add('switchButtons', 'button');
  generalContainer.append(switchButtons);

  const previousBtn = document.createElement('div');
  previousBtn.classList.add('previousBtn');
  switchButtons.appendChild(previousBtn).innerText = 'Previous';

  const nextBtn = document.createElement('div');
  nextBtn.classList.add('nextBtn');
  switchButtons.appendChild(nextBtn).innerText = 'Next';

  previousBtn.onclick = goToPreviousPage;
  nextBtn.onclick = goToNextPage;
}

function goToPreviousPage() {
  if (pageCounter == 1) return;
  pageCounter--;
  generalContainer.innerHTML = '';
  new Page(pageCounter);
  makeSwitchButtons();
}

function goToNextPage() {
  generalContainer.innerHTML = '';
  pageCounter++;
  if (pageCounter == 7) {
    new LastPage();
    return;
  }
  new Page(pageCounter);
  makeSwitchButtons();
}

function getRestarted() {
  generalContainer.innerHTML = '';
  startBtn.classList.add('startBtn', 'button');
  generalContainer.appendChild(startBtn).innerText = 'Start!';
  pageCounter = 1;
  return;
}

//BUILD THE QUIZ'S Q AND A
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
  },
  { eachPage: ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard'] },
  {
    eachPage: [
      'Internet Technology',
      'Information Technology',
      'Irritating Tuxedos',
      "Impossible Torpedo's",
      'Ivanka Trump',
    ],
  },
  { eachPage: ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format'] },
  { eachPage: ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes'] },
  { eachPage: ['Vodka', 'Water', 'Jealousy', 'Communism', 'Nested Dolls'] },
];

// Commented this OUT =>
// const correctAnswer = {
//   [question[0]]: 'Hyper Text Markup Language',
//   [question[1]]: 'Motherboard',
//   [question[2]]: 'Information Technology',
//   [question[3]]: 'Pea-en-gee',
//   [question[4]]: 'Browser',
//   [question[5]]: 'Water',
// };

// NEW CODE ROIBIN!
// Put answers in an array
const correctAnswer = [
  'Hyper Text Markup Language',
  'Motherboard',
  'Information Technology',
  'Pea-en-gee',
  'Browser',
  'Water',
];

console.log('CORRECT ANSWER', correctAnswer);

//BUILD THE FORM
function getPageNumber(page) {
  switch (page) {
    case 1:
      return page + '/6';
    case 2:
      return page + '/6';
    case 3:
      return page + '/6';
    case 4:
      return page + '/6';
    case 5:
      return page + '/6';
    case 6:
      return page + '/6';
  }
}

function getQuestion(page) {
  switch (page) {
    case 1:
      return question[0];
    case 2:
      return question[1];
    case 3:
      return question[2];
    case 4:
      return question[3];
    case 5:
      return question[4];
    case 6:
      return question[5];
  }
}

class Page {
  constructor(page) {
    this.quizContainer = document.createElement('div');
    this.quizTitle = document.createElement('div');
    this.pageNumber = document.createElement('div');
    this.questionBox = document.createElement('div');
    this.allAnswers = document.createElement('div');

    this.quizContainer.classList.add('quizContainer');
    this.quizTitle.classList.add('quizTitle');
    this.pageNumber.classList.add('pageNumber');
    this.questionBox.classList.add('questionBox');
    this.allAnswers.classList.add('allAnswers');

    this.quizTitle.innerText = "It's Quiz Time!";
    this.pageNumber.innerText = getPageNumber(page);
    this.questionBox.innerText = getQuestion(page);

    generalContainer.appendChild(this.quizContainer);
    this.quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.allAnswers);

    for (let i = 1; i < 6; i++) {
      this.answerBox = document.createElement('div');
      this.answerNumber = document.createElement('div');
      this.answerText = document.createElement('div');

      this.answerBox.classList.add('answerBox');
      this.answerNumber.classList.add('answerNumber');
      this.answerText.classList.add('answerText');

      this.answerNumber.innerText = i;
      this.answerText.innerText = answers[page - 1].eachPage[i - 1];

      this.allAnswers.appendChild(this.answerBox);
      this.answerBox.append(this.answerNumber, this.answerText);

      // Logs all the ANSWERS
      //   console.log(this.allAnswers);

      //   this.answerText.addEventListener('click', () => {
      //     const eachAnswer = answers[page - 1].eachPage[i - 1];
      //     if (eachAnswer === correctAnswer[question[pageCounter - 1]]) {
      //       // answers[page - 1].eachPage[i - 1].style.backgroundColor = 'green';
      //       // eachAnswer.style.backgroundColor = 'green';
      //       this.answerBox.style.backgroundColor = 'green';
      //       console.log('correct');
      //     } else {
      //       console.log('false');
      //       this.answerBox.style.backgroundColor = 'red';
      //     }
      //   });
    }

    // NEW CODE => ROIBIN

    // LOOP OVER ALL THE ANSWERS!
    this.allAnswers.childNodes.forEach((node, i) => {
      console.log('ANSWER!!!', node);

      // add eventListener to the answerBox
      node.addEventListener('click', () => {
        // grab textContent from the answerText element
        const answerOnClick = node.childNodes[1].textContent;
        console.log('ANSWER ONCLICK => ', answerOnClick);

        // find the correct answer in the correctAnswer array
        const correctAnswerNode = correctAnswer.find((answer) => {
          if (answer === answerOnClick) {
            return true;
          }
          console.log('ANSWER!', answer);
        });

        // check if the correctAnswerNode = the answer that was clicked on
        if (correctAnswerNode === answerOnClick) {
          console.log('ANSWER CORRECT!');
          node.childNodes[1].style.backgroundColor = 'green';
        } else {
          node.childNodes[1].style.backgroundColor = 'red';
        }
      });
    });
  }
}

class LastPage {
  constructor() {
    const result = document.createElement('div');
    result.classList.add('result');
    generalContainer.appendChild(result).innerText = `Your score is: ${score}`;

    const restartBtn = document.createElement('div');
    restartBtn.classList.add('restartBtn', 'button');
    generalContainer.appendChild(restartBtn).innerText = 'Restart';

    restartBtn.onclick = getRestarted;
  }
}
