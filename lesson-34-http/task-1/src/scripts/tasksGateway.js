const baseUrl = 'https://61b61e94c95dd70017d40e50.mockapi.io/api/v1/tasks';

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, updateTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updateTaskData),
  });
};

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTasksList = () => {
  return fetch(baseUrl)
    .then((response) => response.json())
    .then(mapTasks);
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
