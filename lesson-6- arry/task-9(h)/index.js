let arr = [2, 5, 6, 8, 11, 9, 4];

const reverseArray = (arr) => {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 1; i <= arr.length; i += 1) {
    newArr[i - 1] = arr[arr.length - i];
  }
  return newArr;
};
console.log(reverseArray(arr));
// reverseArray(arr);
