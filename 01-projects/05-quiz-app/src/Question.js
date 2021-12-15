import { getRandomNumber, stringToOperator } from './helper.js';

export class Question {
  constructor(numberOfQuestions) {
    this.numberOfQuestions = numberOfQuestions;
  }

  createMathQuestion(numberUpperBound) {
    const operators = ['-', '+', '*'];

    const questionArray = [];

    for (let i = 0; i < this.numberOfQuestions; i++) {
      const numberOne = getRandomNumber(1, numberUpperBound);
      const numberTwo = getRandomNumber(1, numberUpperBound);
      const randomOperator = operators[getRandomNumber(1, operators.length)];
      let correctAnswerCalc = stringToOperator[randomOperator](numberOne, numberTwo);

      const mathQuestionObject = {
        number: i + 1,
        question: `${numberOne} ${randomOperator} ${numberTwo}`,
        correctAnswer: correctAnswerCalc,
        possibleAnswers: this.createPossibleAnswers(
          randomOperator,
          correctAnswerCalc,
          this.numberOfQuestions
        ),
        answered: null,
      };

      questionArray.push(mathQuestionObject);
    }

    return questionArray;
  }

  createPossibleAnswers(randomOperatorString, correctAnswer) {
    let possibleAnswers = [];

    for (let i = 0; i < this.numberOfQuestions; i++) {
      switch (randomOperatorString) {
        case '-': {
          const randomNumber = getRandomNumber(
            correctAnswer - getRandomNumber(1, 20),
            correctAnswer + getRandomNumber(1, 20)
          );
          possibleAnswers.push(randomNumber);
          break;
        }
        case '+': {
          const randomNumber = getRandomNumber(
            correctAnswer - getRandomNumber(1, 20),
            correctAnswer + getRandomNumber(1, 20)
          );
          possibleAnswers.push(randomNumber);
          break;
        }
        case '*': {
          const randomNumber = getRandomNumber(
            correctAnswer - getRandomNumber(1, 20),
            correctAnswer + getRandomNumber(1, 20)
          );
          possibleAnswers.push(randomNumber);
          break;
        }
        default: {
          break;
        }
      }
    }

    // Creates an array of unique values by transforming it to a set and
    // then reverting it back to an array
    possibleAnswers = new Set([...possibleAnswers]);
    possibleAnswers = [...possibleAnswers];

    // Checks the length
    if (possibleAnswers.length < this.numberOfQuestions) {
      const difference = this.numberOfQuestions - possibleAnswers.length;

      for (let i = 0; i < difference; i++) {
        let randomNumber = getRandomNumber(correctAnswer, getRandomNumber(1, 20));

        if (!possibleAnswers.includes(randomNumber)) {
          possibleAnswers.push(randomNumber);
          randomNumber = getRandomNumber(correctAnswer, 20);
        }

        possibleAnswers.push(randomNumber);
      }
    }

    // Inserts correct answer in possible answers array
    possibleAnswers[getRandomNumber(0, possibleAnswers.length - 1)] = correctAnswer;

    return possibleAnswers;
  }
}
