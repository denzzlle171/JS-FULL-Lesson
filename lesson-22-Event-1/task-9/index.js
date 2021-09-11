'use strict';

const collect = [...document.querySelectorAll('.pagination__page')];

const logToConsol = (event) => {
  console.log(event.target.dataset['pageNumber']);
};

collect.forEach((el) => {
  el.addEventListener('click', logToConsol);
});

// const checkbox = document.querySelector('.task-status');

// const logStatus = (event) => {
//   console.log(event.target.checked);
// };
// checkbox.addEventListener('change', logStatus);

// const logToConsol = (event) => {
//   console.log(event.target.value);
// };
// const inputEl = document.querySelector('.text-input');
// inputEl.addEventListener('change', logToConsol);
