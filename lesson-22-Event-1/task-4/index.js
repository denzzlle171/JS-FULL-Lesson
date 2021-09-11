'use strict';
const chackboxElem = document.querySelector('.task-status');
const showStatus = () => {
  console.log(chackboxElem.checked);
};
chackboxElem.addEventListener('change', showStatus);
