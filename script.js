// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "Hello World";
newH1.id = "myTitle"

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
document.body.prepend(newH1); // show on the top of the page