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
