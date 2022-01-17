export const computeTime = (cityName: string, offsetUTC: any) => {
  // create new instance of Date
  const currentDate = new Date();

  // now you need to get UTC time in msec
  const utcTime = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;

  // create instance of several cities
  const newDateInstance = new Date(utcTime + 3600000 * offsetUTC);

  // in this step you have to return time as a string
  console.log('Local time of ' + cityName + ' is ' + newDateInstance.toLocaleString());
  return newDateInstance;
};
