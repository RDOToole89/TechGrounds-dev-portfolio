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
  minutesEl.textContent = currentMinute < 10 ? '0' + currentMinute.toString() : currentMinute;
  secondsEl.textContent = currentSecond;
};

let timer = null;
let running = true;

const startClock = () => {
  if (!timer) {
    timer = setInterval(setClock, 1000);
    console.log('TIMER => INTERVAL', timer);
  }

  return;
};

start.addEventListener('click', startClock);

stop.addEventListener('click', () => {
  console.log('STOP => INTERVAL', timer);
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});

setClock();
startClock();
