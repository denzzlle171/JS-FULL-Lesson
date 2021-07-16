let sum = 0;
for (let i = 1; i <= 1000; i += 1) {
  sum += i;
}
let residual = sum % 1234;
let whole = (sum - residual) / 1234;
whole > residual ? console.log('true') : console.log('false');
