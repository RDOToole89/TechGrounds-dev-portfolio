export const buildCurrentWeatherUrl = (
  city: string,
  apiKey: string,
  unit: string
) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
};

// unused for now: ...
// const unixTime = (new Date().getTime() / 1000).toString();

// Grabs lat and long data to exclude from the API request
export const exludeString = 'current,minutely,hourly,alerts';

export const buildOneCallForecastUrl = (
  latitude: string,
  longitude: string,
  excludeString: string,
  unit: string = 'metric',
  apiKey: string
) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeString}&units=${unit}&appid=${apiKey}`;
};
