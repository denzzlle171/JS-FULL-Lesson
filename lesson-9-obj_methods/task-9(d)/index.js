function buildObject(keysList, valuesList) {
  newObject = {};
  for (let i = 0; i < keysList.length; i += 1) {
    newObject[keysList[i]] = valuesList[i];
  }
  return newObject;
}

examples;
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }

///////////////her poymi kak eto vyshlo////////////
// function buildObject(keysList, valuesList) {
//   let result = keys.reduce((o, k, i) => ({ ...o, [k]: values[i] }), {});
//   console.log(result);
//   return result;
// }
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values);
////////////////
