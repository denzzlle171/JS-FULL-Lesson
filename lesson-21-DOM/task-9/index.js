'use strict';

const finishList = () => {
  const elemenLi_1 = document.createElement('li');
  elemenLi_1.textContent = '1';
  const elemenLi_4 = document.createElement('li');
  elemenLi_4.textContent = '4';
  const elemenLi_6 = document.createElement('li');
  elemenLi_6.textContent = '6';
  const elemenLi_8 = document.createElement('li');
  elemenLi_8.textContent = '8';

  const elementMarker = document.querySelector('.special');
  const elemenList = document.querySelector('.list');
  elemenList.prepend(elemenLi_1);
  elementMarker.before(elemenLi_4);
  elementMarker.after(elemenLi_6);
  elemenList.append(elemenLi_8);
};

finishList();
// use strict';

// const createButton = (buttonText) => {
//   document.write('<body>');
//   const elementButton = document.createElement('button');
//   const elementBody = document.querySelector('body');
//   elementBody.append(elementButton);
//   elementButton.textContent = buttonText;
// };

// createButton('Send Email');
