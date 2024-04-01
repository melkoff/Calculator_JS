function Car(brand, model, year, color) {
   this.brand = brand;
   this.model = model;
   this.year = year;
   this.color = color;
   this.drive = function () {
      console.log(`I'm driving ${this.brand} ${this.model}, and the car has ${this.color} color.`);
   }
}

const firstCar = new Car("Ford", "Mustang", 1969, "red");
const secondCar = new Car("Toyota", "Camry", 1999, "blue");
const thirdCar = new Car("Nissan", "Altima", 2020, "green");


console.log(firstCar.brand, firstCar.model, firstCar.year, firstCar.color);
console.log(secondCar.brand, secondCar.model, secondCar.year, secondCar.color);
console.log(thirdCar.brand, thirdCar.model, thirdCar.year, thirdCar.color);

firstCar.drive();
secondCar.drive();
thirdCar.drive();