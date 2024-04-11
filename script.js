// const jsonNames = `["Spongebob", "Patrick", "Skwidward", "Sandy"]`;
// const jsonPersone = `{
//    "name": "Spongebob",
//    "age": 30,
//    "isEmployed": true,
//    "hobbies": [
//       "Soccer",
//       "Golf",
//       "Cooking"
//    ]
// }`;
// const jsonPeople = `[
//    {
//       "name": "Spongebob",
//       "age": 30,
//       "isEmployed": true
//    },
//    {
//       "name": "Patrick",
//       "age": 34,
//       "isEmployed": false
//    },
//    {
//       "name": "Skwidward",
//       "age": 45,
//       "isEmployed": true
//    },
//    {
//       "name": "Sandy",
//       "age": 20,
//       "isEmployed": false
//    }
// ]`;

// const parseData = JSON.parse(jsonPersone);

// console.log(parseData);


// ================================================ Another Example ======================= //

fetch("people.json")
   .then(response => response.json())
   .then(values => values.forEach(value => console.log(value.name + " " + value.age)))
   .catch(error => console.error(error));