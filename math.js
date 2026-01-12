// function add(a, b){
//   return a+b
// }

// function sub(a, b){
//   return a-b;
// }

// module.exports = add 
// we have to export the function we need
// if we provide another module.exports then it will overrid the previous exports.

// module.exports = {
//   addFn: add,
//   subFn : sub
// }
 // we could rename the function if needed otherwise could be normally

// Another method of exporting function

exports.add = (a, b) => a + b;

exports.sub = (a, b) => { return a - b};