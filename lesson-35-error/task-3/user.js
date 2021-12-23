const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const userAvatarElem = document.querySelector('.user__avatar');

export const renderUserData = (UserData) => {
  const { avatar_url, name, location } = UserData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
