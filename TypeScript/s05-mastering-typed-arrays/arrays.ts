const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const ford = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// `carMakers.push(100);`

// Help with 'map'
// In higher order functions such as .map, if TypeScript knows the type of value
// it will automatically suggest the methods you can use on that return type
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types

// TypeScript infers this is an array that should contains Date Types and String Types
// (Date | string)[]
const imporantDates = [new Date(), '2030-10-10'];

// Here we specifically declare it can by either of Type (Date | string)[]
// because TypeScript wasn't able to infer this from the initialization
const mostImportantDates: (Date | string)[] = [new Date()];
