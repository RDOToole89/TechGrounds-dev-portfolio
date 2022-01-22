export const handleTempGradient = (temperature: number) => {
  if (temperature >= -30) setGradient(['#44b5fe', '#37f1fe', '#9bf8ff']);
  if (temperature >= -10) setGradient(['#a4c7fd', '#b1d6fc', '#c1e7fb']);
  if (temperature >= 0) setGradient(['#3286a7', '#b1dae1', '#d8eeee']);
  if (temperature >= 7) setGradient(['#4792b0', '#6ca8c0', '#EDE574']);
  if (temperature >= 12) setGradient(['#b1dae1', '#d0e9ed', '#fcdd8e']);
  if (temperature >= 20) setGradient(['#f9ba1d', '#e0a71a', '#fcdd8e']);
  if (temperature >= 27) setGradient(['#991B1B', '#f9ba1d', '#fadd4f']);
};

export const handleSearchOnChange = (userInput: string): void => {
  setSearchInput(userInput);
};

export const onClickSetCity = (): void => {
  setCity(searchInput);
};

export const resetCity = (): void => {
  setCity('');
  setSearchInput('');
};

export const handleErrorOnClick = (): void => {
  setError(!error);
};

export const activateCityDetails = () => {
  setCityDetailsActive(true);
};

export const goBackToHomeScreen = () => {
  resetCity();
  setCityDetailsActive(false);
};
