const baseUrl = 'https://61b61e94c95dd70017d40e50.mockapi.io/api/v1/user';

const formElt = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const allInput = document.querySelectorAll('.form-input');
//--------------------------------------------------------validation
const onInputChange = () => {
  const valid = formElt.reportValidity();
  if (!valid) {
    submitBtn.setAttribute('disabled', 'true');
  } else {
    submitBtn.removeAttribute('disabled');
  }
};
//--------------------------------------------------------server_request
const sentUserData = (userData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

// const getUserData = () => {
//   return fetch(baseUrl)
//     .then((response) => response.json())
//     .then((users) => {
//       alert(JSON.stringify(users));
//     });
// };
//
// getUserData();
//---------------------------------------------------------main_function
const onClick = (e) => {
  e.preventDefault();

  const userData = [...new FormData(formElt)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );

  sentUserData(userData)
    .then((response) => response.json())
    .then((res) => alert(JSON.stringify(res)))
    .then(() => allInput.forEach((input) => (input.value = '')));
  // allInput.forEach((input) => (input.value = ''));
};

formElt.addEventListener('input', onInputChange);
submitBtn.addEventListener('click', onClick);
