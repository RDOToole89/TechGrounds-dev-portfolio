// old way cmj
// const path = require('path);
import path from 'path';

// old way cmj
// var pathObj = path.parse(__filename);
let pathObj = path.parse(import.meta.url);

console.log(pathObj);
