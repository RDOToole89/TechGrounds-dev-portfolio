const carousel = document.querySelector('.carousel');
const carouselImageButtons = document.querySelectorAll('.carousel__buttons');
const carouselViewEl = document.querySelectorAll('.carousel__view');
const carouselBtnRight = document.querySelector('.carousel__btn--right');
const carouselBtnLeft = document.querySelector('.carousel__btn--left');
const imgClasses = [];

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

let imageNumber = 0;

const controls = (imgNum, className, direction, max) => {
  if (imageNumber > max || imageNumber < 0) return;

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
  console.log('click carouselBtnRight');
  console.log(imageNumber);

  switch (imageNumber) {
    case 0: {
      controls(imageNumber, 'carousel__view--active', 'forward', 3);
      imageNumber++;
      break;
    }
    case 1: {
      controls(imageNumber, 'carousel__view--active', 'forward', 3);
      imageNumber++;
      break;
    }
    case 2: {
      controls(imageNumber, 'carousel__view--active', 'forward', 3);
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
  console.log('click carouselBtnLeft');
  console.log('Image Number inside BtnLeft', imageNumber);

  switch (imageNumber) {
    case 0: {
      break;
    }
    case 1: {
      controls(imageNumber, 'carousel__view--active', 'backward', 3);
      imageNumber--;
      break;
    }
    case 2: {
      controls(imageNumber, 'carousel__view--active', 'backward', 3);
      imageNumber--;
      break;
    }
    case 3: {
      controls(imageNumber, 'carousel__view--active', 'backward', 3);
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
    console.log(event);
    const currentButton = event.target;
    console.log(currentButton);

    fetchRandomImage('https://source.unsplash.com/random/', '800x600')
      .then((response) => {
        console.log('RESPONSE FROM FETHCRANDOMIMAGE', response.url);

        [...carouselViewEl].forEach((view) => {
          console.log('VIEW IN FOR EACH LOOP', view);
          if (view.classList.contains('carousel__view--active')) {
            view.innerHTML = `<img src="${response.url}" class="carousel__img"/>`;
          }
        });
      })
      .catch((error) => console.log(error));

    console.log(`click from ${event.target}`);
  });
});
