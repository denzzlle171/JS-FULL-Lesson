let arr = [2, 5, 6, 8, 11, 9, 4];

// const cloneArr = (arr) => {
//   let cloneArray = [];
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   for (let i = 1; i <= arr.length; i += 1) {
//     cloneArray[i - 1] = arr[i - 1];
//   }
//   return cloneArray;
// };
// console.log(cloneArr(arr));
// // reverseArray(arr);

const cloneArr = (arr) => {
  let cloneArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i];

    cloneArray.push(item);
  }
  return cloneArray;
};
console.log(cloneArr(arr));
