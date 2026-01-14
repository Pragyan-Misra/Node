const fs = require("fs");

// Blocking
console.log('1');
const result = fs.readFileSync("../File_Handelling/test.txt", "utf-8")
console.log(result);
console.log('2');

// Non-Blocking 
console.log('3');
fs.readFile("../File_Handelling/test.txt", "utf-8",(err, result) => {
  if(err){
    console.log("Error", err);
  } else {
    console.log(result)
  }
})
console.log('4');

const os = require("os"); // operating System

console.log(os.cpus().length)