// with Apply

export let wallet = {
  transactions: [2, 8, 387, 14, 24, 61],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());

// with Spred
//
//  let walllet = {
//   transactions: [2, 8, 387, 14, 24, 61],
//   getMax() {
//     return Math.max(...this.transactions);
//   },
//   getMin() {
//     return Math.min(...this.transactions);
//   },
// };

// console.log(walllet.getMax());
// console.log(walllet.getMin());
