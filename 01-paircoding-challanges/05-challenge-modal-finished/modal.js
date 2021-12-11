import { randomAnimalFact } from './randomAnimalFact.js';

export class Modal {
  constructor(overlay, target) {
    this.overlay = overlay;
    this.target = target;
    this.modal = this.createModal();
  }

  createModal() {
    const activeModal = document.querySelector('.modal');

    if (activeModal) {
      return;
    }

    const newModal = document.createElement('div');
    newModal.classList.add('modal');

    const newCloseSpan = document.createElement('span');
    newCloseSpan.classList.add('close');
    newCloseSpan.insertAdjacentHTML('afterbegin', '<ion-icon name="close-outline"></ion-icon>');

    const newFactSpan = document.createElement('span');
    newFactSpan.classList.add('fact');

    newModal.appendChild(newCloseSpan);
    newModal.appendChild(newFactSpan);

    this.target.append(newModal);

    return newModal;
  }

  open() {
    if (!this.modal) return;

    this.overlay.classList.add('open');
    this.modal.classList.add('open');
  }

  addFact(animalType) {
    if (!this.modal) return;

    // Add random animal fact to the ".fact" span element (2nd childNode)
    this.modal.childNodes[1].innerText = randomAnimalFact(animalType);
  }

  close(event) {
    console.log(event);
    if (!this.modal) return;

    const modal = document.querySelector('.modal');
    console.log(modal);

    if (event.target === this.modal || event.target.name === 'close-outline')
      this.modal.classList.remove('open');
  }
}
