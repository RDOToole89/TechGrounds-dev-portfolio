const carousel = document.querySelector('.carousel');
const carouselViewButtons = document.querySelectorAll('.carousel__navigation-btn');
const carouselViewElements = document.querySelectorAll('.carousel__view');
const carouselBtnNext = document.querySelector('.carousel__btn--next');
const carouselBtnPrevious = document.querySelector('.carousel__btn--previous');
const carouselBtnRandom = document.querySelector('.carousel__navigation-btn--random');
const spinner = document.querySelector('#spinner');

// Fetching logic

// Fetches a random image with the Unsplash API in mind from online
const fetchRandomImage = (url, dimensions) => {
  // Resizes the the url with dimension in "800x600" format as specified in the Unsplash API guide
  const imageResizedUrl = url + dimensions;

  return fetch(imageResizedUrl)
    .then((response) => response)
    .catch((error) => console.log(error));
};

// UI Logic

// Variable holding the current image view on the carousel

let imageNumber = 1;

// This functions takes in an array (nodeList) of elements and removes the active class
const makeActive = (elements, elements2, viewNumber, className1, className2) => {
  imageNumber = viewNumber;

  elements.forEach((element) => {
    if (element.classList.contains(className1)) {
      element.classList.remove(className1);
      elements[viewNumber - 1].classList.add(className1);
    }
  });

  elements2.forEach((element) => {
    if (element.classList.contains(className2)) {
      element.classList.remove(className2);
      elements2[viewNumber - 1].classList.add(className2);
    }
  });
};

// Reusable function takes a direction and max number of images.
const controls = (direction, max) => {
  if (imageNumber < 1 || imageNumber > max) return;

  if (direction === 'forward') {
    makeActive(
      carouselViewButtons,
      carouselViewElements,
      imageNumber + 1,
      'carousel__navigation-btn--active',
      'carousel__view--active'
    );
  }

  if (direction === 'backward') {
    makeActive(
      carouselViewButtons,
      carouselViewElements,
      imageNumber - 1,
      'carousel__navigation-btn--active',
      'carousel__view--active'
    );
  }
};

carouselBtnNext.addEventListener('click', () => {
  switch (imageNumber) {
    case 1:
    case 2:
    case 3: {
      controls('forward', 4);
      break;
    }

    case 4: {
      break;
    }
    default: {
      break;
    }
  }
});

carouselBtnPrevious.addEventListener('click', () => {
  console.log('INSIDE PREVIOUS => ', imageNumber);
  switch (imageNumber) {
    case 1: {
      break;
    }
    case 2:
    case 3:
    case 4: {
      controls('backward', 4);
      break;
    }
    default: {
      break;
    }
  }
});

carouselViewButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const viewNumber = +event.target.dataset.btn;

    switch (viewNumber) {
      case 1:
      case 2:
      case 3:
      case 4: {
        makeActive(
          carouselViewButtons,
          carouselViewElements,
          viewNumber,
          'carousel__navigation-btn--active',
          'carousel__view--active'
        );

        break;
      }
      default: {
        break;
      }
    }
  });
});

carouselBtnRandom.addEventListener('click', () => {
  const carouselViewActive = document.querySelector('.carousel__view--active');

  fetchRandomImage('https://source.unsplash.com/random/', '800x600')
    .then((response) => (carouselViewActive.childNodes[1].src = response.url))
    .catch((error) => console.log(error));
});

const createImageElement = (url) => {
  const image = document.createElement('img');
  image.src = url;
  image.alt = 'random insplash image';
  image.classList.add('carousel__img');

  return `<img src="${image.src}" alt="${image.alt} class="carousel__img">`;
};

const mountElementToView = (views, element) => {
  console.log('ELement inside', element);

  views.forEach((view) => {
    console.log('VIIEEEWWWW', view);
    if (!view.children.length) {
      [...view.childNodes].push(element);
    }
  });
};

const startCarousel = (numberOfViews) => {
  let loading = true;

  if (loading) {
    spinner.removeAttribute('hidden');
  }

  const imagePromises = [];

  for (let i = 0; i < numberOfViews; i++) {
    imagePromises.push(fetchRandomImage('https://source.unsplash.com/random/', '800x600'));
    if (('LENGTH', !carouselViewElements.length)) {
      console.log(carouselViewElements.lenth);
    }
    loading = false;
  }

  Promise.all(imagePromises).then((images) =>
    images.forEach((element) => {
      const newImageElement = createImageElement(element.url);
      mountElementToView(carouselViewElements, newImageElement);
    })
  );
};

startCarousel(4);
