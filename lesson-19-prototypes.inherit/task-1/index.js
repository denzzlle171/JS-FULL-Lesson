'use strict';

const vehicle = {
  name: 'Argo',

  move() {
    console.log(`${this.name} is moving`);
  },

  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`), this.move();
  },

  stopMachine() {
    this.stop(), console.log(`${this.name} lifting anchor down`);
  },

  // __proto__: vehicle,
};
Object.setPrototypeOf(ship, vehicle);

ship.startMachine();
ship.stopMachine();
