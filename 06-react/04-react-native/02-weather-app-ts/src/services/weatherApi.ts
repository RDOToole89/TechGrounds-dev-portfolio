export const buildCurrentWeatherUrl = (city: string, apiKey: string, unit: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
};

export const buildOneCallForecastUrl = (latitude: string, longitude: string, apiKey: string) => {
  return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
};
