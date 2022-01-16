// Imperative vs Declarative

// Imperative is telling the computer step by step what it needs to do
// For example how you write code in assembly where you tell the computer
// exactly which part of memory it needs to do something.

// The more higher level a programming language the more declarative it gets.

// This is MORE imperative than forEach
for (let i = 0; i < 3; i++) {
  console.log(i);
}

const valueArray = [1, 2, 3].forEach((item) => console.log(item));
