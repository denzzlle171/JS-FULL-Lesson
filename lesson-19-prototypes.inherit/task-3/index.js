function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (this.age < 0) {
    return false;
  }

  if (this.age >= 25) {
    this.requestNewPhoto();
  }
  return this.age;
};

const user1 = new User('John', 17);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(26);
console.log(user1);

console.log(user1.setAge(26));
