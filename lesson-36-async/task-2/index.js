import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};
renderUserData(defaultUser);
//

const showUserBtnElem = document.querySelector('.name-form__btn');
const showUserInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = showUserInputElem.value;

  try {
    const UserData = await fetchUserData(userName);
    renderUserData(UserData);
    const reposList = await fetchRepositories(UserData.repos_url);
    renderRepos(reposList);
  } catch {
    alert(err.message);
  } finally {
    hideSpinner();
  }
  // fetchUserData(userName)
  //   .then((UserData) => {
  //     renderUserData(UserData);
  //     return UserData.repos_url;
  //   })
  //   .then((url) => fetchRepositories(url))
  //   .then((reposList) => {
  //     renderRepos(reposList);
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   })
  //   .finally(() => {
  //     hideSpinner();
  //   });
};

showUserBtnElem.addEventListener('click', onSearchUser);
