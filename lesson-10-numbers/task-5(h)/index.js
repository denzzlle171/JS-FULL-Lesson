const amount = [7, 32.1234, 11.1, 17.3333, 9.999];

function getTotalPrice(arr) {
  const total = arr.reduce((acc, add) => acc + add);

  const resultNamb = Math.floor(total * 100) / 100;

  return `$${resultNamb}`;
}
// getTotalPrice(amount);

console.log(getTotalPrice(amount));
