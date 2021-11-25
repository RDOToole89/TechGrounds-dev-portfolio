const carousel = document.querySelector('.carousel');
const carouselViewButtons = document.querySelectorAll('.carousel__button');
const carouselViewEls = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const carouselBtnRandom = document.querySelector('.carousel__button--random');

// Fetching logic

const fetchRandomImage = async (url, dimensions) => {
  const imageResizedUrl = url + dimensions;

  try {
    const imageResponse = await fetch(imageResizedUrl);

    return imageResponse;
  } catch (error) {
    console.log(error);
  }
};

// UI Logic

let imageNumber = 1;

const makeActive = (elements, viewNumber, className) => {
  elements.forEach((element) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
      elements[viewNumber - 1].classList.add(className);
    }
  });
};

const controls = (direction, max) => {
  if (imageNumber < 1 || imageNumber > max) return;

  if (direction === 'forward') {
    makeActive(carouselViewButtons, imageNumber, 'carousel__button--active');
    makeActive(carouselViewEls, imageNumber + 1, 'carousel__view--active');
  }

  if (direction === 'backward') {
    makeActive(carouselViewButtons, imageNumber, 'carousel__button--active');
    makeActive(carouselViewEls, imageNumber - 1, 'carousel__view--active');
  }
};

carouselBtnRight.addEventListener('click', () => {
  console.log('INSIDE FORWARD => ', imageNumber);

  switch (imageNumber) {
    case 1: {
      console.log(imageNumber);
      controls('forward', 3);
      imageNumber++;
      break;
    }
    case 2: {
      console.log(imageNumber);
      controls('forward', 3);
      imageNumber++;
      break;
    }
    case 3: {
      console.log(imageNumber);
      controls('forward', 3);
      imageNumber++;
      break;
    }
    case 4: {
      console.log(imageNumber);
      break;
    }
    default: {
      break;
    }
  }
});

carouselBtnLeft.addEventListener('click', () => {
  console.log('INSIDE PREVIOUS => ', imageNumber);

  switch (imageNumber) {
    case 1: {
      break;
    }
    case 2: {
      console.log(imageNumber);
      controls('backward', 3);
      imageNumber--;
      break;
    }
    case 3: {
      console.log(imageNumber);
      controls('backward', 3);
      imageNumber--;
      break;
    }
    case 4: {
      console.log(imageNumber);
      controls('backward', 3);
      imageNumber--;
      break;
    }
    default: {
      break;
    }
  }
});

// => working

carouselViewButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const viewNumber = +event.target.dataset.btn;

    switch (viewNumber) {
      case 1: {
        makeActive(carouselViewButtons, viewNumber, 'carousel__button--active');
        makeActive(carouselViewEls, viewNumber, 'carousel__view--active');
        break;
      }
      case 2: {
        makeActive(carouselViewButtons, viewNumber, 'carousel__button--active');
        makeActive(carouselViewEls, viewNumber, 'carousel__view--active');
        break;
      }
      case 3: {
        makeActive(carouselViewButtons, viewNumber, 'carousel__button--active');
        makeActive(carouselViewEls, viewNumber, 'carousel__view--active');
        break;
      }
      case 4: {
        makeActive(carouselViewButtons, viewNumber, 'carousel__button--active');
        makeActive(carouselViewEls, viewNumber, 'carousel__view--active');
        break;
      }
      default: {
        break;
      }
    }
  });
});

carouselBtnRandom.addEventListener('click', () => {
  fetchRandomImage('https://source.unsplash.com/random/', '800x600')
    .then((response) => {
      [...carouselViewEls].forEach((view) => {
        if (view.classList.contains('carousel__view--active')) {
          view.innerHTML = `<img src="${response.url}" class="carousel__img"/>`;
        }
      });
    })
    .catch((error) => console.log(error));
});
