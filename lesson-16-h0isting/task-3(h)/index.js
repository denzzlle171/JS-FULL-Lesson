let arr = [];
export function createArrayOfFunctions(num = 'empty') {
  if (num == 'empty') {
    return [];
  }

  if (!Number.isInteger(num)) {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr);
  return arr;
}
createArrayOfFunctions();
// console.log(createArrayOfFunctions()[8]());
