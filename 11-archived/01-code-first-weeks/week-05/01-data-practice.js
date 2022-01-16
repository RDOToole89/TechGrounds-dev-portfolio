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

const dateOne = document.querySelector('.date-one');
const dateTwo = document.querySelector('.date-two');

dateOne.min = '1970-01-01';
dateOne.max = todayDate;
dateOne.value = '1970-01-01';

dateTwo.value = todayDate;
dateTwo.min = '1970-01-01';
dateTwo.max = todayDate;

const submitBtn = document.querySelector('.submit-btn');
const showDifference = document.querySelector('.display-date');

let dateOneValue = '1970-01-01';
let dateTwoValue = todayDate;

dateOne.addEventListener('change', (e) => {
  dateOneValue = e.target.value;
  console.log('dateOneValue => ', dateOneValue);
});

dateTwo.addEventListener('change', (e) => {
  dateTwoValue = e.target.value;
  console.log('dateTwoValue => ', dateTwoValue);
});

submitBtn.addEventListener('click', () => {
  if (!(dateOneValue || dateTwoValue)) {
    showDifference.textContent = 'Not a valid value';
  }

  const daysDifference = compareDates(dateOneValue, dateTwoValue);
  showDifference.textContent = `${daysDifference} days`;
});
