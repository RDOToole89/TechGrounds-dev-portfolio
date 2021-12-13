import { createElement, mountElements } from './helper.js';

export class Quiz {
  constructor(target) {
    this.quiz = this.createQuiz();
    this.target = target;

    console.log('TARGET', target);
  }

  createQuiz() {
    const activeQuiz = document.querySelector('.quiz-container');
    if (activeQuiz) return;

    // Parent Element
    const newQuiz = createElement('div', 'quiz-container');

    // Child elements
    const quizTop = createElement('div', 'quiz-top');
    const quizHeading = createElement('h1', 'quiz-top__heading', 'Quiz');
    const quizCount = createElement('p', 'quiz-top__count');
    const quizDisplay = createElement('p', 'quiz-top__display');

    mountElements([quizTop, quizHeading, quizCount, quizDisplay], newQuiz);

    console.log(newQuiz);

    this.target.append(newQuiz);

    return newQuiz;
  }
}
