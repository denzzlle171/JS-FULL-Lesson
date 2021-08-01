// const calc = (expression) => {
//   const a = expression.split(' ');
//   let result;
//   switch (a[1]) {
//     case '+': {
//       result = Number(a[0]) + +a[2];
//       break;
//     }
//     case '-': {
//       result = a[0] - a[2];
//       break;
//     }
//     case '*': {
//       result = a[0] * a[2];
//       break;
//     }
//     case '/': {
//       result = a[0] / a[2];
//       break;
//     }
//   }
//   return `${expression} = ${result}`;
// };
// console.log(calc('1 + 2'));
///
///
///
///

const calc = (expression) => {
  const [a, operator, b] = expression.split(' ');
  let result;
  switch (operator) {
    case '+': {
      result = Number(a) + +b;
      break;
    }
    case '-': {
      result = a - b;
      break;
    }
    case '*': {
      result = a * b;
      break;
    }
    case '/': {
      result = a / b;
      break;
    }
  }
  return `${expression} = ${result}`;
};
console.log(calc('8 - 2'));
