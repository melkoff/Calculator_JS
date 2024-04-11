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

         const trashTakenOut = true;

         if (trashTakenOut) {
            resolve('You take out the trash');
         }
         else {
            reject('You did not take out the trash');
         }
      }, 500);
   })
}

async function doChores() {

   try {
      const wlakDogResult = await walkDog();
      console.log(wlakDogResult);

      const cleanKitchenResult = await cleanKitchen();
      console.log(cleanKitchenResult);

      const takeOutTrashResult = await takeOutTrash();
      console.log(takeOutTrashResult);
   }
   catch (error) {
      console.error(error);
   }
}

doChores();