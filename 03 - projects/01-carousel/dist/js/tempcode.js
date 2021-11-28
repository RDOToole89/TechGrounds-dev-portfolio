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

const createImageFromUrl = async (imageRequest, element) => {
  try {
    const imageData = await imageRequest;

    // create a new image element
    const image = document.createElement('img');

    image.classList.add('carousel__img');
    image.src = imageData.url;
    image.alt = 'random unsplash image';
    console.log('IMAGE ELEMENT', image);

    // add the newly created element and its content into the DOM
    element.appendChild(image);
  } catch (error) {
    console.log(error);
  }
};

const fetchImageAndMount = async (url, dimensions) => {
  const imageResizedUrl = url + dimensions;

  try {
    const imageResponse = await fetch(imageResizedUrl);
    if (imageResponse.status === 200) {
      console.log(imageResponse);
      await createImageFromUrl(imageResponse, carousel);
    }
  } catch (error) {
    console.log(error);
  }
};

fetchImageAndMount('https://source.unsplash.com/random/', '800x600');

const fetchRandomImage = (url, dimensions) => {
  const imageResizedUrl = url + dimensions;

  const imageResponse = fetch(imageResizedUrl);

  if (imageResponse) {
    imageResponse.then((response) => console.log(response));

    return imageResponse;
  }

  imageResponse.catch((error) => console.log(error));
};
