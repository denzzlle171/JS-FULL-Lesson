export let user = { firstName: 'John', lastName: 'Doe' };

user.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

user.getFullName();

///
//
///
// let user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// user.getFullName();
