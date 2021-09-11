'use strict';

//find for push
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
// function display action
const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px;">${text}</span>`;
};
//call function with some parameters (text, color)
const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');
// start Event on pushed element
divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);
///clear button
const clearBtn = document.querySelector('.clear-btn');
const cleaUp = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML = '';
};
clearBtn.addEventListener('click', cleaUp);

///remove-handlers button
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
const removeListen = () => {
  divElem.removeEventListener('click', logGreyDiv, { capture: true });
  divElem.removeEventListener('click', logGreenDiv);

  pElem.removeEventListener('click', logGreyP, true);
  pElem.removeEventListener('click', logGreenP);

  spanElem.removeEventListener('click', logGreySpan, true);
  spanElem.removeEventListener('click', logGreenSpan);
};
removeHandlersBtn.addEventListener('click', removeListen);

///add-handlers button
const addHandlersBtn = document.querySelector('.attach-handlers-btn');
const addListen = () => {
  divElem.addEventListener('click', logGreyDiv, true);
  divElem.addEventListener('click', logGreenDiv);

  pElem.addEventListener('click', logGreyP, true);
  pElem.addEventListener('click', logGreenP);

  spanElem.addEventListener('click', logGreySpan, true);
  spanElem.addEventListener('click', logGreenSpan);
};
addHandlersBtn.addEventListener('click', addListen);
