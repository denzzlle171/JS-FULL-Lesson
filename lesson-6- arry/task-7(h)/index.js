let array = [2, 3, 4, 9, 11, 50, 70];

function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i];
    sum += item;
  }
  return sum > 100 ? true : false;
}
console.log(checkSum(array));
// checkSum(array);
