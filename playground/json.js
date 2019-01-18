// let obj = {
//   name: 'Ben'
// };
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Ben","age": 24}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: "Some Title",
  body: "Some body text"
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
let notes = JSON.parse(noteString);

console.log(typeof notes);
console.log(notes);
