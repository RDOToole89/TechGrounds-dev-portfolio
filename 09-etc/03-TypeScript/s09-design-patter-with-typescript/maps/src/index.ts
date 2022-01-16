// Triple Slash directive
/// <reference types="@types/google.maps" />

// Parcel is a library that makes it easy to run TypeScript files.
// By linking ot the index.ts in the index.html file
// Run parcel index.ts and parcel-bundler will transform the TypeScript
// into JavaScript and run it on a local server.

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const userOne = new User();
const userTwo = new User();
console.log(userOne);

const companyOne = new Company();
const companyTwo = new Company();

const customMap = new CustomMap('#map');
customMap.addMarker(userOne);
customMap.addMarker(userTwo);
customMap.addMarker(companyOne);
customMap.addMarker(companyTwo);
