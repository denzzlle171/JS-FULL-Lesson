'use strict';

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};
const result = dayOfWeek(new Date(2019, 0, 11), 17);
// console.log(result);
console.log(result);
