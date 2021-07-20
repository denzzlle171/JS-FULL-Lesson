const flatArray = (arr) => {
  const flatArray = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);

  return flatArray.sort((a, b) => (a > b ? 1 : -1));
};
const initArray = [1, [7, 2, 3], 5, [6]];
console.log(flatArray(initArray));
