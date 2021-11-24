const carousel = document.querySelector('.carousel');

const carouselViewEl = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const imgClasses = [];

// Fetching logic

const createImageFromUrl = async (imageRequest, element) => {
  try {
    const imageData = await imageRequest;

    console.log('IMAGE ===>', imageData);
    // create a new image element
    const image = document.createElement('img');

    image.classList.add('carousel__img');
    image.src = imageData.url;
    console.log(image);

    // add the newly created element and its content into the DOM
    console.log(element);
    element.appendChild(image);
  } catch (error) {
    console.log(error);
  }
};

const fetchImageAndMount = async (url, dimensions) => {
  const imageResizedUrl = url + dimensions;

  try {
    const response = await fetch(imageResizedUrl);
    if (response.status === 200) {
      console.log(response);
      await createImage(response);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchImageAndMount('https://source.unsplash.com/random/', '800x600');

// UI Logic

let imageNumber = 0;

const controls = (imgNum, className, direction) => {
  if (imageNumber > 3 || imageNumber < 0) return;

  if (direction === 'forward') {
    carouselViewEl[imgNum].classList.remove(className);
    carouselViewEl[imgNum + 1].classList.add(className);
  }

  if (direction === 'backward') {
    carouselViewEl[imgNum].classList.remove(className);
    carouselViewEl[imgNum - 1].classList.add(className);
  }
};

carouselBtnRight.addEventListener('click', () => {
  console.log('click');
  console.log(imageNumber);

  switch (imageNumber) {
    case 0: {
      controls(imageNumber, 'carousel__view--active', 'forward');
      imageNumber++;
      break;
    }
    case 1: {
      controls(imageNumber, 'carousel__view--active', 'forward');
      imageNumber++;
      break;
    }
    case 2: {
      controls(imageNumber, 'carousel__view--active', 'forward');
      imageNumber++;
      break;
    }
    case 3: {
      break;
    }
    default: {
      break;
    }
  }
});

carouselBtnLeft.addEventListener('click', () => {
  switch (imageNumber) {
    case 0: {
      break;
    }
    case 1: {
      controls(imageNumber, 'carousel__view--active', 'backward');
      imageNumber--;
      break;
    }
    case 2: {
      controls(imageNumber, 'carousel__view--active', 'backward');
      imageNumber--;
      break;
    }
    case 3: {
      controls(imageNumber, 'carousel__view--active', 'backward');
      imageNumber--;
      break;
    }
    default: {
      break;
    }
  }
});
