export let user = {};

user.setFullName = function (fullName) {
  [user.firstName, user.lastName] = fullName.split(' ');
};

user.setFullName('John Doe');

user.getFullName = function () {
  // console.log(`${this.firstName} ${this.lastName}`);
  return `${this.firstName} ${this.lastName}`;
};
user.getFullName();
// console.log(user);
