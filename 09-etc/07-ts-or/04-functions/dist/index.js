"use strict";
// function typing
const log = (message, userId) => {
    let time = new Date().toISOString();
    console.log(time, message, userId || 'not signed in');
};
log('User click a button');
function sum(numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum([1, 2, 3, 4, 5]));
//# sourceMappingURL=index.js.map