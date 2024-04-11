function walkDog() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const walkedDog = true;

         if (walkedDog) {
            resolve('You walk the dog');
         }
         else {
            reject('You did not walk the dog');
         }
      }, 1500);
   });
}

function cleanKitchen() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const kitchenCleaned = true;

         if (kitchenCleaned) {
            resolve('You clean the kitchen');
         }
         else {
            reject('You did not clean the kitchen');
         }
      }, 2000);
   })
}

function takeOutTrash() {

   return new Promise((resolve, reject) => {
      setTimeout(() => {

         const trashTakenOut = false;

         if (trashTakenOut) {
            resolve('You take out the trash');
         }
         else {
            reject('You did not take out the trash');
         }
      }, 500);
   })
}

walkDog().then(value => { console.log(value); return cleanKitchen() })
   .then(value => { console.log(value); return takeOutTrash() })
   .then(value => { console.log(value); console.log("End of program"); })
   .catch(error => console.log(error));