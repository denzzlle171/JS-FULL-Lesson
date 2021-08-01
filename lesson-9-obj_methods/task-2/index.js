//////////////clone with spred//////////////////

const objectPlayers = { 'John Doe': 19, Tom: 17, Bob: 18 };

const copyObj = (obj) => {
  let clonObj = { ...obj };

  return clonObj;
};

console.log(copyObj(objectPlayers));

/////////////////clone with   Object.assign/////////////////

const copyObj = Object.assign({}, objectPlayers);
copyObj.Anna = 22;
console.log(copyObj);
console.log(objectPlayers);
