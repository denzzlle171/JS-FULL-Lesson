function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d);
}

function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i += 1) {
    sum += 1;
  }
  return sum;
}

console.log(compareSums(11, 20, 1, 3));
