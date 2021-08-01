const array = [2, 5, 8, 6, 9];

const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let sum = arr.reduce((acc, elem) => acc + elem);
  return sum / arr.length;
};
console.log(arrAverage(array));
