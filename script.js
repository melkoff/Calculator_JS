let fruits = ["apple", "banana", "cherry"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array) {
   array[index] = element.toUpperCase();
}

function display(element) {
   console.log(element);
}



// ============================ NUMBERS ======================================== //



let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube); // Передаємо значення функцій
numbers.forEach(displayNum); // Показуємо значення

// Doubles the number
function doubleNum(numElement, index, array) {
   array[index] = numElement * 2;
}

// Tripples the number
function trippleNum(numElement, index, array) {
   array[index] = numElement * 3;
}

// Squares the number
function square(numElement, index, array) {
   array[index] = Math.pow(numElement, 2);
}

// Cube the number
function cube(numElement, index, array) {
   array[index] = Math.pow(numElement, 3);
}

function displayNum(numElement) {
   console.log(numElement);
}