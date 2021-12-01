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

// Quick trick to convert date to yyyy-mm-dd format
const todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);
