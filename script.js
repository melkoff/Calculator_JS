// swap 2 elements in an array
const colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);



// =========================================== Example 2 ============================== //
console.log("================= Another Example 2 =================");
// assign array elements to variables
const nextColors = ['red', 'green', 'blue', 'black', 'white'];
const [firstColor, secondColor, thirdColor, ...extraColors] = nextColors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);



// =========================================== Example 3 ============================== //
console.log("================= Another Example 3 =================");
// extract values from objects
const personeOne = {
   firstName: "Vasa",
   lastName: "Melko",
   age: 26,
}

const personeTwo = {
   firstName: "Iren",
   lastName: "Pec",
   age: 31,
   job: "Strong IT",
}

const { firstName, lastName, age, job = "Funny IT" } = personeOne;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);



// =========================================== Example 4 ============================== //
console.log("================= Another Example 4 =================");
// destructure in function parameters

function displayPersone({ firstName, lastName, age, job = "Not specified" }) {
   console.log(`Fullname: ${firstName} ${lastName}`);
   console.log(`age: ${age}`);
   console.log(`job: ${job}`)
}

const personeDima = {
   firstName: "Dima",
   lastName: "Melko",
   age: 26,
   job: "American artist",
}

const personeTaras = {
   firstName: "Taras",
   lastName: "Karpinsky",
   age: 26,
}

displayPersone(personeTaras);