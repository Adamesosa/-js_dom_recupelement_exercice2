
// let myBody = document.getElementsByTagName('body')[0]
let myBody = document.body
console.log(myBody);

let firstElementBody = myBody.firstElementChild
console.log(firstElementBody);


let lastElementBody = myBody.lastElementChild
console.log(lastElementBody);


let myDiv = document.getElementsByTagName('div')[0]
let exo4 = myDiv.children 
console.log(exo4);


let firstLi = document.getElementsByTagName('li')[0]
let suivant = firstLi.nextElementSibling
console.log(suivant);


let precendant = suivant.previousElementSibling
console.log(precendant);

