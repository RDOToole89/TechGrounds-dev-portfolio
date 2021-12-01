// We get an error because the faker module does not include a type definition file
// We need to install a type definition file manually
// By running npm i @types/{library name} we can install the types necessary for many libraries

// ctrl + click will bring you to the type definition file
import faker from 'faker';

export const color = 'red';

// To make the class available somewhere else in our project we need to export it.
export class User {
  // Defines what class user IS but DOES NOT initialize the variables
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  // The constructor function does the actual initalization of the User class
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
