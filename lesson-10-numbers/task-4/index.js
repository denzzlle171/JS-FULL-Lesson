// const array = [-99, 14, 2, -6, 77]

// const getMaxAbsoluteNumber = (arr) => {
//   let max = -Infinity;

//   arr.forEach(element => {
//     if (Math.abs(element) > max) {
//       max = Math.abs(element)
//     }
//   })
//   return max;
// }
// console.log(getMaxAbsoluteNumber(array))

const array = [-99, 14, 2, -6, 77];
// jast check// let array = 5;
// jast check// let array = [];
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length == 0) {
    return null;
  }

  const absoluteValues = arr.map((num) => Math.abs(num));
  const max = Math.max(...absoluteValues);

  return max;
};
console.log(getMaxAbsoluteNumber(array));

//1 -get absolute Values
//2 -find max
