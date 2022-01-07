import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'Roibin', age: 32 });
const user2 = new User({});

console.log(user.get('name'));
console.log(user.get('age'));
user.set({ name: 'Harry' });
user.set({ name: 'Stephen', age: 28 });
console.log('AFTER UPDATE');
console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('Change triggered');
});

user.on('click', () => {
  console.log('Click triggered');
});

user.on('hover', () => {
  console.log('Hover triggered');
});

console.log(user);

user.trigger('change');
user.trigger('hover');

// axios.post('http://localhost:3000/users', {
//   name: 'Roibin',
//   age: 20,
// });

// axios.get('http://localhost:3000/users/1');

const user3 = new User({ id: 1 });

user3.fetch();

setTimeout(() => {
  console.log(user3);
}, 4000);
