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

// =================================================================== //

hello(goodbye, leave);

function hello(callback) {
   setTimeout(function () {
      console.log('1 Hello!');
      callback();
   }, 3000)
}

function goodbye() {
   console.log('1 Goodbye!');
}

function leave() {
   console.log('1 Leave!');
}

// =================================================================== //

function helloTwo() {
   let callbacks = Array.from(arguments);
   setTimeout(function () {
      console.log('2 HelloTwo!');
      callbacks.forEach(callback => callback());
   }, 3000)
}

helloTwo(goodbyeTwo, leaveTwo);

function goodbyeTwo() {
   console.log('2 GoodbyeTwo!');
}

function leaveTwo() {
   console.log('2 LeaveTwo!');
}

// =================================================================== //


function func1(callback) {
   setTimeout(() => { console.log("NUMBER 1"); callback() }, 3000);
}

function func2() {
   console.log("NUMBER 2");
   console.log("NUMBER 3");
   console.log("NUMBER 4");
}

func1(func2);