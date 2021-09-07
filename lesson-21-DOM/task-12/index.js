'use strict';

const squaredNumbers = () => {
  const element_1 = document.querySelector('.number');
  const elemValue_1 = element_1.dataset['number'];
  console.log(elemValue_1);
  element_1.dataset.squaredNumber = Math.pow(elemValue_1, 2);

  const element_2 = element_1.nextElementSibling;
  const elemValue_2 = element_2.dataset['number'];
  console.log(elemValue_2);
  element_2.dataset.squaredNumber = Math.pow(elemValue_2, 2);

  // const element_3 = element_2.nextElementSibling;
  // const elemValue_3 = element_3.dataset['number'];
  // console.log(elemValue_3);
  // element_3.dataset.squaredNumber = Math.pow(elemValue_3, 2);

  const element = document.querySelector('.list');
  const elementChild = element.querySelector(':nth-child(3)');
  console.log(elementChild);
};
squaredNumbers();
