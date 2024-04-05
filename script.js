let numbers = [1, 2, 5, 9, 10, 3, 7, 4, 6, 8];

numbers.sort((a, b) => b - a);

console.log(numbers)

// ===================================== Another example ============================== //
console.log("===================================== Another example ==============================")

const people = [
   { name: "bob", age: 20, gpa: 3.4 },
   { name: "carl", age: 30, gpa: 3.9 },
   { name: "alice", age: 25, gpa: 2.9 },
   { name: "david", age: 27, gpa: 4.0 },
   { name: "mike", age: 22, gpa: 2.2 }
]


// sort by alphabet 1 example
people.sort((a, b) => a.name.localeCompare(b.name));


// sort by alphabet 2 example
// people.sort((a, b) => {
//    if (a.name < b.name) {
//       return -1
//    } else if (a.name > b.name) {
//       return 1
//    } else {
//       return 0
//    }
// });

console.log(people);