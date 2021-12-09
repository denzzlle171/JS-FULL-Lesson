/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (num) => {
  const prom = Promise.resolve(num);
  return prom;
};

makePromise(17).then((number) => {
  console.log(number); // 17
});

console.log(makePromise(17));
