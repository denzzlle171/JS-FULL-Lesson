let arr = [4, 1, 4, 5, 7, 8, 7];

function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let a = [...new Set(arr)];
  return a.length;
}

// return ;

console.log(uniqueCount(arr));
// uniqueCount(arr);
