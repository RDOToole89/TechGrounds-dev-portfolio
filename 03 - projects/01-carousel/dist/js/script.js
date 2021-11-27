const carousel = document.querySelector('.carousel');
const carouselViewButtons = document.querySelectorAll('.carousel__button');
const carouselViewEls = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const carouselBtnRandom = document.querySelector('.carousel__button--random');

// Fetching logic

// Fetches a random image with the Unsplash API in mind from online
const fetchRandomImage = async (url, dimensions) => {
  // Resizes the the url with dimension in "800x600" format as specified in the Unsplash API guide
  const imageResizedUrl = url + dimensions;

  try {
    const imageResponse = await fetch(imageResizedUrl);

    return imageResponse;
  } catch (error) {
    console.log(error);
  }
};

// UI Logic

// Variable holding the current image view on the carousel

let imageNumber = 1;

// This functions takes in an array of elements and removes the active class
const makeActive = (elements, viewNumber, className) => {
  console.log('Inside MakeACTIVE => elements', elements, viewNumber, className);

  elements.forEach((element) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
      elements[viewNumber - 1].classList.add(className);
    }
  });
};

// Reusable function takes a direction.
const controls = (direction, max) => {
  if (imageNumber < 1 || imageNumber > max) return;

  if (direction === 'forward') {
    console.log('INSIDE FORWARD');

    makeActive(carouselViewButtons, imageNumber + 1, 'carousel__button--active');
    makeActive(carouselViewEls, imageNumber + 1, 'carousel__view--active');
  }

  if (direction === 'backward') {
    makeActive(carouselViewButtons, imageNumber - 1, 'carousel__button--active');
    makeActive(carouselViewEls, imageNumber - 1, 'carousel__view--active');
  }
};

// Naming could be better but I am too lazy to change it in the HTML.
// Would be better as button forward / backward.
carouselBtnRight.addEventListener('click', () => {
  console.log('INSIDE FORWARD => ', imageNumber);

  switch (imageNumber) {
    case 1: {
      console.log(imageNumber);
      controls('forward', 4);
      imageNumber++;
      break;
    }
    case 2: {
      console.log(imageNumber);
      controls('forward', 4);
      imageNumber++;
      break;
    }
    case 3: {
      console.log(imageNumber);
      controls('forward', 4);
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
      console.log(imageNumber);
      break;
    }
    case 2: {
      console.log(imageNumber);
      controls('backward', 4);
      imageNumber--;
      break;
    }
    case 3: {
      console.log(imageNumber);
      controls('backward', 4);
      imageNumber--;
      break;
    }
    case 4: {
      console.log(imageNumber);
      controls('backward', 4);
      imageNumber--;
      break;
    }
    default: {
      break;
    }
  }
});

// => I have a lot of switch statements ... I feel this is not DRY
// code.

carouselViewButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const viewNumber = +event.target.dataset.btn;
    console.log('VIEWNUMBER => ', viewNumber);

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

// I like this ... JavaScript is such a cool programming language.
carouselBtnRandom.addEventListener('click', () => {
  fetchRandomImage('https://source.unsplash.com/random/', '800x600')
    .then((response) => {
      [...carouselViewEls].forEach((view) => {
        if (view.classList.contains('carousel__view--active')) {
          // Yeah I know shouldn't use .innerHTML, quick and dirty!
          view.innerHTML = `<img src="${response.url}" class="carousel__img"/>`;
        }
      });
    })
    .catch((error) => console.log(error));
});
