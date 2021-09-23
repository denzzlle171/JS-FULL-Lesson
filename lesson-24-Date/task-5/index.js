const listElem = document.querySelector('.list');

let tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  let tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

// CheckBox
const changeStatus = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const indexIt = event.target.dataset.id;
  tasks[indexIt].done = !tasks[indexIt].done;
  reRenderingTask(tasks);
};
listElem.addEventListener('click', changeStatus);

//add task
const createButtom = document.querySelector('.create-task-btn');
const createInput = document.querySelector('.task-input');
const createNewTask = () => {
  const createText = createInput.value;
  tasks.map((elem) => {
    elem.data = new Date();
  });

  if (createText !== '') {
    tasks.push({ text: createText, done: false, data: new Date() });

    console.log(tasks);
  }

  createInput.value = '';
  reRenderingTask(tasks);
};

createButtom.addEventListener('click', createNewTask);

//update task list
const reRenderingTask = (arr) => {
  listElem.innerHTML = '';
  renderTasks(tasks);
};
