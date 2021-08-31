'use strict';
const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} is stopped`);
  },
};
/////
////object
const ship = {
  hight: '154 m',
  weidth: '56 m',

  startMachine() {
    console.log(`${this.name} lifting archor up`);
  },

  stopMachine() {
    this.stop(), console.log(`${this.name} lifting archor down`);
  },
  __proto__: vehicle,
};
//////
///// function
function getOwnProps(obj) {
  let ownProps = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      ownProps.push(prop);
    }
  }
  return ownProps;
}

console.log(getOwnProps(ship));
