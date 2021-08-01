// const customers = {
//   'customer-id-1': { name: 'William', age: 54 },
//   'customer-id-2': { name: 'Tom', age: 17 },
// };

// const getCustomersList = (obj) => {
// let

//   const arr = Object.entries(obj);

//   arr.forEach((element) => {
//     element[1]['id'] = element[0];
//   });
//   const arrOfObject = arr.map((element) => element[1]);
//   // console.log(arrOfObject);

//   let resultArr = arrOfObject.sort((a, b) => a.age - b.age);

//   // console.log(resultArr);
//   return resultArr;
// };
// getCustomersList(customers);

const customers = {
  'customer-id-1': { name: 'William', age: 54 },
  'customer-id-2': { name: 'Tom', age: 17 },
};

const getCustomersList = (obj) => {
  // const coppyObject = Object.assign({}, obj);
  const coppyObject = JSON.parse(JSON.stringify(obj));

  const arr = Object.entries(coppyObject);
  arr.map((element) => (element[1]['id'] = element[0]));

  const arrOfObject = arr.map((element) => element[1]);

  let resultArr = arrOfObject.sort((a, b) => a.age - b.age);
  return resultArr;
};
console.log(getCustomersList(customers));
console.log(customers);
getCustomersList(customers);
