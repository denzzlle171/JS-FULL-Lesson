// function superRound(number, precision) {
//   let deepOfRound = Math.pow(10, Math.abs(precision));
//   console.log(deepOfRound);
//   const array = [
//     Math.floor(number * deepOfRound) / deepOfRound,
//     Math.ceil(number * deepOfRound) / deepOfRound,
//     Math.round(number * deepOfRound) / deepOfRound,
//     Math.trunc(number * deepOfRound) / deepOfRound,
//     Number(number.toFixed(Math.abs(precision))),
//   ];
//   return array;
// }

// console.log(superRound(-17.173339534, -4));

//.....

// function superRound(number, precision) {
//   let deepOfRound = Math.pow(10, precision).toFixed(Math.abs(precision));
//   console.log(deepOfRound);

//   const array = [
//     Math.floor(number * deepOfRound) / deepOfRound,
//     Math.ceil(number * deepOfRound) / deepOfRound,
//     Math.round(number * deepOfRound) / deepOfRound,
//     Math.trunc(number * deepOfRound) / deepOfRound,
//     Number(number.toFixed(Math.abs(precision))),
//   ];
//   return array;
// }

///!!!!??////
function superRound(number, prec) {
  let precision = Math.pow(10, prec);

  const array = [
    Math.floor(number * precision) / precision,
    Math.round(number * precision) / precision,
    Math.ceil(number * precision) / precision,
    Math.trunc(number * precision) / precision,
    +number.toFixed(prec),
  ];
  return array;
}

console.log(superRound(-17.55555555, 4));
