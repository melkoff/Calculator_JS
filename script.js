class Product {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   displayProduct() {
      console.log(`Product: ${this.name}`);
      console.log(`Price: $${this.price.toFixed(2)}`);
   }

   calculateTotal(salesTax) {
      return this.price + (this.price * salesTax);
   }

}

// tax price
const salesTax = 0.05;

const productOne = new Product('Shirt', 25.99);
const productTwo = new Product('Pants', 29.50);
const productThree = new Product('Underwear', 100.00);

// For product
productOne.displayProduct();

const totalPrice = productOne.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalPrice.toFixed(2)}`);



// ========================================= Another Example ===================== //
console.log(" ========================================= Another Examples ===================== ")

class User {

   static userCount = 0;

   constructor(username) {
      this.username = username;
      User.userCount++;
   }

   sayHello() {
      console.log(`Hello, my user name is ${this.username}`)
   }

   static totalUser() {
      console.log(`Total users count is ${User.userCount}`);
   }

}

// Get constructon username
const user1 = new User("Vasa");
const user2 = new User("Iren");
const user3 = new User("Nazar");

// Show username with sayHello function
user1.sayHello();
user2.sayHello();
user3.sayHello();

// Show all amount of users
User.totalUser();