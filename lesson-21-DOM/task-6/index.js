const setButton = (buttonText) => {
  document.write('<body>');
  const elementBody = document.querySelector('body');
  console.log(elementBody);
  const elementButton = document.createElement('button');
  elementBody.append(elementButton);
  elementButton.innerHTML = buttonText;
};

setButton('buttonText');
