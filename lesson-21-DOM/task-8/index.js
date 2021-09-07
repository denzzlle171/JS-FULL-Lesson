'use strict';

const createButton = (buttonText) => {
  document.write('<body>');
  const elementButton = document.createElement('button');
  const elementBody = document.querySelector('body');
  elementBody.append(elementButton);
  elementButton.textContent = buttonText;
};

createButton('Send Email');
