// Triple Slash directive
/// <reference types="@types/google.maps" />

// Parcel is a library that makes it easy to run TypeScript files.
// By linking ot the index.ts in the index.html file
// Run parcel index.ts and parcel-bundler will transform the TypeScript
// into JavaScript and run it on a local server.

// console.log('Hi there from TS!');

// import { User } from './User';
// import { Company } from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();

// console.log(company);
// console.log(google);

const map = document.querySelector('#map') as HTMLElement;
console.log(map);
const mapOptions = {
  zoom: 1,
  center: {
    lat: 52.373072104297016,
    lng: 4.892650637158713,
  },
};

new google.maps.Map(map, {
  zoom: 2,
  center: {
    lat: 52.373072104297016,
    lng: 4.892650637158713,
  },
});
