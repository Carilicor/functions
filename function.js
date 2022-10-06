//function addTwo(a,b){ //both lines do the same 
// const addTwo = (a,b) => {
//     return a + b
// }


const addTwo = require ("./external.js") //add from seperate file
console.log("none of this minus stuff! we don't do negative!")

const sum = addTwo(3,4)
console.log(sum)
const subtract = require("./minus.js")
//const sum = addTwo(3,4)
//console.log(sum)

const total = subtract(10,3)
console.log(total)
