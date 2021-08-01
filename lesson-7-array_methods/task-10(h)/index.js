const array = [2, 4, 8, -3, 9, 17];

const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return array.reduce((acc, elem) => acc + elem);
};
console.log(sum(array));
