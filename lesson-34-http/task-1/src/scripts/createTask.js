import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleImputElem = document.querySelector('.task-input');
  const text = taskTitleImputElem.value;

  if (!text) {
    return;
  }
  taskTitleImputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

//1 prepare data
//2 write data to db
//3 reed new data from server
//4 save new date to front-end storage
//5 update UI based on new data
