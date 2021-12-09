// const p = new Promise();

// const resolvedPromis = Promise.resolve(17);

// const resolvedPromis2 = new Promise((resolve) => {
//   resolve(17);
// });

// const rejectedPromis = Promise.rejected(17);

// const rejectedPromis2 = new Promise((resolve, rejected) => {
//   rejected(17);
// });

const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumb1 = getValueWithDelay(56, 1000);
const asyncNumb2 = getValueWithDelay(undefined, 2000);
const asyncNumb3 = getValueWithDelay('10', 2000);

const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asyncNumb1, Promise.reject(new Error('err')), asyncNumb3).then(
  (result) => console.log(result)
);
