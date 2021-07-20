let arr = [2, 5, 6, 8, 11, 999, 4];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  for (let i = 1; i <= arr.length; i += 1) {
    if (arr[i] < arr[0]) {
      arr[0] = arr[i];
    }
  }
  let min = arr[0];

  for (let j = 1; j <= arr.length; j += 1) {
    if (arr[j] > arr[0]) {
      arr[0] = arr[j];
    }
  }
  let max = arr[0];

  return max + min > 1000 ? true : false;
}

console.log(checker(arr));

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
