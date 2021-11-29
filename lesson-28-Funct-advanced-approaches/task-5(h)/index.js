const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

const shmoment = (date) => {
  let result = new Date(date);

  const calculator = {
    add(units, value) {
      const currentUnitValue = result[getMethodsNames[units]]();
      result = new Date(
        result[setMethodsNames[units]](currentUnitValue + value)
      );
      return this;
    },

    subtract(units, value) {
      // const currentUnitValue = result[getMethodsNames[units]]();
      // result = new Date(
      //   result[setMethodsNames[units]](currentUnitValue - value)
      // );
      // return this;
      return this.add(units, -value); // -- переиспользуем add c (-value)
    },

    result() {
      return result;
    },
  };

  return calculator;
};

// export default shmoment;

const fank = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .subtract('years', 17)
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();

console.log(fank);
