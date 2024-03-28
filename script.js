const members = ['Vasa', 'Ira', 'Nazar'];

const membersUpper = members.map(upperCase);
const membersLower = members.map(lowerCase);

console.log(membersLower);

function upperCase(element) {
   return element.toUpperCase();
}

function lowerCase(element) {
   return element.toLowerCase();
}



// ======================================== DATES ============================== //

const dates = ['1997-06-03', '2000-10-20', '2024-03-28'];
const formattedDates = dates.map(formatDate);

console.log(formattedDates)

function formatDate(element) {
   const parts = element.split('-');
   return `${parts[2]}.${parts[1]}.${parts[0]}`
}