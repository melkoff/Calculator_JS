// dice roller

function rollDice() {

   const numOfDice = document.getElementById("numOfDice").value;
   const diceResults = document.getElementById("diceResults");
   const diceImages = document.getElementById("diceImages");
   const values = [];
   const images = [];

   for (let i = 0; i < numOfDice; i++) {

      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img style="margin: 10px" src="images/${value}.svg" alt="${value}">`);
   }

   diceResults.textContent = `Кубик: ${values.join(", ")}`;
   diceImages.innerHTML = images.join("");

}