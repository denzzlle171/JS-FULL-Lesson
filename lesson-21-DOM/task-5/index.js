'use strict';

export const setTitle = (text) => {
  const textTitle = document.querySelector('.title');
  textTitle.textContent = text;

  console.log(textTitle);
};
setTitle('text');
