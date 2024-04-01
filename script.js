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