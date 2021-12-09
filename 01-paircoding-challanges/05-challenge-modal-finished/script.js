import { Modal } from './modal.js';

const buttons = document.querySelectorAll('.btn');
const buttonContainer = document.querySelector('.button-container');
const overlay = document.querySelector('.overlay');

// Loops over each button on the page and creates a modal based on the button 'dataset' value.

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const animalType = button.dataset['animal'];

    const animalModal = new Modal(overlay, buttonContainer);
    animalModal.open();
    animalModal.addFact(animalType);
  });
});

window.addEventListener('click', (event) => {
  const closeBtn = event.target.name;

  if (closeBtn === 'close-outline' || event.target === overlay) {
    const modal = document.querySelector('.modal');

    overlay.classList.remove('open');

    if (!modal) return;

    modal.remove();
  }
  return;
});
