const catBtn = document.querySelector('.cat-btn');
const dogBtn = document.querySelector('.dog-btn');
const parrotBtn = document.querySelector('.parrot-btn');
const buttons = document.querySelectorAll('.btn');
const buttonContainer = document.querySelector('.button-container');
const fact = document.querySelector('.fact');
const overlay = document.querySelector('.overlay');

const catFacts = [
  'Cats can jump up to 6 times their height',
  'Cats have a total of 18 toes',
  'There are over 500 million pet cats!',
  'Cats sleep for around 13 to 16 hours a day (70% of their life).',
  ' One of the largest domestic cat breeds is a Maine Coon.',
];
const dogFacts = [
  'A dog’s nose print is unique, much like a person’s fingerprint.',
  'Seventy percent of people sign their dog’s name on their holiday cards.',
  'Human blood pressure goes down when petting a dog. And so does the dog’s.',
  'Dogs are not colorblind. They can see blue and yellow.',
  'Dogs have about 1,700 taste buds. We humans have between 2,000–10,000.',
];
const parrotFacts = [
  'Parrots taste with the tops of their beaks.',
  'The heftiest Parrot weighs as much as a Cat.',
  'Your pet Parrot may outlive you',
  'The world record holder knew more Than 1,700 words',
  "A third of the world's parrots face extinction",
];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

// When I click on a button a modal has to be created.

const createModal = () => {
  overlay.classList.add('open');

  // create and element with the class of modal that
  // has a span with a close class and a fact class

  const newModal = document.createElement('div');

  // add the modal class to the newly created div
  newModal.classList.add('modal');

  // create a close span

  const newCloseSpan = document.createElement('span');
  newCloseSpan.classList.add('close');

  newCloseSpan.innerText = 'X';

  // create a fact span

  const newFactSpan = document.createElement('span');
  newFactSpan.classList.add('fact');

  // add close and fact span to new innerHTML of newmodal

  newModal.appendChild(newCloseSpan);
  newModal.appendChild(newFactSpan);

  buttonContainer.append(newModal);
};

// Loops over all the buttons and adds an onclick even
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    let modal = document.querySelector('.modal');
    if (!modal) createModal();

    modal = document.querySelector('.modal');

    setTimeout(() => {
      modal.classList.add('open');
    }, 100);

    const fact = document.querySelector('.fact');

    const buttonType = buttons[i].textContent;

    switch (buttonType) {
      case 'cat': {
        fact.innerText = catFacts[getRandom(0, 5)];
        break;
      }
      case 'dog': {
        fact.innerText = dogFacts[getRandom(0, 5)];
        break;
      }
      case 'parrot': {
        fact.innerText = parrotFacts[getRandom(0, 5)];
        break;
      }
      default: {
        break;
      }
    }
  };
}

window.addEventListener('click', (event) => {
  const close = document.querySelector('.close');

  if (event.target === close || event.target === overlay) {
    overlay.classList.remove('open');
    const modal = document.querySelector('.modal');

    if (!modal) return;

    modal.remove();
  }

  return;
});
