const m = 2;
const n = 20;
let numb = m - 1;
const length = n - m;
let result = 0;

for (let i = 0; i <= length; i += 1) {
  let number = (numb += 1);

  if (number % 2 === 0 && number % 4 !== 0 && number % 5 !== 0) {
    result = result + number;
  } else if (number % 3 === 0 && number % 5 !== 0) {
    result = result - number;
  } else if (number % 4 === 0 && number % 5 !== 0) {
    result = result * number;
  } else if (number % 5 === 0) {
    console.log(number);
  }
}
console.log(result);
