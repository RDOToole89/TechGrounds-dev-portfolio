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
const rotateHours = (degrees) => {
  let rotation = degrees;

  hours.forEach((hour) => {
    hour.style.transform = `rotate(${rotation}deg)`;
    rotation += degrees;
  });

  rotation = degrees;

  hourNumber.forEach((hourNumber, i) => {
    hourNumber.style.transform = `rotate(${-rotation}deg)`;

    rotation += degrees;
  });
};

rotateHours(29.72);

const rotateSegments = (degrees) => {
  let rotation = degrees;
  segments.forEach((segment) => {
    console.log(segment);
    segment.style.transform = `rotate(${rotation}deg)`;
    rotation += degrees;
  });
};

rotateSegments(30);

// Function that takes in a clock hand a time ratio
const setHand = (element, ratio) => {
  const rotation = ratio * 360;
  element.style.transform = `rotate(${rotation}deg)`;
};

const digitToString = (number) => {
  if (number < 10) {
    return '0' + number.toString();
  }

  return number.toString();
};

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

  // Function that takes in a clock hand a time ratio

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
