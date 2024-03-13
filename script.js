const textBox = document.getElementById("textBox");
const FAHRENHEIT = document.getElementById("toFahrenheit");
const CELSIUM = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temperature;

function convert() {

   if (FAHRENHEIT.checked) {
      temperature = Number(textBox.value);
      temperature = temperature * 9 / 5 + 32;
      result.textContent = temperature.toFixed(1) + "°F градусів за фаренгейтом";
   }
   else if (CELSIUM.checked) {
      temperature = Number(textBox.value);
      temperature = (temperature - 32) * 5 / 9;
      result.textContent = temperature.toFixed(1) + "°C градусів за цельсієм";
   }
   else {
      result.textContent = "Виберіть один з пунктів";
   }

}