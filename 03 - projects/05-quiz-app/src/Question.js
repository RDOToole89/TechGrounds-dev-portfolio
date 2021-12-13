import { getRandomNumber, stringToOperator } from './helper.js';

export class MathQuestion {
  constructor(numberOfQuestions) {
    this.numberOfQuestions = numberOfQuestions;
  }

  createMathQuestion(maxBound, numberOfQuestions = this.numberOfQuestions) {
    const operators = ['-', '+', '*'];

    const questionArray = [];

    for (let i = 0; i < numberOfQuestions; i++) {
      const numberOne = getRandomNumber(0, maxBound);
      const numberTwo = getRandomNumber(0, maxBound);
      const randomOperator = operators[getRandomNumber(0, operators.length)];
      let correctAnswerCalc = stringToOperator[randomOperator](numberOne, numberTwo);

      const mathQuestionObject = {
        number: i + 1,
        question: `${numberOne} ${randomOperator} ${numberTwo}`,
        correctAnswer: correctAnswerCalc,
        possibleAnswers: this.createPossibleAnswers(
          randomOperator,
          correctAnswerCalc,
          numberOfQuestions
        ),
      };

      questionArray.push(mathQuestionObject);
    }
    return questionArray;
  }

  createPossibleAnswers(randomOperator, correctAnswer, numberOfQuestions) {
    const possibleAnswers = [];

    for (let i = 0; i < numberOfQuestions; i++) {
      switch (randomOperator) {
        case '-': {
          const randomNumber = getRandomNumber(correctAnswer - 100, correctAnswer + 100);
          possibleAnswers.push(randomNumber);
          break;
        }
        case '+': {
          const randomNumber = getRandomNumber(correctAnswer - 100, correctAnswer + 100);
          possibleAnswers.push(randomNumber);
          break;
        }
        case '*': {
          const randomNumber = getRandomNumber(correctAnswer - 100, correctAnswer + 100);
          possibleAnswers.push(randomNumber);
          break;
        }
        default: {
          break;
        }
      }
    }
    return possibleAnswers;
  }
}
