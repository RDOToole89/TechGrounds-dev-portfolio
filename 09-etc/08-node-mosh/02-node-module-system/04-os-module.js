import os from 'os';

console.log(os);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory} `);
console.log(`Free Memory: ${freeMemory}`);
