import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

// export const onListClick = (e) => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');
//   const isDeleteBtn = e.target.classList.contains('delete-btn');

//   if (isCheckbox) {
//     onToggleTask;
//   }

// if (isDeleteBtn) {
//     onToggleTask;
//   }

//   console.log(isCheckbox);
//   console.log(isDeleteBtn);
// };

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createdDate } = tasksList.find((task) => task.id === taskId);
  const done = e.target.checked;

  const updatedTask = {
    text,
    createdDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
/////

export const onDeleteTask = (e) => {
  const isDeleteBtn = e.target.classList.contains('delete-btn');

  if (!isDeleteBtn) {
    return;
  }

  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

//-----------------------------------
// const onToggleTask = (e) => {
//   const isCheckbox = e.target.classList.contains('list__item-checkbox');

//   if (!isCheckbox) {
//     return;
//   }

//   const taskId = e.target.dataset.id;
//   const tasksList = getItem('tasksList');
//   const { text, createdDate } = tasksList.find((task) => task.id === taskId);
//   const done = e.target.checked;

//   const updatedTask = {
//     text,
//     createdDate,
//     done,
//     finishDate: done ? new Date().toISOString() : null,
//   };

//   updateTask(taskId, updatedTask)
//     .then(() => getTasksList())
//     .then((newTasksList) => {
//       setItem('tasksList', newTasksList);
//       renderTasks();
//     });
// };
