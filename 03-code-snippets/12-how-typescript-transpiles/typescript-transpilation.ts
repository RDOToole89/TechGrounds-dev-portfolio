'use strict';

// TypeScript
class Boat {
  color: string = 'red';

  pilot(): void {
    console.log('swish');
  }

  float(): void {
    console.log('boat is floating');
  }
}

// PRE ES6 prototype inheritance
var BoatConstructor = /** @class */ (function () {
  function Boat() {
    // @ts-ignore
    this.color = 'red';
  }
  Boat.prototype.pilot = function () {
    console.log('swish');
  };
  Boat.prototype.float = function () {
    console.log('boat is floating');
  };
  return Boat;
})();

const boat = new Boat();
console.log(boat.color);
console.log(boat.pilot());

//@ts-ignore
Boat.prototype.sink = () => {
  console.log('boat is sinking');
};

//@ts-ignore
console.log('line 41', boat.sink());
