'use strict';

export const getTitle = () => {
  const textTitle = document.querySelector('.title').textContent;
  console.log(textTitle);
  return textTitle;
};
getTitle();

export const getDescription = () => {
  const textDesc = document.querySelector('.about').innerText;
  console.log(textDesc);
};
getDescription();

export const getPlants = () => {
  const textPlans = document.querySelector('.plans').innerHTML;
  console.log(textPlans);
};
getPlants();

export const getGoal = () => {
  const textGoal = document.querySelector('.goal').outerHTML;
  console.log(textGoal);
};
getGoal();
