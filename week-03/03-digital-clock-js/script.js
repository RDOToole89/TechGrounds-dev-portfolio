const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

const setClock = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  hoursEl.textContent = currentHour;
  minutesEl.textContent =
    currentMinute < 10 ? '0' + currentMinute.toString() : currentMinute;
  secondsEl.textContent = currentSecond;
};

let timer = null;

const startClock = () => {
  if (timer) {
    timer = null;
  } else {
    timer = setInterval(setClock, 1000);
  }
};

start.addEventListener('click', startClock);

stop.addEventListener('click', () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});

setClock();
startClock();
