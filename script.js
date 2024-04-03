const persone = {
   fullName: "Vasa Melko",
   age: 26,
   isStudent: false,
   hobbies: ['Sport', 'Guitar'],
   address: {
      country: "Ukraine",
      city: "Lviv",
      street: "Some street",
   }
}

// console.log(persone.fullName, persone.age, persone.isStudent, persone.hobbies[1], persone.address.city);

for (const property in persone.hobbies) {
   console.log(persone.hobbies[property])
}



// ========================================== Another Example ====================== //
console.log('========================================== Another Example ======================')
class Persone {

   constructor(name, age, ...address) {
      this.name = name;
      this.age = age;
      this.address = new Address(...address);
   }

}
class Address {

   constructor(street, city, country) {
      this.street = street;
      this.city = city;
      this.country = country;
   }

}


const persone1 = new Persone("Vasa", 26, "Some street", "Lviv", "Ukraine");

console.log(persone1.address)