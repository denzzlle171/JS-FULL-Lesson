////cool but dont anderstand//////

const removeDuplicates = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (!inArray(result, array[i])) {
      result.push(array[i]);
    }
  }

  return result;
};

function inArray(array, elem) {
  // console.log(elem);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === elem) {
      return true;
    }
  }
  return false;
}
console.log(removeDuplicates([4, 1, 4, 5, 7, 8, 7]));

//////Spred + set //////
let arr = [4, 1, 4, 5, 7, 8, 7];
/*
const removeDuplicates = (array) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let a = [...new Set(arr)];
  return a;
};
console.log(removeDuplicates(arr));
*/
////////////filter/////

let a2 = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});
console.log(a2);
