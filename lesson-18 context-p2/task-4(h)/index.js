'use strict';

function saveCalls(func) {
  let calls = [];

  function withMemory(...arg) {
    calls.push(arg);

    return func.apply(this, arg);
  }
  withMemory.calls = calls;

  return withMemory;
}

function test(a, b) {
  return a + b;
}

const testwithMemory = saveCalls(test);

testwithMemory(4, 2);
testwithMemory(9, 1);
testwithMemory(5, 7);

const user = {
  name: 'john',
  sayHi() {
    return this.name;
  },
};
const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: 'Tom' });
methodWithMemory.calls;
