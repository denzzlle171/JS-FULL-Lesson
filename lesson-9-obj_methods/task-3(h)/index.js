const objectPlayers = { 'John Doe': 19, Tom: 17, Bob: 18 };

const getKeys = (obj) => {
  const keys = Object.keys(obj).forEach((key) => console.log(key));
};
getKeys(objectPlayers);
