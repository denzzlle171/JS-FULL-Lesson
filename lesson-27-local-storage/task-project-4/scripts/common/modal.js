import { setItem } from '../common/storage.js';

const modalElem = document.querySelector('.modal');
// const modalContentElem = document.querySelector('.modal__content');
// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана
const createEvBtn = document.querySelector('.create-event-btn');
export const openModal = () => {
  modalElem.classList.toggle('hidden');
};
createEvBtn.addEventListener('click', openModal);

export const closeModal = () => {
  modalElem.classList.toggle('hidden');
};

///------------
/// event color
export const saveColorEvent = () => {
  const colorInput = document.querySelector('#color');
  const color = colorInput.value;
  // setItem('colorEve', color);
  return color;
};
// saveColorEvent();
// console.log(saveColorEvent());
