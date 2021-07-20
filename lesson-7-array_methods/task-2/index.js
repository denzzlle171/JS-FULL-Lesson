const sortDesc = (numbers) => {
  const coppy = numbers.slice();

  coppy.sort((a, b) => (a < b ? 1 : -1));

  return coppy;
};

const arr = [11, 12, 2, 77, 3, 42, 8, 6, 7, 9];
console.log(sortDesc(arr));
console.log(arr);
