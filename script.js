const fruits = [
   { name: "apple", color: "red", calories: 95 },
   { name: "orange", color: "orange", calories: 56 },
   { name: "banana", color: "yellow", calories: 125 },
   { name: "coconut", color: "white", calories: 198 },
   { name: "pineapple", color: "yellow", calories: 42 },
];


// ========== forEach() =========== //
//fruits.forEach(fruit => console.log(fruit.name))



// ========== map() =========== //
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);

// console.log(fruitNames);
// console.log(fruitColors);



// ========== filter() =========== //
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalloriesFruits = fruits.filter(fruit => fruit.calories < 100);

// console.log(yellowFruits);
// console.log(lowCalloriesFruits);



// ========== reduce() =========== //
const maxCalloriesFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxCalloriesFruit);