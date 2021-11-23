'strict mode';

var aVarScope = 'A global variable => visible on the window object => global scope in the browser ';

let aLetScope = 'A locally scoped variable';

const aConstScope = 'A locally scoped variable';

console.log(aVarScope);
console.log(aLetScope);
console.log(aConstScope);

console.log('This in the global scope', this);

const arrowFunctionThis = () => {
  console.log('This inside an arrow function body => inherits its PARENTS scope', this);
  let variabeInsideArrowFunction = 0;

  const logUpperArrowScope = () => {
    console.log('This inside a nested arrow function inside an arrow function', this);
  };
  logUpperArrowScope();
};

arrowFunctionThis();

function regularFunctionThis() {
  console.log('This inside regular function body => inherits its PARENTS scope', this);

  function logUpperRegularFunctionScope() {
    console.log('This inside a nested function', this);
  }

  logUpperRegularFunctionScope();
}

regularFunctionThis();

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  thisInsideAClassArrow = () => {
    console.log('This as an ARROW FUNCTION class method', this);
  };

  thisInsideAClass() {
    console.log('This inside an CLASS regular function', this);
  }
}

const car = new Car('Honda', 'Red');

console.log(
  'This called in an instance of class Car with a regular function',
  car.thisInsideAClass()
);
console.log(
  'This called in an instance of class Car with an arrow function',
  car.thisInsideAClassArrow()
);
