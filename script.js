class Transport {

   constructor(name, color, speed) {
      this.name = name;
      this.color = color;
      this.speed = speed;
   }

}

class Car extends Transport {

   constructor(name, color, speed, drive) {
      super(name, color, speed); // We use the (super) from parent constructor
      this.drive = drive;
   }

   // add new method
   ride() {
      console.log(`This ${this.name} can use road`);
   }

}


class Plane extends Transport {

   constructor(name, color, speed, fly) {
      super(name, color, speed); // We use the (super) from parent constructor
      this.fly = fly;
   }

   // add new method
   flying() {
      console.log(`This ${this.name} can use sky`);
   }

}


class Ship extends Transport {

   constructor(name, color, speed, swim) {
      super(name, color, speed); // We use the (super) from parent constructor
      this.swim = swim;
   }

   // add new method
   swiming() {
      console.log(`This ${this.name} can use sea`);
   }

}


const car = new Car("Ford", "Red", 40, true);
const plane = new Plane("Boing", "White", 350, true);
const ship = new Ship("Poseidon", "Blue", 120, true)

console.log(car.name);
console.log(car.color);
console.log(car.speed);

console.log(car.drive ? true : false);

car.ride();
plane.flying();
ship.swiming();