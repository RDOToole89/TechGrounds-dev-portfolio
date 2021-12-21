// Composition
// Focus on what it does
// We stucture our code around what something does to our code

// Many operations on fixed data
// Stateless
// Pure function => no side effects
// The function does't anything else except the code that it's running
// More declarerative
// Keep data and behaviour seperate

function learnAttack(character) {
  return Object.assign(character, { attack: () => console.log('attack!') });
}

function learnSleep(character) {
  return Object.assign(character, { sleep: () => console.log('zzzZzzzZ') });
}

function Elf(name, weapon, type) {
  let elf = {
    name,
    weapon,
    type,
  };
  return elf;
}

const roibinTheElf = Elf('Roibin', 'elf', 'bow');

learnAttack(roibinTheElf);
learnSleep(roibinTheElf);

console.log(roibinTheElf);
roibinTheElf.attack();
roibinTheElf.sleep();

const driver = (state) => ({
  drive: () => (state.position = state.position + state.speed),
});

const barker = () => ({
  bark() {
    console.log('Woof, I am ' + this.name);
  },
});

const killer = (state) => ({
  kill: () => console.log('munch munch munch ' + state.name + ' killed a rabbit'),
});

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
  };

  return Object.assign(state, barker(state), driver(state), killer(state));
};

const daimler = murderRobotDog('Daimler');
console.log(daimler);
daimler.bark();
daimler.kill();

console.log('==== seperator ===');

const dog = (name) => {
  // because of the closure an object created with the dog factory function will have access to sound
  let dogProperties = { name, sound: 'woof' };

  return Object.assign(dogProperties, barker(this));
};

console.log('sultan says: ');
const sultan = dog('Sultan');
console.log('sultan object', sultan);
sultan.bark();
