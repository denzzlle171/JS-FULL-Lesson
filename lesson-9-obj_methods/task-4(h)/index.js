// //////////////clone with spred//////////////////

// const objectPlayers = { 'John Doe': 19, Tom: 17, Bob: 18 };

// const copyObj = (obj) => {
//   let clonObj = { ...obj };

//   return clonObj;
// };

// console.log(copyObj(objectPlayers));

// /////////////////clone with   Object.assign/////////////////

// const copyObj = Object.assign({}, objectPlayers);
// copyObj.Anna = 22;
// console.log(copyObj);
// console.log(objectPlayers);
////////////////////////////////////////

const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  // console.log(userData);
  return userData;
}
addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
///

//
function addPropertyV2(userData, userId) {
  Object.assign(userData, { id: userId });
  // console.log(userData);
  return userData;
}
addPropertyV2(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
//

//
function addPropertyV3(userData, userId) {
  const newObj = Object.assign({}, userData, { id: userId });
  // console.log(userData);
  // console.log(newObj);
  return newObj;
}
addPropertyV3(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }

//
function addPropertyV4(userData, userId) {
  const newObj2 = { ...userData, id: userId };
  // console.log(newObj2);
  return newObj2;
}
addPropertyV4(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
