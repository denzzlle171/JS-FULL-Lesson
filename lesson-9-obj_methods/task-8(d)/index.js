const transaction = { value: 170 };

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
console.log(addPropertyV1(transaction, 'currency', 'USD'));

//----------------------------------//
function addPropertyV2(obj, key, value) {
  Object.assign(obj, { [key]: value });
  return obj;
}
console.log(addPropertyV2(transaction, 'currency', 'USD'));

//----------------------------------//
function addPropertyV3(obj, key, value) {
  const newObj = Object.assign({}, obj, { [key]: value });
  return newObj;
}
console.log(addPropertyV3(transaction, 'currency', 'USD'));
//----------------------------------//

function addPropertyV4(obj, key, value) {
  const newObj1 = { ...obj, [key]: value };
  return newObj1;
}
console.log(addPropertyV4(transaction, 'currency', 'USD'));
