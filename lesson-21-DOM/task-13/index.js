'use strict';

const getSection = (num) => {
  const findingElement = document.querySelector(`span[data-number="${num}"]`);
  findingElement.parentElement.getAttribute;

  // return findingElement.parentElement.dataset['section'];
};
getSection(5);
