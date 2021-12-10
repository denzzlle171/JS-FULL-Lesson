const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
//

const defaultAvftar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvftar;
//

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

const renderUserData = (UserData) => {
  const { avatar_url, name, location } = UserData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const showUserInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = showUserInputElem.value;
  fetchUserData(userName).then((UserData) => renderUserData(UserData));
};

showUserBtnElem.addEventListener('click', onSearchUser);

// https://github.com/denzzlle171/JS-FULL-Lesson/tree/master/lesson-33-http-server/task-1
