// reduce повертає один елемент із масиву

const prices = [5, 24, 55, 12, 7, 33];

const total = prices.reduce(sum);

console.log(total)

function sum(accumulator, element) {
   return accumulator + element;
}


// =========================================  GRADES  ========================================= //

const grades = [75, 50, 32, 80, 90, 2, 12];

const maximum = grades.reduce(maxGrade);
const minimum = grades.reduce(minGrade);

console.log(`Найбільше число: ${maximum}`);
console.log(`Найменше число: ${minimum}`);


function maxGrade(accumulator, element) {
   return Math.max(accumulator, element);
}

function minGrade(accumulator, element) {
   return Math.min(accumulator, element);
}