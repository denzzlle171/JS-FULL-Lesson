let timer = {
  secondsPassed: 0,
  minsPassed: 0,
};

// timer.getTimer =
// timer.stopTimer;
// timer.resetTimer;

startTimer = setInterval(() => {
  timer.secondsPassed += 1;
  // if (secondsPassed == 60) {
  //   secondsPassed = 0;
  //   minsPassed = + 1;
  // }
}, 1000);
console.log(timer.secondsPassed);
