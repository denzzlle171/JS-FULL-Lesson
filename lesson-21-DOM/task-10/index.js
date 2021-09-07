'use strict';

const FinishForm = () => {
  const form = document.querySelector('.login-form');

  const elemtntInputPrev = document.createElement('input');
  form.prepend(elemtntInputPrev);
  elemtntInputPrev.setAttribute('type', 'text');
  elemtntInputPrev.setAttribute('name', 'login');

  const elemtntInputNext = document.querySelector('[name=password]');
  elemtntInputNext.setAttribute('type', 'password');
};

FinishForm();
