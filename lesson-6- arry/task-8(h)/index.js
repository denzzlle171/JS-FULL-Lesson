let arr = [2, 5, 6, 8, 11, 9, 4];

const delta = 20;
let newArr = [];
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i];
    if (item % 2 === 0) {
      item += delta;
    }
    newArr.push(item);
  }
  return newArr;
};

console.log(increaseEvenEl(arr, delta));

//output
//[22, 5, 26, 28, 11, 9, 24]
