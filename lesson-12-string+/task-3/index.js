// let array = ['  1.9', '16.4', 17, ' 1 dollar '];

// const cleanTransactionsList = (arr) => {
//   let newArr = arr.map((element) => {
//     return `$${Number.parseFloat(element).toFixed(2)}`;
//   });
//   return newArr;
// };
// cleanTransactionsList(array);
// // console.log(cleanTransactionsList(array));
//
//
//
let array = ['  1.9', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = (arr) => {
  let newArr = arr.map((element) => Number(element));
  let temporalArr = newArr.filter((element) => !Number.isNaN(element));
  let resultArr = temporalArr.map((element) => `$${element.toFixed(2)}`);
  console.log(resultArr);
  return resultArr;
};
cleanTransactionsList(array);
