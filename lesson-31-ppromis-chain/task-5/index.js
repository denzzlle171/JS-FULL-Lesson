const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

delay(3000).then(() => console.log('Done'));

// *--long version With variable--*
// const delay = (ms) => {
//   const delayPr = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
//   return delayPr;
// };

// delay(3000).then(() => console.log('Done'));
