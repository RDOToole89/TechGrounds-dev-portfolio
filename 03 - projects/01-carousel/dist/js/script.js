const carousel = document.querySelector('.carousel');
const carouselImageButtons = document.querySelectorAll('.carousel__buttons');
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
    makeActive(carouselViewEls, imageNumber + 1, 'carousel__view--active');
  }

  if (direction === 'backward') {
    makeActive(carouselViewEls, imageNumber - 1, 'carousel__view--active');
  }
};

carouselBtnRight.addEventListener('click', () => {
  switch (imageNumber) {
    case 1: {
      controls('forward', 3);
      imageNumber++;
      break;
    }
    case 2: {
      controls('forward', 3);
      imageNumber++;
      break;
    }
    case 3: {
      controls('forward', 3);
      imageNumber++;
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

carouselBtnLeft.addEventListener('click', () => {
  switch (imageNumber) {
    case 1: {
      break;
    }
    case 2: {
      controls('backward', 3);
      imageNumber--;
      break;
    }
    case 3: {
      controls('backward', 4);
      imageNumber--;
      break;
    }
    case 4: {
      controls('backward', 4);
      imageNumber--;
      break;
    }
    default: {
      break;
    }
  }
});

carouselImageButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonNumber = +event.target.dataset.btn;

    switch (buttonNumber) {
      case 1: {
        makeActive(carouselViewEls, buttonNumber, 'carousel__view--active');
        break;
      }
      case 2: {
        makeActive(carouselViewEls, buttonNumber, 'carousel__view--active');
        break;
      }
      case 3: {
        makeActive(carouselViewEls, buttonNumber, 'carousel__view--active');
        break;
      }
      case 4: {
        makeActive(carouselViewEls, buttonNumber, 'carousel__view--active');
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
