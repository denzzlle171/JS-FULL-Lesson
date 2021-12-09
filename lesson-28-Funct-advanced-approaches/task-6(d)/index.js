// const maxFibonacci = (n) => {
//   const arrFibonfcci = [0, 1];

//   for (i = 3; i <= n; i += 1) {
//     const now = arrFibonfcci[arrFibonfcci.length - 1];
//     const prev = arrFibonfcci[arrFibonfcci.length - 2];
//     next = prev + now;

//     if (next > n) {
//       break;
//     }
//     arrFibonfcci.push(next);
//   }

//   return arrFibonfcci[arrFibonfcci.length - 1];
// };
// console.log(maxFibonacci(0));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

const nextFibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return nextFibonacci(n - 1) + nextFibonacci(n - 2);
};

const maxFibonacci = (n) => {
  let fib = 0;
  let index = 0;
  while (true) {
    const nextFib = nextFibonacci(index);
    if (nextFib > n) {
      break;
    }

    fib = nextFib;
    index += 1;
  }
  return fib;
};
console.log(maxFibonacci(9));
