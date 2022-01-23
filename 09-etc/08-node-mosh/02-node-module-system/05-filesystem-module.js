import fs from 'fs';
import { readdir } from 'fs/promises';

// most file system methods come in a sync and an async version
// we should almost always you the async version

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('result', files);
});

try {
  const files = await readdir('./');
  console.log('PROMISE READDIR', files);
} catch (error) {
  console.log(error);
}
