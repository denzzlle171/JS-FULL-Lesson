localStorage.setItem('events', JSON.stringify([]));
localStorage.setItem('eventIdToDelete', null);
localStorage.setItem('displayedWeekStart', null);

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  // ф-ция должна возвращать по ключу значения из объекта storage
  JSON.parse(localStorage.getItem(key));
};
