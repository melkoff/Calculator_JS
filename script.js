sum(displayContent, 10, 5);
function sum(callback, a, b) {
   //Виконуємо код
   let result = a + b;
   callback(result);
}


// Виклик функції sum з параметром callback та значеннями аргументів 10 та 5
function displayContent(result) {
   document.getElementById('titleResult').innerHTML = result;
}