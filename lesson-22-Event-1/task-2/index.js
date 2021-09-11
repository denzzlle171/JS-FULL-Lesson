'use strict';
const inputElem = document.querySelector('.text-input');
const logToConsol = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', logToConsol);

// const buttonCr = document.querySelector('.create-btn');

// const showText = () => {
//   alert('done');
// };
// buttonCr.addEventListener('click', showText);
