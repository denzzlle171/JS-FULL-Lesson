// const amount = [7, 32.1234, 11.1, 17.3333, 9.999];

// function getTotalPrice(arr) {
//   const total = arr.reduce((acc, add) => acc + add);

//   const resultNamb = Math.floor(total * 100) / 100;

//   return `$${resultNamb}`;
// }
// // getTotalPrice(amount);

// console.log(getTotalPrice(amount));

function getRandomNumbeers(length, from, to) {
  if (to - from < 1) {
    return null;
  }
  let resultArray = [];
  for (let i = 0; i < length; i += 1) {
    let numb = Math.random() * (to - from) + from;
    resultArray.push(Math.round(numb));
  }

  return resultArray;
}

// getRandomNumbeers(7, 17, 17.4);
console.log(getRandomNumbeers(7, 2.5, 17.4));
