const namb = [1.2, '4', 17, 'three', '11int', null, NaN];

function getFiniteNumbers(arr) {
  const newArray = arr.filter((element) => Number.isFinite(element));
  return newArray;
}
getFiniteNumbers(namb);
console.log(getFiniteNumbers(namb));
// console.log(namb);

//---------------------- //

function getFiniteNumbersV2(arr) {
  const newArray2 = arr.filter((elem) => isFinite(elem));
  return newArray2;
}
getFiniteNumbersV2(namb);

console.log(getFiniteNumbersV2(namb));

//---------------------- //

function getNaN(arr) {
  const newArray3 = arr.filter((ele) => Number.isNaN(ele));
  return newArray3;
}
getNaN(namb);

console.log(getNaN(namb));

//---------------------- //

function getNaNV2(arr) {
  const newArray4 = arr.filter((el) => isNaN(el));
  return newArray4;
}
getNaNV2(namb);

console.log(getNaNV2(namb));

//---------------------- //

function getIntegers(arr) {
  const newArray5 = arr.filter((e) => Number.isInteger(e));
  return newArray5;
}
getIntegers(namb);

console.log(getIntegers(namb));

//---------------------- //
console.log(Number.isNaN === isNaN);
console.log(Number.isFinite === isFinite);
