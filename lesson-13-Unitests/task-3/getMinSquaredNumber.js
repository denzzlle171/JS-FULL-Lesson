let array = [-777, 3, -2, 6, 45, -20];
let a = 'string';
let b = [];

export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  let absArray = arr.map((element) => Math.abs(element));
  const absMin = Math.min(...absArray);

  return Math.pow(absMin, 2);
};
////
//
//
// //
// //
// //

// let array = [-777, 3, -2, 6, 45, -20];
// let a = 'set';
// let b = [];

// const getMinSquaredNumber = (arr) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//     return null;
//   }

//   let absArray = arr.map((element) => Math.abs(element));
//   const absMin = Math.min(...absArray);
//   return Math.pow(absMin, 2);
// };
// // getMinSquaredNumber(array);
// console.log(getMinSquaredNumber(array));
