import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkdoxElem = document.createElement('input');
  checkdoxElem.setAttribute('type', 'checkbox');
  checkdoxElem.setAttribute('data-id', id);
  checkdoxElem.checked = done;
  checkdoxElem.classList.add('list__item-checkbox');
  return checkdoxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = createCheckbox({ done, id });

  if (done) {
    listItemElem.classList.add('list__item-done');
  }

  const textElem = document.createElement('span');
  textElem.classList.add('text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('delete-btn');
  deleteBtnElem.setAttribute('data-id', id);

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  tasksList
    .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
    .sort((a, b) => a.done - b.done);

  listElem.innerHTML = '';
  const tasksElems = tasksList.map(createListItem);

  listElem.append(...tasksElems);
};
