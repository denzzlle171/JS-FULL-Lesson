// 'use strict';

// let massage = 'Just learn it';

// export function sendMessage(name) {
//   console.log(`${name}, ${massage}! Your Gromcode`);
// }

// export function setMessage(text) {
//   massage = text;
// }

// // sendMessage('Ann');

// // setMessage('Hello');

// // sendMessage('Ann');

let memory = 0;

export function add(numb) {
  memory = memory + numb;
}

export function decrease(numb) {
  memory = memory - numb;
}

export function reset() {
  memory = 0;
}
export function getMemo() {
  console.log(memory);
  return memory;
}

getMemo();
add(9);
getMemo();
decrease(12);
getMemo();
add(13);
getMemo();
