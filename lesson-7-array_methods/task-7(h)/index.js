// const array = [2, 4, 8, 3, 9, 17];
// const del = 20;

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let result = arr.map(eve);

//   function eve(element) {
//     if (element % 2 === 0) {
//       element = element + delta;
//     }
//     return element;
//   }

//   return result;
// };

// console.log(increaseEvenEl(array, del));

const array = [2, 4, 8, 3, 9, 17];
const del = 20;

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  let result = arr.map(
    (eve = (element) => {
      if (element % 2 === 0) {
        element = element + delta;
      }
      return element;
    })
  );

  return result;
};

console.log(increaseEvenEl(array, del));
