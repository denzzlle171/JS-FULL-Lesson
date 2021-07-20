const getSpecialNumbers = (numbers) => {
  return numbers.filter((num) => num % 3 === 0);
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(arr));

/////////////// forEach

/*
const getSpecialNumbers = (numbers) => {
  let specialNumbers = [];

  numbers.forEach((num) => {
    if (num % 3 === 0) {
      specialNumbers.push(num);
    }
  });

  return specialNumbers;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(arr));*/

//////////////// regular

/*const getSpecialNumbers = (numders) => {
  let specialNumbers = [];

  for (let i = 0; i < numders.length; i += 1) {
    if (numders[i] % 3 === 0) {
      specialNumbers.push(numders[i]);
    }
  }
  return specialNumbers;
};

const arr = [1, 2, 3, 4, 5, 6];
console.log(getSpecialNumbers(arr));*/
