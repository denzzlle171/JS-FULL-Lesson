// const getAdults = (obj) => {
//   const usersArray = Object.entries(obj);
//   const filteredUsersArr = usersArray.filter((usr) => usr[1] >= 18);
//   const userNames = filteredUsersArr.map((usr) => usr[0]);
//   return userNames;
// };
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));

// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

const getAdults = (obj) =>
  Object.entries(obj)
    .filter((usr) => usr[1] >= 18)
    .map((usr) => usr[0]);

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
