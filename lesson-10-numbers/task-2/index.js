const namders = [1.2, '4', 17, 'three', '11.234int', null, NaN];

function getParsedIntegers(arr) {
  const newArray = arr.map((element) => Number.parseInt(element));
  return newArray;
}
getParsedIntegers(namders);
console.log(getParsedIntegers(namders));

//---------------------- //

function getParsedIntegersV2(arr) {
  const newArray2 = arr.map((elem) => parseInt(elem));
  return newArray2;
}
getParsedIntegersV2(namders);
console.log(getParsedIntegersV2(namders));

//---------------------- //

function getParsedFloats(arr) {
  const newArray3 = arr.map((elem) => Number.parseFloat(elem));
  return newArray3;
}
getParsedFloats(namders);
console.log(getParsedFloats(namders));

//---------------------- //

function getParsedFloatsV2(arr) {
  const newArray4 = arr.map((ele) => parseFloat(ele));
  return newArray4;
}
getParsedFloatsV2(namders);
console.log(getParsedFloatsV2(namders));

console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);
