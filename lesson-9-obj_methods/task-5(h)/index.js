const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};
/////////
///////
/////
function mergeObjectsV1(obj1, obj2) {
  let resultObj1 = Object.assign({}, obj1, obj2);
  console.log(resultObj1);
  return resultObj1;
}

function mergeObjectsV2(obj1, obj2) {
  let resultObj2 = Object.assign({}, obj2, obj1);
  console.log(resultObj2);
  return resultObj2;
}

function mergeObjectsV3(obj1, obj2) {
  let resultObj3 = { ...obj1, ...obj2 };
  console.log(resultObj3);
  return resultObj3;
}

function mergeObjectsV4(obj1, obj2) {
  let resultObj4 = { ...obj2, ...obj1 };
  console.log(resultObj4);
  return resultObj4;
}
mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

// console.log(obj1);
// console.log(obj2);
