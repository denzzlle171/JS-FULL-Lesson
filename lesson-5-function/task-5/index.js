function getSum(numb, lastNumb) {
  let sum = 0;
  for (; numb <= lastNumb; numb += 1) {
    if (numb % 2 === 0) {
      sum += numb;
    }
  }
  return sum;
}

console.log(getSum(1, 10));
