const carousel = document.querySelector('.carousel');
const carouselImageButtons = document.querySelectorAll('.carousel__buttons');
const carouselViewEl = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const carouselBtnRandom = document.querySelector('.carousel__button--random');

// Fetching logic

// const createImageFromUrl = async (imageRequest, element) => {
//   try {
//     const imageData = await imageRequest;

//     // create a new image element
//     const image = document.createElement('img');

//     image.classList.add('carousel__img');
//     image.src = imageData.url;
//     image.alt = 'random unsplash image';
//     console.log('IMAGE ELEMENT', image);

//     // add the newly created element and its content into the DOM
//     element.appendChild(image);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const fetchImageAndMount = async (url, dimensions) => {
//   const imageResizedUrl = url + dimensions;

//   try {
//     const imageResponse = await fetch(imageResizedUrl);
//     if (imageResponse.status === 200) {
//       console.log(imageResponse);
//       await createImageFromUrl(imageResponse, carousel);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchImageAndMount('https://source.unsplash.com/random/', '800x600');

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

const makeActive = (viewNumber) => {
  carouselViewEl.forEach((view) => {
    if (view.classList.contains('carousel__view--active')) {
      view.classList.remove('carousel__view--active');
      carouselViewEl[viewNumber - 1].classList.add('carousel__view--active');
    }
  });
};

const controls = (direction, max) => {
  if (imageNumber < 1 || imageNumber > max) return;

  if (direction === 'forward') {
    makeActive(imageNumber + 1);
  }

  if (direction === 'backward') {
    makeActive(imageNumber - 1);
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
        makeActive(buttonNumber);
        break;
      }
      case 2: {
        makeActive(buttonNumber);
        break;
      }
      case 3: {
        makeActive(buttonNumber);
        break;
      }
      case 4: {
        makeActive(buttonNumber);
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
      [...carouselViewEl].forEach((view) => {
        if (view.classList.contains('carousel__view--active')) {
          view.innerHTML = `<img src="${response.url}" class="carousel__img"/>`;
        }
      });
    })
    .catch((error) => console.log(error));
});
