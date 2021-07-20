let array = [2, 3, 4, 9, 11];

function squareArray(arr) {
  let squareArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let item of arr) {
    let square = item * item;
    squareArr.push(square);
  }
  return squareArr;
}
console.log(squareArray(array));
