'use strict';
const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(text) {
    sender = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};
// export default createMessenger;

const messenger1 = createMessenger();
messenger1.sendMessage('Bob');
messenger1.setSender('Denzzlle');
messenger1.sendMessage('Bob');
messenger1.setMessage('Jast learn it');

const messenger2 = createMessenger();
messenger2.sendMessage('Tom');
messenger2.setMessage('Hello');
messenger2.sendMessage('Tom');
messenger2.setSender('William');

messenger2.sendMessage('Tom');
messenger1.sendMessage('Bob');
console.log(createMessenger());

/////////
///////////
//////
///////////
//////
///
//////////

// let message = 'Hi';
// let sender = 'Gromcode';

// export default function createMessenger() {
//   let message = 'Hi';
//   let sender = 'Gromcode';

//   function sendMessage(name = Ann) {
//     console.log(`${name}, ${message}! Your ${sender}`);
//   }

//   function setMessage(text) {
//     message = text;
//   }

//   function setSender(text) {
//     sender = text;
//   }

//   return {
//     sendMessage,
//     setMessage,
//     setSender,
//   };
// }
// // export default createMessenger;

// const messenger1 = createMessenger();
// messenger1.sendMessage('Bob');
// messenger1.setSender('Denzzlle');
// messenger1.sendMessage('Bob');
// messenger1.setMessage('Jast learn it');

// const messenger2 = createMessenger();
// messenger2.sendMessage('Tom');
// messenger2.setMessage('Hello');
// messenger2.sendMessage('Tom');
// messenger2.setSender('William');

// messenger2.sendMessage('Tom');
// messenger1.sendMessage('Bob');
