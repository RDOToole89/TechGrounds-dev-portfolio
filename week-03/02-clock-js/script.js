// select the elements with the data selectors

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

const setRotation = (element, rotationRatio) => {
  element.style.setProperty('--rotation', rotationRatio * 360);
};

const setClock = () => {
  // gets the current date
  const currentDate = new Date();

  // 60 seconds divided by 60 = 1 => ratio of 1 or 100%
  // 45 seconds divided by 60 = .75 = ratio .75 or 75% of seconds left
  const secondsRatio = currentDate.getSeconds() / 60;

  // console.log('CURRENT SECONDSRATIO: ', secondsRatio);

  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

  // console.log('CURRENT MINUTESRATIO: ', minutesRatio);

  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  // console.log('CURRENT HOURSRATIO ', hoursRatio);

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

// sets an interval for the setClock function to move every 1000ms
setInterval(setClock, 1000);

// call setClock() when the page loads! so it doesn't jump
setClock();
