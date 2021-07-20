let array = [1, 4, 8, 5, 16, 21, 10, 7];

const getSubArray = (arr, numberOfElements) => {
  let newArr = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    newArr[i] = arr[i];
  }
  return newArr;
};
console.log(getSubArray(array, 2));
