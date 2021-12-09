const openBtn = document.querySelector('.open-modal__btn');
const overlay = document.querySelector('.overlay');
let modalOpen = false;

// Helper function to create a new element and add classname text and / or click event.
const createElementAndAddClass = (el, className, text, clickFunction) => {
  const newElement = document.createElement(el);
  newElement.classList.add(className);

  if (text) newElement.textContent = text;

  if (clickFunction) newElement.onclick = clickFunction;

  return newElement;
};

// Creates a modal on the page
const createModal = () => {
  const modal = document.querySelector('.modal');

  // Returns if the modal is already on the page
  if (modal) return;

  // Creates the modal components
  const newModal = createElementAndAddClass('div', 'modal');
  const newCloseSpan = createElementAndAddClass('span', 'close', null, closeModal);
  const newIcon = `<ion-icon name='close-outline'></ion-icon>`;
  newCloseSpan.insertAdjacentHTML('afterbegin', newIcon);
  const newH1 = createElementAndAddClass('h1', 'header', 'TGG');
  const newH2 = createElementAndAddClass('h2', 'subheader', 'Days');
  const newParagraph = createElementAndAddClass('p', 'paragraph', 'CSS Challenge');

  // Appends the modal components to the newly created modal
  newModal.appendChild(newCloseSpan);
  newModal.appendChild(newH1);
  newModal.appendChild(newH2);
  newModal.appendChild(newParagraph);

  // Appends the newly created modal to the body

  document.body.append(newModal);
};

const openModal = () => {
  const modal = document.querySelector('.modal');

  if (!modal) return;

  modalOpen = true;
  overlay.classList.add('show');
  openBtn.classList.add('display');
  modal.classList.add('open');
};

const closeModal = () => {
  const modal = document.querySelector('.modal');

  if (!modal) return;

  modalOpen = false;
  overlay.classList.remove('show');
  openBtn.classList.remove('display');
  modal.classList.remove('open');
};

openBtn.addEventListener('click', () => {
  const modal = document.querySelector('.modal');

  // If there is no modal create it and wait 200ms to display it
  if (!modal) {
    createModal();
    setTimeout(() => {
      openModal();
    }, 200);
  }

  if (modal) openModal();
});

window.addEventListener('click', (event) => {
  if (event.target === close || event.target === overlay) {
    closeModal();
  }
});
