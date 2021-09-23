'use strict';
const students = [
  { name: 'Den', birthDate: '03/17/2007' },
  { name: 'Tom', birthDate: '01/14/2010' },
  { name: 'Ben', birthDate: '01/16/2008' },
  { name: 'Sam', birthDate: '03/12/2010' },
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const studentsBirthDays = (arr) => {
  const birthDaysObj = {};

  const sortArr = arr.sort((a, b) => {
    return new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate();
  });

  sortArr.forEach((element) => {
    let monthName = months[new Date(element.birthDate).getMonth()];

    if (birthDaysObj[monthName]) {
      birthDaysObj[monthName].push(element.name);
    } else {
      birthDaysObj[monthName] = [element.name];
    }
  });
  console.log(birthDaysObj);
  return birthDaysObj;
};

studentsBirthDays(students);
//   if (!birthDaysObj.hasOwnProperty([monthName])) {
//     birthDaysObj[monthName] = [element.name];
//   }
// if (birthDaysObj.hasOwnProperty([monthName])) {
//   // console.log(1);
//   birthDaysObj[monthName] = [element.name].concat(element.name);
// }
