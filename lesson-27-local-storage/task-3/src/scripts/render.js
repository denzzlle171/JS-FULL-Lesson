import { getItem } from './storage';

const createCheckbox = ({ done, id }) => {
  const checkdoxElem = document.createElement('input');
  checkdoxElem.setAttribute('tupe', 'checkbox');
  checkdoxElem.setAttribute('data-id', id);
  checkdoxElem.checked = done;
  checkdoxElem.classList.add('list__item-checkbox');
  return checkdoxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = createCheckbox({ text, done, id });

  if (done) {
    listItemElem.classList.add('list__item-done');
  }
  listItemElem.append('checkdoxElem', text);
  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';

  const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};
