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

// Rotates the hours with x degrees for each hour number
const rotateHours = (degrees) => {
  let rotation = degrees;

  hours.forEach((hour) => {
    hour.style.transform = `rotate(${rotation}deg)`;
    rotation += degrees;
  });

  // Resets the rotation for the next part of the function which
  // rotates the number itself on its x-axis
  rotation = degrees;

  hourNumber.forEach((hourNumber, i) => {
    hourNumber.style.transform = `rotate(${-rotation}deg)`;

    rotation += degrees;
  });
};

rotateHours(29.71);

// Rotates the the segments with x degrees for each 5 minute segment
const rotateSegments = (degrees) => {
  let rotation = degrees;

  segments.forEach((segment) => {
    console.log(segment);
    segment.style.transform = `rotate(${rotation}deg)`;
    rotation += degrees;
  });
};

rotateSegments(30);

// Function that takes in a clock hand and a time ratio
const setHand = (element, ratio) => {
  const rotation = ratio * 360;
  element.style.transform = `rotate(${rotation}deg)`;
};

// Function that takes in a number and prepends a '0' to it
// if the number is smaller than 10. This is to simulate
// digital clock notatation

const digitToString = (number) => {
  if (number < 10) {
    return '0' + number.toString();
  }

  return number.toString();
};

// Function to set the digits on a digital clock type interface
// takes in an element and a timeUnit
const setDigit = (element, timeUnit) => {
  const currentDate = new Date();
  const currentMiliSeconds = digitToString(currentDate.getMilliseconds());
  const currentSeconds = digitToString(currentDate.getSeconds());
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  switch (timeUnit) {
    case 'miliSeconds': {
      element.innerText = currentMiliSeconds;
      break;
    }
    case 'seconds': {
      element.innerText = currentSeconds;
      break;
    }
    case 'minutes': {
      element.innerText = currentMinutes;
      break;
    }
    case 'hours': {
      element.innerText = currentHours;
      break;
    }
    default: {
      break;
    }
  }
};

// Starts the clock and sets the clock to its correct positions
const startClock = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Sets the dates
  day.innerText = digitToString(currentDay);
  month.innerText = digitToString(currentMonth);
  year.innerText = digitToString(currentYear);

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
