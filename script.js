const fullName = ["Я", "Одна", "Строка"];
function together(...strings) {

   return strings.join(" ");

}

console.log(...fullName);




// const fullName = ["Я", "Одна", "Строка"];

// function together(...strings) {
//    return strings.join(" ");
// }

// const textResult = document.getElementById("result");
// textResult.innerHTML = together(...fullName);