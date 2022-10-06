//function addTwo(a,b){ //both lines do the same 
// const addTwo = (a,b) => {
//     return a + b
// }


const addTwo = require ("./external.js") //add from seperate file
const subtract = require("./minus.js")
//const sum = addTwo(3,4)
//console.log(sum)

const total = subtract(10,3)
console.log(total)