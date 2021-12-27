const url = 'https://api.github.com/users';

const fetchRequest = (userId) => {
  return fetch(`${url}/${userId}`).then((response) =>
    response.json().then((res) => res.blog)
  );
};

const getUsersBlogs = async (userArr) => {
  const promisArr = userArr.map((userItem) => {
    return fetchRequest(userItem);
  });
  return (result = await Promise.all(promisArr));
};

console.log(getUsersBlogs(['google', 'facebook', 'git']));
