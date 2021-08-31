'use strict';

class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  id = String(Math.floor(Math.random() * 1000000));
  isConfirmed = false;
  dateCreated = new Date();
  dateConfirmed = new Date();

  checkPrice() {
    return this.price > 1000 ? true : false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

const order1 = new Order(9900, 'New York', 'Bay');

console.log(order1);
console.log(order1.checkPrice());
console.log(order1.isValidType());

order1.confirmOrder();
console.log(order1);
console.log(order1.id);
