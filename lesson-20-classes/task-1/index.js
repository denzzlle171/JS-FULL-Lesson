class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
    if (this.age < 0) {
      return false;
    }

    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  }

  static createEmpty() {
    const user = new User('', null);
    return user;
  }
}

const user1 = new User('John', 17);
console.log(user1);
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(26);
// console.log(user1);

// console.log(user1.setAge(26));

const user0 = new User();
console.log(User.createEmpty());
