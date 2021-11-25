// const sum = (a, b) => a + b;
///
const sum = (a) => (b) => a + b;

const add3 = sum(3);

const result = add3(5);

console.log(result);
//////
//////
const mult = (a) => (b) => a - b;

const twice = mult(9);

const triple = mult(9);

console.log(triple(33), twice(9));
