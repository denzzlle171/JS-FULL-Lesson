let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  if (i % 2 === 1) {
    console.log('Found');
    sum += i;
  }
}
sum * 5 >= 5000 ? console.log('Bigger') : console.log('Smaller or equal');
