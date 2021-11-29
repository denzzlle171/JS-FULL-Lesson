const buttonElem = document.querySelector('#button');
buttonElem.addEventListener('click', () => console.log('click'));

let sum = 0;
const startTime = new Date();
console.log('Cycle started');

for (let i = 0; i < 1e9; i++) {
  sum += i;
}

const endTime = new Date();
console.log(`Cycle took ${endTime - startTime}ms`);
