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
    const close = document.querySelector('.close');
    if (!this.modal) return;

    this.overlay.classList.add('open');
    this.modal.classList.add('open');
    close.classList.add('open');

    console.log(this.modal);
  }

  addFact(animalType) {
    if (!this.modal) return;

    // Add random animal fact to the ".fact" span element (2nd childNode)
    this.modal.childNodes[1].innerText = randomAnimalFact(animalType);
  }

  close() {
    if (!this.modal) return;
    const openElements = document.querySelectorAll('.open');

    [...openElements].forEach((element) => {
      element.addEventListener('click', (event) => {
        const open = event.target.classList.contains('open');
        const closeIcon = event.target.name;

        if (open || closeIcon) {
          this.overlay.classList.remove('open');
          this.modal.classList.remove('open');
          this.modal.remove();
        }
      });
    });
  }
}
