import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleImputElem = document.querySelector('.task-input');
  const text = taskTitleImputElem.value;

  if (!text) {
    return;
  }
  taskTitleImputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};
