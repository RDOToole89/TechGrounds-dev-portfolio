interface Vehicle {
  name: string;
  // other types are pefectly fine to use in an interface
  year: Date;
  broken: boolean;
  // function should be listed with the return type
  // summary(): string;
}

interface Reportable {
  summary(): string;
}

// Don't put too much functionality in an interface (seperation of concerns) 'single responsibility principle'
// The reporatable interface can be used on many different sorts of objects

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const oldHonda = {
  name: 'Honda',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// This type annotation becomes really hard to read!
// It would be better to use an interface
const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// The same print vehicle function annotated with the Vehicle interface
const printVehicleInterface = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);

  // console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printVehicle(oldCivic);
printSummary(oldHonda);
printSummary(drink);
