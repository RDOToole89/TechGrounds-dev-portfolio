import { getRandomNumber, hasDuplicates, popRandom, stringToOperator } from './helper.js';

export class Question {
  // Constructor takes in a number for how many questions need to be generated.
  constructor(numberOfQuestions) {
    this.numberOfQuestions = numberOfQuestions;
  }

  // Creates a MathQuestion Array => takes in an upperbound for the questions generated.
  createMathQuestion(numberUpperBound) {
    // Possible operators to generate questions with.
    const operators = ['-', '+', '*'];

    const questionArray = [];

    // Loop over for the number of questions that need to be generated.
    for (let i = 0; i < this.numberOfQuestions; i++) {
      // Creates two numbers and grabs a random operator
      const numberOne = getRandomNumber(1, numberUpperBound);
      const numberTwo = getRandomNumber(1, numberUpperBound);
      const randomOperator = operators[getRandomNumber(1, operators.length)];

      // Calculates the correct answer using stringToOperator helper function.
      let correctAnswerCalc = stringToOperator[randomOperator](numberOne, numberTwo);

      // Creates a Math Object for each iteration of the loop and pushes it in to the questionArray.
      const mathQuestionObject = {
        number: i + 1,
        question: `Q: ${numberOne} ${randomOperator} ${numberTwo}`,
        correctAnswer: correctAnswerCalc,
        // Creates an array with with possible Math Questions.
        possibleAnswers: this.createPossibleAnswers(randomOperator, correctAnswerCalc, 5),
        // userAnswer is first set to null to signify no answer has yet been given.
        userAnswer: null,
      };

      questionArray.push(mathQuestionObject);
    }

    return questionArray;
  }

  // Creates a UNIQUE array with answers and then plugs the correct answer into the array.
  createPossibleAnswers(randomOperatorString, correctAnswer, numberOfPossibleAnswers) {
    let possibleAnswers = [];

    for (let i = 0; i < numberOfPossibleAnswers; i++) {
      switch (randomOperatorString) {
        case '-': {
          // Calculates a possible answer that deviates with a margin
          // between 1 and 20 from the correct answer
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

    // Creates an array of unique values by transforming it to a set.
    let possibleAnswersSet = new Set([...possibleAnswers]);

    // Generates a new possible answer.
    let newPossibleNumber = getRandomNumber(
      correctAnswer - getRandomNumber(1, 20),
      correctAnswer + getRandomNumber(1, 20)
    );

    // Condition checks for if the possibleAnswers Array has the right length and
    // does NOT contain duplicates and does NOT contain the right answer.
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

      // Checks if a unique set has been created and contains the right answer if so it returns.
      if (
        [...possibleAnswersSet].includes(correctAnswer) &&
        possibleAnswersSet.size === numberOfPossibleAnswers
      ) {
        possibleAnswers = [...possibleAnswersSet];

        return possibleAnswers;
      }

      // If the set is unique but does not contain the correct answer insert it and return.
      if (
        possibleAnswersSet.size === numberOfPossibleAnswers &&
        ![...possibleAnswersSet].includes(correctAnswer)
      ) {
        possibleAnswers = [...possibleAnswersSet];
        possibleAnswers[getRandomNumber(0, numberOfPossibleAnswers - 1)] = correctAnswer;

        return possibleAnswers;
      }
    }

    // If the array already has the correct answer and the correct size return.
    return possibleAnswers;
  }
}
