const baseUrl = 'https://61b61e94c95dd70017d40e50.mockapi.io/api/v1/user';

const form = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const onInputChange = () => {
  const valid = form.reportValidity();
  if (!valid) {
    //
    if (submitBtn.hasAttribute('disabled')) {
      return;
    }
    submitBtn.setAttribute('disabled');

    //
  } else {
    submitBtn.removeAttribute('disabled');
  }
};

const onClick = (e) => {
  e.preventDefault();

  userData = {
    email: form.email.value,
    name: form.name.value,
    password: form.password.value,
  };

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });

  form.email.value = '';
  form.name.value = '';
  form.password.value = '';

  fetch(baseUrl)
    .then((response) => response.json())
    .then((users) => {
      console.log(users);
    });
};

form.addEventListener('input', onInputChange);
submitBtn.addEventListener('click', onClick);
