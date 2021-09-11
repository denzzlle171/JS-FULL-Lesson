'use strict';

const searchBtn = document.querySelector('.search__btn');
const searcInput = document.querySelector('.search__input');

const logToConsol = () => {
  console.log(searcInput.value);
};

searchBtn.addEventListener('click', logToConsol);
// const chackboxElem = document.querySelector('.task-status');
// const showStatus = () => {
//   console.log(chackboxElem.checked);
// };
// chackboxElem.addEventListener('change', showStatus);
