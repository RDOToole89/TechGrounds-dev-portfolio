export const computeTime = (cityName: string, offsetUTC: number | string) => {
  // create new instance of Date
  const currentDate = new Date();

  // now you need to get UTC time in msec
  const utcTime = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;

  // create instance of several cities
  const newDateInstance = new Date(utcTime + 3600000 * Number(offsetUTC));

  // in this step you have to return time as a string
  // console.log('Local time of ' + cityName + ' is ' + newDateInstance.toLocaleString());
  return newDateInstance;
};

export const unixTimeStampCoverter = (timestamp: number) => {
  const dt = new Date(timestamp * 1000);
  let hr = dt.getHours();
  let m = '0' + dt.getMinutes();
  let s = '0' + dt.getSeconds();

  return dt;
};

export const formatDate = (dateIsoString: string) => {
  var d = new Date(dateIsoString),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [day, month, year].join('-');
};
