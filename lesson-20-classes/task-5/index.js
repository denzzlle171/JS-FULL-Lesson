// /* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = users;
  }

  get users() {
    return Object.freeze(this._users);
  }

  getUserIds() {
    let arrId = [];
    for (let i = 0; i < this.users.length; i += 1) {
      arrId.push(this.users[i].id);
    }
    return arrId;
  }

  getUserNames() {
    let arrName = [];
    for (let i = 0; i < this.users.length; i += 1) {
      arrName.push(this.users[i].name);
    }
    return arrName;
  }

  getUserNameById(finfId) {
    for (let i = 0; i < this.users.length; i += 1) {
      if (this.users[i].id == finfId) {
        // console.log(this.users[i].name);
        return this.users[i].name;
      }
    }
  }
}
// examples
const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// let users = [
//   { id: '7', name: 'Tom', sessionId: 'session-7id' },
//   { id: '6', name: 'Bob', sessionId: 'session-5id' },
//   { id: '8', name: 'jon', sessionId: 'session-iiid' },
// ];

// function getUserIds(arr) {
//   let arrId = arr.map((element) => element.id);
//   console.log(arrId);
//   return arrId;
// }

// getUserIds(users);
