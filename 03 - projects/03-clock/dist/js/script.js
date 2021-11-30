const hours = document.querySelectorAll('.clock__hour');
const hourNumber = document.querySelectorAll('.clock__number');
const hourHand = document.querySelector('.clock__hand--hour');
const minuteHand = document.querySelector('.clock__hand--minute');
const secondHand = document.querySelector('.clock__hand--second');
const segments = document.querySelectorAll('.clock__segment');
const day = document.querySelector('.clock__day');
const month = document.querySelector('.clock__month');
const year = document.querySelector('.clock__year');
const hourDigitEl = document.querySelector('.clock__hour-digit');
const minuteDigitEl = document.querySelector('.clock__minute-digit');
const secondDigitEl = document.querySelector('.clock__second-digit');
const miliSecondDigitEl = document.querySelector('.clock__milisecond-digit');

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

const rotateSegments = () => {
  let rotation = 29.9;

  segments.forEach((segment) => {
    console.log(segment);
    segment.style.transform = `rotate(${rotation}deg)`;
    rotation += 29.9;
  });
};

rotateSegments();

// Function that takes in a clock hand a time ratio
const setHand = (element, ratio) => {
  const rotation = ratio * 360;
  element.style.transform = `rotate(${rotation}deg)`;
};

const setDigit = (element, timeUnit) => {
  const currentDate = new Date();

  switch (timeUnit) {
    case 'hours': {
      element.innerText = currentDate.getHours();
      break;
    }
    case 'minutes': {
      element.innerText = currentDate.getMinutes();
      break;
    }
    case 'seconds': {
      element.innerText = currentDate.getSeconds();
      break;
    }
    case 'miliSeconds': {
      element.innerText = currentDate.getMilliseconds();
      break;
    }
    default: {
      break;
    }
  }
};

const startClock = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Sets the date

  day.innerText = '0' + currentDay.toString();
  month.innerText = currentMonth < 10 ? '0' + currentMonth.toString() : currentMonth;
  year.innerText = currentYear;

  // Sets the hands
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

  // setDigit(miliSecondDigitEl, 'miliSeconds');
  setDigit(secondDigitEl, 'seconds');
  setDigit(minuteDigitEl, 'minutes');
  setDigit(hourDigitEl, 'hours');

  setHand(secondHand, secondRatio);
  setHand(minuteHand, minuteRatio);
  setHand(hourHand, hourRatio);
};

let start = setInterval(startClock, 1000);
