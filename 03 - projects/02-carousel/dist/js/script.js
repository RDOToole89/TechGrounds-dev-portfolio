const carousel = document.querySelector('.carousel');
const carouselViewButtons = document.querySelectorAll('.carousel__navigation-btn');
const carouselViewElements = document.querySelectorAll('.carousel__view');
const carouselBtnNext = document.querySelector('.carousel__btn--next');
const carouselBtnPrevious = document.querySelector('.carousel__btn--previous');
const carouselBtnRandom = document.querySelector('.carousel__navigation-btn--random');
const spinner = document.querySelector('#spinner');
const _APIURL = 'https://source.unsplash.com/random';
const imageDimensions = '/800x600';
const forceNewRequest = `/?sig=`;

// Helper Functions

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

// Funtion that builds the unsplash request APIURL. Takes a random number to force the API
// to deliver a new image each time request is made.
const apiUrlBuilder = (url, dimensionsParam, forceRequestParam, getRandomNumber) =>
  url + dimensionsParam + forceRequestParam + getRandomNumber(1, 1000);

const createImageElement = (url) => {
  const image = document.createElement('img');
  image.src = url;
  image.alt = 'random unsplash image';
  image.classList.add('carousel__img');
  return image;
};

const mountElementToView = (view, element) => {
  view.appendChild(element);
};

// Fetching Logic

// Resizes the the url with dimension in "800x600" format as specified in the Unsplash API guide
const randomUrl = apiUrlBuilder(_APIURL, imageDimensions, forceNewRequest, getRandomNumber);

// Fetches a random image with the Unsplash API in mind from online
const fetchRandomImage = (url) => {
  return fetch(url)
    .then((response) => response)
    .catch((error) => console.log(error));
};

// UI Logic

// Variable holding the current image view on the carousel

let imageNumber = 1;

// This functions takes in an two arrays (nodeLists) of elements and removes the active class
// appends the class to the correct view
const makeActive = (elements, elements2, viewNumber, className1, className2) => {
  // Sets the correct imageNumber as specified in the arguments
  imageNumber = viewNumber;

  elements.forEach((element) => {
    if (element.classList.contains(className1)) {
      element.classList.remove(className1);

      // viewNumber - 1 because Arrays start at an index of 0
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

// This function takes a 'carousel' direction and max number of images.
// If the image number is out of bounds it returns
const controls = (direction, max) => {
  if (imageNumber < 1 || imageNumber > max) return;

  // If the user wants the next view the makeActive function is called
  // imageNumber is increased with one to signal the forward movement
  if (direction === 'forward') {
    makeActive(
      carouselViewButtons,
      carouselViewElements,
      imageNumber + 1,
      'carousel__navigation-btn--active',
      'carousel__view--active'
    );
  }

  // If the user wants the previous view the makeActive function is called
  // imageNumber is decreased with one to signal the backward movement
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
    // converts the viewNumber which is a string to a number by prepending +
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

// Eventlistener fetches a random image and changes the src of the ACTIVE image.
carouselBtnRandom.addEventListener('click', () => {
  const carouselViewActive = document.querySelector('.carousel__view--active');
  const apiUrl = apiUrlBuilder(_APIURL, imageDimensions, forceNewRequest, getRandomNumber);

  fetchRandomImage(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        carouselViewActive.childNodes[0].src = response.url;
      }
      return;
    })
    .catch((error) => console.log(error));
});

// Start function will that will start the carousel and load in images from the unsplash API.
const startCarousel = (numberOfViews) => {
  // Boolean condition to check rendering state
  let loading = true;

  const imagePromises = [];

  for (let i = 0; i < numberOfViews; i++) {
    const apiUrl = apiUrlBuilder(_APIURL, imageDimensions, forceNewRequest, getRandomNumber);

    imagePromises.push(fetchRandomImage(apiUrl));
  }

  // Loops over the imagePromises array creates a new image element and Mounts it to the views
  Promise.all(imagePromises).then((images) =>
    images.forEach((element, i) => {
      const newImageElement = createImageElement(element.url);
      mountElementToView(carouselViewElements[i], newImageElement);

      // If there is an image in the first view the images must have loaded
      if (carouselViewElements[0].children.length > 0) {
        loading = false;
      }

      // If we are not loading: display carousel and remove the spinner from the DOM.
      if (!loading) {
        carousel.classList.add('flex');
        spinner.classList.remove('flex');
      }
    })
  );
};

// Initializes Carousel
startCarousel(4);
