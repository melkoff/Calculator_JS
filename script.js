class Animal {

   alive = true;

   eat() {
      console.log(`This ${this.name} is eating`);
   }

   sleep() {
      console.log(`This ${this.name} is sleeping`);
   }

}

class Rabbit extends Animal {
   name = "rabbit";

   run() { // This method belongs only Rabbit
      console.log(`This ${this.name} is can running`);
   }
}


class Fish extends Animal {
   name = "fish"

   swim() { // This method belongs only Fish
      console.log(`This ${this.name} is can swimming`);
   }
}


class Bird extends Animal {
   name = "bird"

   fly() { // This method belongs only Bird
      console.log(`This ${this.name} is can flying`);
   }
}


const rabbit = new Rabbit();
const fish = new Fish();
const bird = new Bird();

console.log(fish.alive !== false); // We can change the property alive or not
fish.eat();
fish.sleep();
fish.swim();