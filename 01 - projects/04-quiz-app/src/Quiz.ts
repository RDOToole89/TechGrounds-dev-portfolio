import { createElement, mountElements } from './helper';

export class Quiz {
  quiz: any;
  target: Element;

  constructor(target: Element) {
    this.quiz = this.createQuiz();
    this.target = target;
  }

  createQuiz(): void {
    const activeQuiz = document.querySelector('.quiz-container');
    if (activeQuiz) return;

    // Parent Element
    const newQuiz = createElement('div', 'quiz-container');

    // Child elements
    const quizTop = createElement('div', 'quiz-top');
    const quizHeading = createElement('h1', 'quiz-top__heading');
    const quizCount = createElement('p', 'quiz-top__count');
    const quizDisplay = createElement('p', 'quiz-top__display');

    mountElements([quizTop, quizHeading, quizCount, quizDisplay], newQuiz);

    console.log(newQuiz);

    console.log(this);
  }
}
