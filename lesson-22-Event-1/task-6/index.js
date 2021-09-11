'use strict';

const firstBtn = document.querySelector('.btn');
const secondBtn = firstBtn.nextElementSibling;

const handleClick = (event) => {
  console.log(event.target.textContent);
};

firstBtn.addEventListener('click', handleClick);
secondBtn.addEventListener('click', handleClick);

// const OneClickBtn = document.querySelector('.single-use-btn');

// const onePush = () => {
//   console.log('clicked');
//   turnOff();
// };

// OneClickBtn.addEventListener('click', onePush);

// const turnOff = () => {
//   return OneClickBtn.removeEventListener('click', onePush);
// };
