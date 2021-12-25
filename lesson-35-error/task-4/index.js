export const parseUser = (jsonString) => {
  try {
    const user = JSON.parse(jsonString);
    return user;
  } catch (e) {
    return null;
  }
};

const test = parseUser('{"name":"Tom');
console.log(test);
