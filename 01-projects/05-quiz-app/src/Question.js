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

    let newPossibleNumber = getRandomNumber(
      correctAnswer - getRandomNumber(1, 20),
      correctAnswer + getRandomNumber(1, 20)
    );
    // console.log(
    //   `POSSIBLE ANSWER SET LENGTH: ${possibleAnswersSet.size} POSSIBLE ANSWERS LENGTH ${possibleAnswers.length}`
    // );

    if (
      !hasDuplicates(possibleAnswers) &&
      possibleAnswers.length === numberOfPossibleAnswers &&
      !possibleAnswers.includes(correctAnswer)
    ) {
      possibleAnswers[getRandomNumber(0, numberOfPossibleAnswers - 1)] = correctAnswer;

      // console.log('UNIQUE SET =>', possibleAnswers, 'ANSWER => ', correctAnswer);
      return possibleAnswers;
    }
    let i = 0;
    while (possibleAnswersSet.size < numberOfPossibleAnswers) {
      // console.log(
      //   `INSIDE WHILE LOOP SET: ${possibleAnswersSet.size} POSSIBLEANSWERS ARRAY =>  ${possibleAnswers.length}, INDEX: ${i}`
      // );

      possibleAnswersSet.add(newPossibleNumber);
      newPossibleNumber = getRandomNumber(
        correctAnswer - getRandomNumber(1, 20),
        correctAnswer + getRandomNumber(1, 20)
      );

      if (
        [...possibleAnswersSet].includes(correctAnswer) &&
        possibleAnswersSet.size === numberOfPossibleAnswers
      ) {
        possibleAnswers = [...possibleAnswersSet];

        return possibleAnswers;
      }

      // console.log(
      //   'POSSIBLE ANSWER SET INSIDE LOOP after adding new random',
      //   possibleAnswersSet,
      //   'CORRECT ANSWER',
      //   correctAnswer,
      //   'index: ',
      //   i
      // );

      if (
        possibleAnswersSet.size === numberOfPossibleAnswers &&
        ![...possibleAnswersSet].includes(correctAnswer)
      ) {
        // console.log(
        //   'INSIDE THE IF BLOCK',
        //   possibleAnswersSet,
        //   'correct answer',
        //   correctAnswer,
        //   'index: ',
        //   i
        // );

        possibleAnswers = [...possibleAnswersSet];
        possibleAnswers[getRandomNumber(0, numberOfPossibleAnswers - 1)] = correctAnswer;
        // console.log(
        //   'INSIDE THE IF BLOCK AFTER ADDING CORRECT NUMBER',
        //   possibleAnswers,
        //   'correct answer',
        //   correctAnswer,
        //   'index: ',
        //   i
        // );
        return possibleAnswers;
      }

      // console.log('POSSIBLE ANSWER SET AFTER IF STATEMENT', possibleAnswersSet, 'index: ', i);

      possibleAnswersSet = new Set([...possibleAnswersSet]);
      i++;
    }
    return possibleAnswers;
  }
}
