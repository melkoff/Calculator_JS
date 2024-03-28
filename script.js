// filter numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element) {
   return element % 2 === 0;
}

function isOdd(element) {
   return element % 2 !== 0;
}


// ====================================== AGE filte ================================== //

const ages = [13, 15, 17, 19, 22, 34];
const adults = ages.filter(isAdult)
const children = ages.filter(isChild);

console.log(children);

function isAdult(element) {
   return element >= 18;
}

function isChild(element) {
   return element < 18;
}



// ====================================== WORDS filte ================================== //

const words = ['apple', 'banana', 'orange', 'strawberry', 'pineapple', 'mango', 'coconut'];
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);

console.log(shortWords)
console.log(longWords)

function getShortWords(element) {
   return element.length <= 5;
}

function getLongWords(element) {
   return element.length > 5;
}