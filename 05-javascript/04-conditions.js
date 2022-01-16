// Opdracht 3.1

// a
console.log(` == betekend een gelijke waarde maar het datatype hoeft niet hetzelfde te zijn`);

// b
console.log(` === betekend strict equality de waarde moet hetzelfde zijn maar het datatype ook`);

console.log('');
console.log('<===== divider ====>');
console.log('');

// c Schrijf de If conditie zo, dat je alleen Results ziet als x==4 en y==8

let x = 4;
let y = 8;

if (x === 4 && y === 8) {
  console.log('Result!');
}

// d Schrijf het nu zo dat je alleen Results ziet als x==4 OF y==8

if (x === 4 || y === 8) {
  console.log('Result!');
}

// e

if (!(x === 4 || y === 8)) {
  console.log('if (!(x === 4 || y === 8)) Result!');
} else {
  console.log('else block (!(x === 4 || y === 8)) Result!');
}

// f => begrijp de vraag niet

console.log('');
console.log('<===== divider ====>');
console.log('');

// g

let control = 14;

if (control > 5 && control < 10) {
  console.log(`Groter dan 5 en Kleiner dan 10... het nummer is ${control}!`);
} else if (control >= 11 && control <= 20) {
  console.log(`Groter of gelijk aan 11 en Kleiner of gelijk aan 20... het nummer is ${control}!`);
} else if (control === 21 || control === 23) {
  console.log(`Getal === 21 of het getal === 23 het nummer is ${control}!`);
} else if (control < 35 || (control >= 40 && control <= 45)) {
  console.log(`Het getal is kleiner dan 35 of tussen de 40 en 45 het getal is: ${control} `);
}

if (control > 5 && control < 10)
  console.log(`IF statement versie => Groter dan 5 en Kleiner dan 10... het nummer is ${control}!`);

if (control >= 11 && control <= 20)
  console.log(
    `IF statement versie => Groter of gelijk aan 11 en Kleiner of gelijk aan 20... het nummer is ${control}!`
  );

if (control === 21 || control === 23)
  console.log(`IF statement versie =>  Getal === 21 of het getal === 23 het nummer is ${control}!`);

if (control < 35 || (control >= 40 && control <= 45))
  console.log(
    `IF statement versie => Het getal is kleiner dan 35 of tussen de 40 en 45 het getal is: ${control} `
  );

console.log('');
console.log('<===== divider ====>');
console.log('');

// Opdracht 3.2

// a)

let logic = 2;

if (logic === 3) {
  console.log(`condition: (logic === 3) logic = ${logic}`);
} else if (logic > 4) {
  console.log(`condition: (logic > 4) logic = ${logic}`);
} else if (logic > 11) {
  console.log(`condition: (logic > 11) logic = ${logic}`);
} else if (logic < 3) {
  console.log`condition: (logic < 3) logic = ${logic}`;
} else {
  return;
}

// b => [ 'condition: (logic < 3) logic = ', '' ] 2 => vreemde output

// c

let monthNumber = 12;

if (monthNumber === 1) {
  console.log('Januari');
} else if (monthNumber === 2) {
  console.log('Februari');
} else if (monthNumber === 3) {
  console.log('Februari');
} else if (monthNumber === 4) {
  console.log('Februari');
} else if (monthNumber === 5) {
  console.log('Februari');
} else if (monthNumber === 6) {
  console.log('Februari');
} else if (monthNumber === 7) {
  console.log('Februari');
} else if (monthNumber === 8) {
  console.log('Februari');
} else if (monthNumber === 9) {
  console.log('Februari');
} else if (monthNumber === 10) {
  console.log('Februari');
} else if (monthNumber === 11) {
  console.log('Februari');
} else if (monthNumber === 12) {
  console.log('Februari');
} else {
  console.log('Not a valid month number');
}

switch (monthNumber) {
  case 1: {
    console.log('Switch January');
    break;
  }
  case 2: {
    console.log('Switch February');
    break;
  }
  case 3: {
    console.log('Switch March');
    break;
  }
  case 4: {
    console.log('Switch April');
    break;
  }
  case 5: {
    console.log('Switch May');
    break;
  }
  case 6: {
    console.log('Switch June');
    break;
  }
  case 7: {
    console.log('Switch July');
    break;
  }
  case 8: {
    console.log('Switch August');
    break;
  }
  case 9: {
    console.log('Switch September');
    break;
  }
  case 10: {
    console.log('Switch Oktober');
    break;
  }
  case 11: {
    console.log('Switch November');
    break;
  }
  case 12: {
    console.log('Switch December');
    break;
  }
  default: {
    console.log('Not a valid month number');
    break;
  }
}

const number = 3;
let outcome = 0;

number <= 4 && number > 0 ? (outcome = 2) : (outcome = 5);
console.log(outcome);
