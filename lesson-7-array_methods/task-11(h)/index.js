const arrOfNames = [
  'John',
  'Olivya',
  'Oleksandr',
  'Emanuel',
  'Vanya',
  'Nastya',
];

function filterNames(arr, text) {
  let rightName = (elem) => elem.includes(text) && elem.length > 5;

  let newArray = arr.filter(rightName);

  return newArray;
}

console.log(filterNames(arrOfNames, 'ya'));
