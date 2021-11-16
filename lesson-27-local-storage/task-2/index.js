const counterEl = document.querySelector('.counter');
const counterValueEl = document.querySelector('.counter_value');

const onCounterChange = (event) => {
  const isButton = event.target.classList.contains('counter_button');
  if (!isButton) {
    return;
  }

  const act = event.target.dataset.action;
  const oldValue = Number(counterValueEl.textContent);
  const newValue = act === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueEl.textContent = newValue;
};

counterEl.addEventListener('click', onCounterChange);

const onStorageChange = (event) => {
  console.log(event);
  counterValueEl.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocumentloaded = () => {
  counterValueEl.textContent = localStorage.getItem('counterValue') || 0;
};
document.addEventListener('DOMContentLoaded', onDocumentloaded);
