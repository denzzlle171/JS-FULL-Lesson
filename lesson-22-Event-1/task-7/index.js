'use strict';

const logToConsol = (event) => {
  console.log(event.target.value);
};
const inputEl = document.querySelector('.text-input');
inputEl.addEventListener('change', logToConsol);

// const firstBtn = document.querySelector('.btn');
// const secondBtn = firstBtn.nextElementSibling;

// const handleClick = (event) => {
//   console.log(event.target.textContent);
// };

// firstBtn.addEventListener('click', handleClick);
// secondBtn.addEventListener('click', handleClick);
