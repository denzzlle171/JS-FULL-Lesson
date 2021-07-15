const m = 10;
const n = 20;
let j = m
let result = 1;

do {
  if (j % 2 === 1) {
    result *= j;
  }
  j ++;
  
} while (j < n);

console.log(result);