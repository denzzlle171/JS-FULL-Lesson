const transformToObject = (arr) => {
  let obj = {};
  arr.forEach((element) => {
    obj[element] = element;
  });
  return obj;
};
// transformToObject(['a', 17.1, 'John Doe']);
console.log(transformToObject(['a', 17.1, 'John Doe']));
