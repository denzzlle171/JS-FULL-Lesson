const numbArray = [2, 4, 8, 3, 9, 17];

const squareArray = (numbArray) => {
  if (!Array.isArray(numbArray)) {
    return null;
  }
  return numbArray.map((elemtnt) => elemtnt * elemtnt);
};

console.log(squareArray(numbArray));
console.log(numbArray);
