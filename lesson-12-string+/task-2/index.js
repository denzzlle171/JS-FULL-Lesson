const reverseString = (string) => {
  if (typeof string !== 'string') {
    return null;
  }

  let temporalArr = string.split('');
  let newString = temporalArr.reverse().join('');
  return newString;
};
// reverseString('hello friends');
console.log(reverseString('hello friends'));
