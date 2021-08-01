// let contacts = [
//   { name: 'Tom', phoneNumbert: '11111111111111' },
//   { name: 'John', phoneNumbert: '44444444444444' },
//   { name: 'Anton', phoneNumbert: '7775555677777' },
//   { name: 'Stepan', phoneNumbert: '222222677777' },
//   { name: 'Maya', phoneNumbert: '24366555677777' },
// ];

// const sortContacts = (contacts, isAsk) => {
//   const result = contacts.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
//   return result;
// };
// console.log(sortContacts(contacts));

let contacts = [
  { name: 'Tom', phoneNumbert: '11111111111111' },
  { name: 'John', phoneNumbert: '44444444444444' },
  { name: 'Anton', phoneNumbert: '7775555677777' },
  { name: 'Stepan', phoneNumbert: '222222677777' },
  { name: 'Maya', phoneNumbert: '24366555677777' },
];
const sortContacts = (contacts, isAsk = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }

  const result = contacts.sort((a, b) => {
    if (isAsk === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
};
console.log(sortContacts(contacts, false));
