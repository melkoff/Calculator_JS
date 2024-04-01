setTimeout(hello, 3000);

function hello() {
   console.log("Hello World");
}


// ================================= Second Example ============================== //

setTimeout(function () {
   console.log("Hello World Second Example");
}, 3000);


// ================================= Third Example ============================== //

setTimeout(() => console.log("Hello World Third Example"), 3000);


// ================================= Another Example ============================== //

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNumbers = numbers.filter((element) => element % 2 === 0);
const oddNumbers = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((a, b) => a + b);


console.log(total);