// 'use strict';

export const getTitle = () => {
  const textTitle = document.querySelector('.title');
  console.log(textTitle.textContent);
  return textTitle.textContent;
};
getTitle();

export const getDescription = () => {
  const textDesc = document.querySelector('.about');
  console.log(textDesc.innerText);
  return textDesc.innerText;
};

getDescription();

export const getPlants = () => {
  const textPlans = document.querySelector('.plans');
  console.log(textPlans.innerHTML);
  return textPlans.innerHTML;
};
getPlants();

export const getGoal = () => {
  const textGoal = document.querySelector('.goal');
  console.log(textGoal.outerHTML);
  return textGoal.outerHTML;
};
getGoal();
