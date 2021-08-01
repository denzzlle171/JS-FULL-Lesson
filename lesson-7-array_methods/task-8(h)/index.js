const array = [2, 4, 8, 3, 9, 17];

// const CloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let resultClone = [...arr];

//   return resultClone;
// };
// console.log(CloneArr(array));
// console.log(array);

const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sumOfArr = array.reduce((acc, elem) => acc + elem);
};
sum(array);
