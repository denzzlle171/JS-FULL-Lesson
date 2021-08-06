'use strict';

let massage = 'Just learn it';

export function sendMessage(name) {
  console.log(`${name}, ${massage}! Your Gromcode`);
}

export function setMessage(text) {
  massage = text;
}

// sendMessage('Ann');

// setMessage('Hello');

// sendMessage('Ann');
