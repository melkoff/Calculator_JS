// number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;


while (running) {
   guess = window.prompt(`Вгадай число між ${minNum} та ${maxNum}`);
   guess = Number(guess);

   if (isNaN(guess)) {
      window.alert("Введіть коректне число");
   }
   else if (guess < minNum || guess > maxNum) {
      window.alert("Введіть коректне число від 1 до 100");
   }
   else {
      attempts++;
      if (guess < answer) {
         window.alert("Надто мало. Спробуйте ще раз");
      }
      else if (guess > answer) {
         window.alert("Надто багато. Спробуйте ще раз");
      }
      else {
         window.alert(`Вітаємо! Ви вгадали за ${attempts} спроб`);
         running = false;
      }
   }
}