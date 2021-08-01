let rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],

  room2: [{ name: 'Dan' }],

  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

// let rooms = {};

const getPeople = (obj) => {
  let resultarr = [];

  if (Object.keys(obj).length == 0) {
    return [];
  } else {
    let roomsArray = Object.values(obj);

    let peopleArray = roomsArray.reduce((acc, el) => acc.concat(el));

    resultarr = peopleArray.map((element) => Object.values(element));

    let peoples = resultarr.reduce((accum, elem) => accum.concat(elem));

    return peoples;
  }
};
console.log(getPeople(rooms));

// let rooms = {};

// const getPeople = (obj) => {
//   let resultarr = [];

//   let roomsArray = Object.values(rooms);

//   // let peopleArray = roomsArray.reduce((acc, el) => {
//   //   return acc.concat(el);
//   // }, []);
//   let peopleArray = roomsArray.reduce((acc, el) => acc.concat(el));

//   resultarr = peopleArray.map((element) => Object.values(element));

//   // let peoples = resultarr.reduce((accum, elem) => {
//   //   return accum.concat(elem);
//   // }, []);

//   let peoples = resultarr.reduce((accum, elem) => accum.concat(elem));

//   // console.log(peoples);

//   return peoples;
// };
// console.log(getPeople(rooms));
// // getPeople(rooms);
