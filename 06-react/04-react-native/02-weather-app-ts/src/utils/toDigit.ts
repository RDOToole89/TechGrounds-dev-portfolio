export const digitToString = (number: number): string => {
  if (number < 10) {
    return '0' + number.toString();
  }
  return number.toString();
};
