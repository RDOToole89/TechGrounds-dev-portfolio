// Idempotence => In programming and mathematics a property of some operations such
// that no matter how many times you execute them, you achieve the same result.
// EXAMPLE: GET requests are idempotent: Accessing the same data should always be consistent.
// The function is 100% predictable given the some input

function notImpodent(num) {
  return Math.random() * num;
}

console.log(notImpodent(10));
