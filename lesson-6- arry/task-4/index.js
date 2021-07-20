let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function swap(arr) {
  const [a, ...rest] = arr;
  return [...rest, a];
}
console.log(swap(arry));
