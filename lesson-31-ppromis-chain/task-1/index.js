'use strict';
const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}@example.com`,
          userId: `${userId}`,
        });
      }, 1000);
    }
  });
  return request;
};

// requestUserData('broken').then((data) => console.log(data));
// requestUserData('broken').catch((eror) => console.log(eror));

// requestUserData('broken-1').finally(() => console.log('finally'));
requestUserData('userid777')
  .then((data) => console.log(data))
  .catch((eror) => console.log(eror))
  .finally(() => console.log('finally'));
