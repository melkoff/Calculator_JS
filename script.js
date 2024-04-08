// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


const ulElements = document.querySelectorAll('ul');

// =============================== example for all elements

// ulElements.forEach(ulElement => {
//    const liElements = ulElement.querySelectorAll('li');
//    liElements.forEach(liElement => {
//       liElement.style.color = 'red';
//    })
// })


// =============================== example for first element

// ulElements.forEach(ulElement => {
//    const firstChild = ulElement.firstElementChild;
//    firstChild.style.color = "red";
// })


// =============================== example for last element

ulElements.forEach(ulElement => {
   const lastChild = ulElement.lastElementChild;
   lastChild.style.color = "red";
})