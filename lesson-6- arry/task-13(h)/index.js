let clients = ['Den', 'John', 'Mike', 'Nikita', 'Julia'];
let balance = [97000, 84000, 20478, 103000, 2300];

function withdraw(clients, balance, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] == client) {
      if (balance[i] < amount) {
        return -1;
      } else {
        let residue = balance[i] - amount;
        balance[i] = residue;
        return residue;
      }
    }
  }
}
// withdraw(clients, balance, 'Mike', 1200);
console.log(withdraw(clients, balance, 'Mike', 1200));

console.log(balance);
