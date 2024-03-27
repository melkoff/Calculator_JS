sum(displayContent, 10, 5);

function sum(callback, a, b) {
   let result = a + b;
   callback(result);
}


function displayContent(result) {
   document.getElementById('titleResult').innerHTML = result;
}