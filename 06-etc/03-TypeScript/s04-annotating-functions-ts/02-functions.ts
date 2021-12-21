// function add takes two arguments a and b which are both numbers.
// this functions RETURNS the addition of those number thus it must return a number

const add = (a: number, b: number): number => {
  return a + b;
};

// CORRECT
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Forgot return statement incorrect VOID!
const subtract2 = (a: number, b: number) => {
  a - b;
};

// Regular arrow function
const divide = (a: number, b: number): number => {
  return a / b;
};

// Type annotation anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Function that returns void can return void or null or nothing at all
const logger = (message: string): void => {
  console.log(message);
};

// Never indicated that we for example throw an Error and never reach the
// end of the function with a value so the function NEVER returns anything
const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Desctructuring with types

// here we describe a forecast object that has a date a weather property
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// with destructing we just annotate the desctructured object
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
