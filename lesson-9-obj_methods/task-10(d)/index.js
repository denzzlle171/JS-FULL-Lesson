// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

function compareObjects(obj1, obj2) {
  let arrKey1 = Object.keys(obj1);
  // console.log(arrKey1);

  let arrVal1 = Object.values(obj1);
  // console.log(arrVal1);

  let arrKey2 = Object.keys(obj2);
  // console.log(arrKey2);

  let arrVal2 = Object.values(obj2);
  // console.log(arrVal2);

  if (arrVal1.length !== arrVal2.length) {
    return false;
  }

  for (let i = 0; i < arrVal1.length; i += 1) {
    if (arrVal1[i] !== arrVal2[i]) {
      // console.log(false);
      return false;
    }
    if (arrKey1[i] !== arrKey2[i]) {
      // console.log(false);
      return false;
    }
  }

  return true;
}

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true

// console.log(compareObjects(obj1, obj2));
// console.log(compareObjects(obj1, obj4));
console.log(compareObjects(obj2, obj3));
