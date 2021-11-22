localStorage.setItem('events', JSON.stringify([]));
localStorage.setItem('eventIdToDelete', JSON.stringify(null));
localStorage.setItem('displayedWeekStart', JSON.stringify(null));

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  // ф-ция должна возвращать по ключу значения из объекта storage
  return JSON.parse(localStorage.getItem(key));
};
