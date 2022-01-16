const generalContainer = document.querySelector('.generalContainer');
let pageCounter = 1;
let allSelectedAnswers = [];
let correctSelectedAnswers = [];

//CREATE THE QUIZ BLUEPRINT
let mathContent = {
    level: {
        0: {
            operator: ['+', '-'],
            numberOne: Math.floor(Math.random() * 100),
            numberTwo: Math.floor(Math.random() * 100),
            question: `What is ${numberOne} ${operator[i]} ${numberTwo}?`
        },
        1: {
            operator: '*',
            numberOne: Math.floor(Math.random() * 20),
            numberTwo: Math.floor(Math.random() * 10)
        },
        2: {
            operator: ['*', '/'],
            numberOne: Math.floor(Math.random() * 100),
            numberTwo: Math.floor(Math.random() * 100)
        }
    }
}

const math = new mathContent();
console.log(mathContent.level[0].question)

class Level {
    constructor() {
        this.levelContainer = document.createElement('div');
        this.easyButton = document.createElement('div');
        this.mediumButton = document.createElement('div');
        this.hardButton = document.createElement('div');

        this.levelContainer.classList.add('levelContainer');
        this.easyButton.classList.add('easyButton', 'levelButton', 'button');
        this.mediumButton.classList.add('mediumButton', 'levelButton', 'button');
        this.hardButton.classList.add('hardButton', 'levelButton', 'button');

        this.easyButton.innerText = 'Easy';
        this.mediumButton.innerText = 'Medium';
        this.hardButton.innerText = 'Hard';

        generalContainer.appendChild(this.levelContainer);
        this.levelContainer.append(this.easyButton, this.mediumButton, this.hardButton);

        this.easyButton.onclick = createStartButton;
        this.mediumButton.onclick = createStartButton;
        this.hardButton.onclick = createStartButton;
    }
}

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

        generalContainer.appendChild(result).innerText = `Your score is: ${correctSelectedAnswers.length} out of ${question.length}!`;
        generalContainer.appendChild(restartBtn).innerText = 'Restart';

        restartBtn.onclick = getRestarted;
    }
}

const newLevel = new Level();

function createStartButton() {
    generalContainer.innerHTML = "";
    const startBtn = document.createElement('div');
    startBtn.classList.add('startBtn', 'button');
    generalContainer.appendChild(startBtn).innerText = 'Start!';
    startBtn.onclick = startQuiz;
}

function startQuiz() {
    generalContainer.innerHTML = "";
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

function goToPreviousPage() {
    if (pageCounter === 1) return;
    pageCounter--;
    generalContainer.innerHTML = "";
    new Page(pageCounter);
    createNavButtons();
}

function goToNextPage() {
    if (pageCounter === question.length && allSelectedAnswers.length < question.length) return;
    generalContainer.innerHTML = "";
    pageCounter++;
    if (pageCounter === question.length + 1) {
        new ResultPage();
        return;
    }
    new Page(pageCounter);
    createNavButtons();
}

function clickAnyAnswer() {
    const answerBox = document.querySelector('.answerBox');
    answerBox.childNodes.forEach((node) => {
        const answerOnClick = node.childNodes[1].textContent;

        node.onclick = function checkIfAnswerCorrect() {
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
        }
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
    })
}

function disableClickOnAnswer() {
    const answerBox = document.querySelector('.answerBox');
    answerBox.childNodes.forEach((node) => {
        node.onclick = null;
    });
}

function getRestarted() {
    generalContainer.innerHTML = "";
    startBtn.classList.add('startBtn', 'button');
    generalContainer.appendChild(startBtn).innerText = 'Start!';
    pageCounter = 1;
    correctSelectedAnswers = [];
}