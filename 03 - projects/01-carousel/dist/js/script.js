const carousel = document.querySelector('.carousel');
const carouselViewButtons = document.querySelectorAll('.carousel__button');
const carouselViewEls = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const carouselBtnRandom = document.querySelector('.carousel__button--random');
const carouselViewActive = document.querySelector('.carousel__view--active');

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

// This functions takes in an array (nodeList) of elements and removes the active class
const makeActive = (elements, elements2, viewNumber, className1, className2) => {
  console.log('Inside MakeACTIVE => elements', elements, viewNumber, className1);

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
    console.log('INSIDE FORWARD');

    makeActive(
      carouselViewButtons,
      carouselViewEls,
      imageNumber + 1,
      'carousel__button--active',
      'carousel__view--active'
    );
  }

  if (direction === 'backward') {
    makeActive(
      carouselViewButtons,
      carouselViewEls,
      imageNumber - 1,
      'carousel__button--active',
      'carousel__view--active'
    );
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

// Backwards button => Previous
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
        makeActive(
          carouselViewButtons,
          carouselViewEls,
          viewNumber,
          'carousel__button--active',
          'carousel__view--active'
        );

        break;
      }
      case 2: {
        makeActive(
          carouselViewButtons,
          carouselViewEls,
          viewNumber,
          'carousel__button--active',
          'carousel__view--active'
        );

        break;
      }
      case 3: {
        makeActive(
          carouselViewButtons,
          carouselViewEls,
          viewNumber,
          'carousel__button--active',
          'carousel__view--active'
        );

        break;
      }
      case 4: {
        makeActive(
          carouselViewButtons,
          carouselViewEls,
          viewNumber,
          'carousel__button--active',
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

const randomImage = fetchRandomImage('https://source.unsplash.com/random/', '800x600').catch(
  (error) => console.log(error)
);

carouselBtnRandom.addEventListener('click', () => {
  carouselViewActive.childNodes[imageNumber].src = randomImage;
});
