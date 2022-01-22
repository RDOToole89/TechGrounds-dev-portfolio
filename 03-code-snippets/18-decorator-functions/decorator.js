// Example: 1:
// Using closure to log how many times a function is called

let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

console.log(sum(1, 2, 3, 4, 5));

// This is a decorator function ir rakes in another function and
// decorates it with a additional functionality.
const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    //write to logs, console, db, etc
    console.log(`sum has been called ${(count += 1)} times`);
    return fn(...args);
  };
};

sum = callCounter(sum);

console.log(sum(2, 3, 5));
console.log(sum(1, 5));
console.log(sum(14, 5));

// Exmaple 2:
// Check for valid data and number of params

let rectangleArea = (length, width) => {
  return length + width;
};

const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameter for ${fn.name}`);
    }
    return fn(...params);
  };
};

const countPar = countParams(rectangleArea);
console.log(countPar(100, 200));

const requireIntegers = (fn) => {
  const name = fn.name;

  return (name, ...params) => {
    params.forEach((param) => {
      if (!Number.isInteger(param)) {
        throw new TypeError(`Params for ${name} must be integers`);
      }
    });
    return fn(...params);
  };
};

// Building the function with Composition
const countParInt = requireIntegers(rectangleArea);

console.log(countParInt(100, 100));

// Example 3:
// Decorating an async API call function:
// Time data requests during development

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const dataReponseTime = (fn) => {
  return async (url) => {
    console.time('fn');
    const data = await fn(url);
    console.timeEnd('fn');
    return data;
  };
};

const myTestFunction = async () => {
  requestData = dataReponseTime(requestData);

  const data = await requestData('https://jsonplaceholder.typicode.com/posts');

  console.log(data);
};

myTestFunction();
