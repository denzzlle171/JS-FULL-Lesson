'use strict';

localStorage.setItem('name', 'den');
localStorage.setItem('number', JSON.stringify(17));
localStorage.setItem('null', JSON.stringify(null));
localStorage.setItem('request', false);
localStorage.setItem('adres', JSON.stringify({ adres: 'h1d3' }));
localStorage.setItem('hobies', JSON.stringify([1, 2, 3]));

export const getlocalStorageDate = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch {
      newValue = value;
    }

    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getlocalStorageDate());
