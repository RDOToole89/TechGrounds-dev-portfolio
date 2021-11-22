const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Typing a destructured variable! => we describe
const { age }: { age: number } = profile;

// Typing a destructured object within an object
// The below code is just like a regular JS object.
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
