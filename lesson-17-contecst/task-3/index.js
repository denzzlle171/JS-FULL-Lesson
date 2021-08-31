// defer(func,ms) => Function
// function defer(func, ms) {
//   return function () {
//     setTimeout(func, ms);
//   };
// }

// const sayHi = () => {
//   console.log('Hi');
// };

// const deferredSayHi = defer(sayHi, 1000);
// deferredSayHi();

export function defer(func, ms) {
  return function () {
    setTimeout(() => func.call(this, ...arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'am ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);
deferredHi.call({ name: 'Bob' });
