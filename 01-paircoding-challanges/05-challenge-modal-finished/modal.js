export default class AnimalModal {
  constructor() {
    this.showModal = window.addEventListener('click', closeModal);
  }

  createModal(container) {
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

    container.append(newModal);
  }

  closeModal(event) {
    const close = document.querySelector('.close');

    if (event.target === close || event.target === overlay) {
      overlay.classList.remove('open');
      const modal = document.querySelector('.modal');

      if (!modal) return;

      modal.remove();
    }

    return;
  }
}
