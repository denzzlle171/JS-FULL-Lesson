'use strict';
const OneClickBtn = document.querySelector('.single-use-btn');

const onePush = () => {
  console.log('clicked');
  turnOff();
};

OneClickBtn.addEventListener('click', onePush);

const turnOff = () => {
  return OneClickBtn.removeEventListener('click', onePush);
};
