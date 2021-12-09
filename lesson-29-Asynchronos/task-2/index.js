'use strict';

export const pinger = (num, period) => {
  let i = num;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};
// setTimeout(() => {
//   clearInterval(interval);
// }, num * period);
// examples
pinger(5, 1000); // makes 5 writes with 100 ms interval
// pinger(7, 150); // makes 7 writes with 1500 ms interval
