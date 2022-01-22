// function typing

const log = (message: string, userId?: string) => {
  let time = new Date().toISOString();
  console.log(time, message, userId || 'not signed in');
};

log('User click a button');

function sum(numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum([1, 2, 3, 4, 5]));

const sumRest = (...rest: number[]): number => {
  return rest.reduce((acc, val) => acc + val, 0);
};
