export const createCalculator = () => {
  let memory = 0;

  function add(numb) {
    memory = memory + numb;
  }

  function decrease(numb) {
    memory = memory - numb;
  }

  function reset() {
    memory = 0;
  }
  function getMemo() {
    console.log(memory);
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
//export
let calc1 = createCalculator();
let calc2 = createCalculator();

calc1.getMemo();
calc1.add(9);
calc1.getMemo();
calc1.decrease(12);
calc1.getMemo();
calc1.add(13);
calc1.getMemo();

calc2.getMemo();
calc2.add(16);
calc2.getMemo();
calc2.decrease(12);
calc2.getMemo();
calc2.add(13);
calc2.getMemo();
