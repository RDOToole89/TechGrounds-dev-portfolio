
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