const personeOne = {
   name: 'Vasa',
   lastName: 'Melko',
   age: 26,
   isEmployed: true,
   sayHello: function () {
      console.log(`Hello, my name is ${this.name}`);
   },
   eat: function () {
      console.log('I like pizza');
   }
}


const personeSecond = {
   name: 'Iren',
   lastName: 'Pec',
   age: 31,
   isEmployed: true,
   sayHello: () => {
      console.log(`Hello, my name is Iren`); // Стрілочна функція не поверне значення name як у першому прикладі, так як немає контексту this
   },

   eat: () => {
      console.log('I just like eat');
   }

}


personeOne.eat();
personeSecond.sayHello();