import { getRandomNumber, hasDuplicates, popRandom, stringToOperator } from './helper.js';

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
        question: `Q: ${numberOne} ${randomOperator} ${numberTwo}`,
        correctAnswer: correctAnswerCalc,
        possibleAnswers: this.createPossibleAnswers(randomOperator, correctAnswerCalc, 5),
        answered: null,
      };

      questionArray.push(mathQuestionObject);
    }

    return questionArray;
  }

  createPossibleAnswers(randomOperatorString, correctAnswer, numberOfPossibleAnswers) {
    let possibleAnswers = [];

    for (let i = 0; i < numberOfPossibleAnswers; i++) {
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
    let possibleAnswersSet = new Set([...possibleAnswers]);

    // Generates a new possible answer
    let newPossibleNumber = getRandomNumber(
      correctAnswer - getRandomNumber(1, 20),
      correctAnswer + getRandomNumber(1, 20)
    );

    // Condition checks for if the possibleAnswers Array has the right length
    // Does NOT contain duplicates and does NOT contain the right answer
    if (
      !hasDuplicates(possibleAnswers) &&
      possibleAnswers.length === numberOfPossibleAnswers &&
      !possibleAnswers.includes(correctAnswer)
    ) {
      // Insert correct answer and return
      possibleAnswers[getRandomNumber(0, numberOfPossibleAnswers - 1)] = correctAnswer;

      return possibleAnswers;
    }

    // Loop checks whether the possibleAnswersSet has the right size
    // If not it keeps looping and adding a new random number until
    // it forms a unique set with the correct number and returns
    while (possibleAnswersSet.size < numberOfPossibleAnswers) {
      possibleAnswersSet.add(newPossibleNumber);
      newPossibleNumber = getRandomNumber(
        correctAnswer - getRandomNumber(1, 20),
        correctAnswer + getRandomNumber(1, 20)
      );

      // Checks if the a unique set has been created and contains the right answer if so it returns
      if (
        [...possibleAnswersSet].includes(correctAnswer) &&
        possibleAnswersSet.size === numberOfPossibleAnswers
      ) {
        possibleAnswers = [...possibleAnswersSet];

        return possibleAnswers;
      }

      // If the set is unique but does not contain the correct answer insert it and return
      if (
        possibleAnswersSet.size === numberOfPossibleAnswers &&
        ![...possibleAnswersSet].includes(correctAnswer)
      ) {
        possibleAnswers = [...possibleAnswersSet];
        possibleAnswers[getRandomNumber(0, numberOfPossibleAnswers - 1)] = correctAnswer;

        return possibleAnswers;
      }
    }
    return possibleAnswers;
  }
}
