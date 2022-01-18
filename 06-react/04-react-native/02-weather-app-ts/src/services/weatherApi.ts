export const buildCurrentWeatherUrl = (city: string, apiKey: string, unit: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
};

const unixTime = (new Date().getTime() / 1000).toString();

export const buildOneCallForecastUrl = (
  latitude: string,
  longitude: string,
  excludeString: string,
  unit: string = 'metric',
  apiKey: string
) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeString}&units=${unit}&appid=${apiKey}`;
};
