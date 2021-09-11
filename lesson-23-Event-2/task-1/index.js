'use strict';
//find elements for action
const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');
//validator f0r email fild
const isRequired = (value) => (value ? undefined : 'Required');
const isEmail = (value) =>
  value.includes('@') ? undefined : 'Should be an email';

//objvalidators
const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};
/////!!!!!!!!!!!!!!!!!!!! 18.10
const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map((validator) => validator(value))
    .filter((errorText) => errorText)
    .join(', ');
};

//function:  show email Error
const onEmailChange = (event) => {
  const errorText = validate('email', event.target.value);
  emailErrorElem.textContent = errorText;
};

//function:  show password Error
const onPasswordChange = (event) => {
  const errorText = validate('password', event.target.value);
  passwordErrorElem.textContent = errorText;
};

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {}
  );
  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);
