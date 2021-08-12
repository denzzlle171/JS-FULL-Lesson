// export
const createLogger = () => {
  let memory = [];

  function warn(string) {
    let wrnObj = {
      message: string,
      dateTime: new Date(),
      type: 'warn',
    };
    memory.push(wrnObj);
  }
  function error(string) {
    let errObj = {
      message: string,
      dateTime: new Date(),
      type: 'error',
    };
    memory.push(errObj);
  }
  function log(string) {
    let logObj = {
      message: string,
      dateTime: new Date(),
      type: 'log',
    };
    memory.push(logObj);
  }

  function getRecords(typeOf = 'fullMemory') {
    if (typeOf !== 'fullMemory') {
      let getmemory = memory.filter((element) => {
        if (element.type == typeOf) {
          return element;
        }
      });
      return getmemory.sort((a, b) => b.dateTime - a.dateTime);
    } else {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  return { warn, error, log, getRecords };
};
const loger = createLogger();
loger.log('User logged in');
loger.warn('User try to restricted page');
loger.log('User logged out');
loger.error('Unexpected error on the site');
// loger.getRecords('log');
// loger.getRecords('warn');
// loger.getRecords();
// console.log(loger.getRecords());
console.log(loger.getRecords('warn'));
console.log(loger.getRecords('log'));
console.log(loger.getRecords());
//
//
//
//
//
//
// memory.sort(function (a, b) {
//   return b.dateTime - a.dateTime;
// });

// function getRecords(type = 'fullMemory') {
//   if (type === 'fullMemory') {
//     return memory.sort((a, b) => b.dateTime - a.dateTime);
//   }
//   if (type === 'warn' || 'error' || 'log') {
//     let getmemory = memory.filter((element) => {
//       if (element.tupe == type) {
//         return element;
//       }
//     });
//     return getmemory.sort((a, b) => b.dateTime - a.dateTime);
//   }
// }
