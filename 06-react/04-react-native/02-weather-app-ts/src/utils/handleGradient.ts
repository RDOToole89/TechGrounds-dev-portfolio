interface IHandleTempGradient {
  temp: number;
  setter(array?: string[]): void;
}

export const handleTempGradients = (
  temp: number,
  setter: (array: string[]) => void
) => {
  if (temp >= -21 && temp <= -12) setter(['#44b5fe', '#37f1fe', '#9bf8ff']);
  if (temp >= -11 && temp <= -1) setter(['#a4c7fd', '#b1d6fc', '#c1e7fb']);
  if (temp >= 0 && temp <= 7) setter(['#3286a7', '#b1dae1', '#d8eeee']);
  if (temp >= 8 && temp <= 12) setter(['#4792b0', '#6ca8c0', '#5dbf99']);
  if (temp >= 13 && temp <= 20) setter(['#6ca8c0', '#d0e9ed', '#fde4a5']);
  if (temp >= 21 && temp <= 28) setter(['#fde4a5', '#FCD34D', '#fcdd8e']);
  if (temp >= 28 && temp <= 50) setter(['#fcdd8e', '#FCD34D', '#a33232']);
};
