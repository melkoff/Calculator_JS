class Rectangle {

   constructor(width, height) {
      this.width = width;
      this.height = height;
   }

   // setters makes property writeable
   set width(newWidth) {
      if (newWidth > 0) {
         this._width = newWidth;
      }
      else {
         console.error("Width must be more than zero!")
      }
   }

   set height(newHeight) {
      if (newHeight > 0) {
         this._height = newHeight;
      }
      else {
         console.error("Height must be more than zero!")
      }
   }

   // getters makes property readable
   get width() {
      return `${this._width.toFixed(1)}cm`;
   }

   get height() {
      return `${this._height.toFixed(1)}cm`;
   }

   get area() {
      return `${(this._width * this._height).toFixed(1)}cm`;
   }

}

const rectangle = new Rectangle(10, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


// ==================================================== Another Example ==================================== //
console.log("Another Example")


class Persone {

   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   }

   // setters makes property writeable
   set firstName(newFirstName) {
      if (typeof newFirstName === "string" && newFirstName.length > 0) {
         this._firstName = newFirstName;
      }
      else {
         console.error("First name must a non-empty string")
      }
   }

   set lastName(newLastName) {
      if (typeof newLastName === "string" && newLastName.length > 0) {
         this._lastName = newLastName;
      }
      else {
         console.error("Last name must a non-empty string")
      }
   }

   set age(newAge) {
      if (typeof newAge === "number" && newAge >= 0) {
         this._age = newAge;
      }
      else {
         console.error("Age must be a non-negative number")
      }
   }


   // getters makes property readable
   get firstName() {
      return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
   }

   get lastName() {
      return this._lastName;
   }

   get age() {
      return this._age;
   }

   get fullName() {
      return this._firstName + " " + this._lastName;
   }

}

const persone = new Persone("vasa", "melko", 26);

console.log(persone.firstName);
console.log(persone.lastName);
console.log(persone.age);

console.log(persone.fullName);