// for file handelling we use fs( file system ) package which is in-built in node modules
const fs = require("fs");

//Sync..Blocking Request
// fs.writeFileSync("./test.txt","Hey There")

// fs.writeFileSync("./test.txt","Hello Buddy") // this will overrid the previous text present

// Async..Non-BLocking Request
// fs.writeFile("./test.txt","Hey There", (err) => {}) // here we pass a call back function which will catch error if any

// Reading
// Sync..
const result = fs.readFileSync("./contact.txt","utf-8") // utf-8 is a standard encoding, we have to pass the encoding also
console.log(result)

// Async: here it does not return the result, it takes two argument in the callBack func one for error if any and other for result
fs.readFile("./contact.txt","utf-8",(err, result) => {
  if(err){
    console.log("Error1",err);
  } else {
    console.log(result);
  }
})

// Appending: it will not overwrite like writeFile rather it would add the new content after the existing content.
// fs.appendFileSync("./test.txt", '\nhello buddy how are u?\n');

// fs.cpSync("./test.txt","./copy.txt") // used to copy a file to another

// fs.unlinkSync("./copy.txt") // used to delete a file

console.log(fs.statSync('./test.txt')) // provides the stats of the file

fs.mkdirSync("my-doc/a/b", {recursive: true}) //making directory with folders, recursive true to create folder inside the directory