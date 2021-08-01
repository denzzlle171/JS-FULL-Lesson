const sale = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  country: 'Ukraine',
  company: 'NYSE',
};
function getKeys(obj) {
  for (const key in obj) {
    const element = key;
    console.log(element);
  }
}

getKeys(sale);
