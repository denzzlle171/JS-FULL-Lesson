export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let coppyArr = arr.slice();

  return coppyArr.reverse();
};

///

export const withdraw = (clients, balances, client, amount) => {
  let item = clients.indexOf(client);
  if (balances[item] < amount) {
    return -1;
  } else {
    balances[item] = balances[item] - amount;
  }
  return balances[item];
};

///

export const getAdults = (obj) => {
  let newObj = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};
