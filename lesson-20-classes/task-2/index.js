//export

class Vehicle {
  name = 'Argo';
  numberOfWheels = 0;

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}
//export
class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`), super.move();
  }

  stop() {
    super.stop(), console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Galya', 12, 30000);

console.log(ship1);

ship1.stop();
ship1.move();
