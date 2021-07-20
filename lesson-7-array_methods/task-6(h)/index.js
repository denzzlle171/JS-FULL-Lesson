const numbArray = [2, 4, 8, 3, 9, 17];

const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let coppyArr = arr.slice();

  return coppyArr.reverse();
};
console.log(reverseArray(numbArray));
console.log(numbArray);
