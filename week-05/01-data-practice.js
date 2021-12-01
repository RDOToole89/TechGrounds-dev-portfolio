const compareDates = (d1, d2) => {
  const msDay = 1000 * 60 * 60 * 24;

  const date1 = new Date(d1);
  const date2 = new Date(d2);

  if (date1 > date2) {
    return Math.abs((date1 - date2) / msDay);
  }

  return Math.abs((date2 - date1) / msDay);
};

// The Date object contains a Number that represents milliseconds passed since the // // Epoch, that is 1 January 1970.

const todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

const date1 = document.querySelector('.date-one');
const date2 = document.querySelector('.date-two');

date1.min = '1970-01-01';
date1.min = '1970-01-01';
date1.value = '1970-01-01';

date2.value = todayDate;
date2.max = todayDate;
date2.max = todayDate;

const submitBtn = document.querySelector('.submit-btn');
const showDifference = document.querySelector('.display-date');

let date1Value = null;
let date2Value = null;

date1.addEventListener('change', (e) => {
  date1Value = e.target.value;
  console.log('date1value => ', date1Value);
});

date2.addEventListener('change', (e) => {
  date2Value = e.target.value;
  console.log('date2value => ', date2Value);
});

submitBtn.addEventListener('click', () => {
  if (!(date1Value || date2Value)) {
    showDifference.textContent = 'Not a valid value';
  }

  const daysDifference = compareDates(date1Value, date2Value);
  showDifference.value = daysDifference;
});
