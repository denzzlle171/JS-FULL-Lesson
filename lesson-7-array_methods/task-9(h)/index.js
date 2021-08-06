let clients = ['Den', 'John', 'Mike', 'Nikita', 'Julia'];
let balance = [97000, 84000, 20478, 103000, 2300];

const withdraw = (clients, balances, client, amount) => {
  let item = clients.indexOf(client);
  if (balances[item] < amount) {
    return -1;
  } else {
    balances[item] = balances[item] - amount;
  }
  return balances[item];
};
console.log(withdraw(clients, balance, 'Mike', 100));
