const hours = document.querySelectorAll('.clock__hour');
const hourNumber = document.querySelectorAll('.clock__number');
const hourHand = document.querySelector('.clock__hand--hour');
const minuteHand = document.querySelector('.clock__hand--minute');
const secondHand = document.querySelector('.clock__hand--second');

// Rotates the hours with x deg for each number
const rotateHours = () => {
  let rotation = 29.6;

  hours.forEach((hour) => {
    hour.style.transform = `rotate(${rotation}deg)`;
    rotation += 29.6;
  });

  rotation = 29.6;

  hourNumber.forEach((hourNumber, i) => {
    hourNumber.style.transform = `rotate(${-rotation}deg)`;

    rotation += 29.6;
  });
};

rotateHours();

// Function that takes in a clock hand a time ratio
const setHand = (element, ratio) => {
  const rotation = ratio * 360;
  element.style.transform = `rotate(${rotation}deg)`;
};

const startClock = () => {
  const currentDate = new Date();

  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  setHand(secondHand, secondRatio);
  setHand(minuteHand, minuteRatio);
  setHand(hourHand, hourRatio);
};

let start = setInterval(startClock, 1000);
