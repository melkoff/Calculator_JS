
async function fetchData() {

   try {

      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if (!response.ok) {
         throw new Error("Response not ok");
      }

      const data = await response.json();
      const pokemonSprite = data.sprites.front_default;// we can use back_default also
      const imgElement = document.getElementById("pokemonSprite");

      imgElement.src = pokemonSprite;
      imgElement.style.display = "block";
      console.log(data);
   }
   catch (error) {
      console.error(error);
   }

}