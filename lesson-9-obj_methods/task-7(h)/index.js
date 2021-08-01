const getTotalRevenue = (transactions) => {
  let resultArr = [];

  transactions.forEach((element) => {
    let get = element.amount;
    resultArr.push(get);
  });

  let result = resultArr.reduce((acc, add) => acc + add);

  return result;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
