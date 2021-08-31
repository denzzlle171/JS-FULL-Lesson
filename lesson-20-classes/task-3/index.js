'use strict';

class Wallet {
  #balance = 0;

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log('No enouhg funds');
      return;
    }
    this.#balance -= amount;
  }
}
const wallet1 = new Wallet();
wallet1.balance;

console.log(wallet1.getBalance());
wallet1.deposit(34);
console.log(wallet1.getBalance());
wallet1.withdraw(36);
console.log(wallet1.getBalance());
