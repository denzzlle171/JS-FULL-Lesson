// const countOccurrences = (text = '', str) => {
//   let startPosition = 0;
//   let count = 0;
//   if (str === '') {
//     return null;
//   }

//   for (let i = 0; i < text.length; i += 1) {
//     let index = text.indexOf(str, startPosition);

//     if (index !== -1) {
//       count += 1;

//       startPosition += index + 1;

//       console.log(startPosition);
//     }
//   }
//   return count;
// };

// console.log(countOccurrences('exe file exe is exelent exe       exe', 'exe'));
/*
 ЗАДАЧА ВЫШЕ, в задаче прошла тес,т но показивает не верный ре-тат
 в консоле, не найден одино из значений в результате накопленя (1) 
в startPosition += index + 1;),ЗАДАЧА НИЖЕ ПОЛНОСТЬЮ ВАЛИДНА*/

const countOccurrences = (text = '', str) => {
  let startPosition = 0;
  let count = 0;
  if (str === '') {
    return null;
  }
  for (let i = 0; i < text.length; i += 1) {
    let index = text.indexOf(str, startPosition);
    if (index !== -1) {
      count += 1;
      startPosition = index + 1;
    }
  }
  return count;
};

console.log(countOccurrences('exe file exe is exelent exe       exe', 'exe'));
