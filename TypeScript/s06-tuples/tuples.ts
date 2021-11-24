const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type Alias
type Drink = [string, boolean, number];

// Syntax to turn an array into a Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

const sprite: Drink = ['clear', true, 40];

const tea: Drink = ['brown', false, 0];

// Not very meaningful
const carSpecs: [number, number] = [400, 3354];

// Objects are better to model records
const carStats = {
  horsepower: 400,
  weight: 3354,
};
