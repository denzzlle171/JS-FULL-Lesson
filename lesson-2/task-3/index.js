let goodNumber = 7;
anotherNumber = goodNumber;
anotherNumber = 77;
 
console.log(goodNumber);
console.log(anotherNumber);

let customer = { name: 'John', age: 17 };
let anotherCustomer = customer;

anotherCustomer.age = 20;

console.log(customer.age);
console.log(anotherCustomer.age);