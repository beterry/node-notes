console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Yargs', argv);
console.log('Command:', command);

switch (command){
  case 'add':
    let note = notes.addNote(argv.title, argv.body);
    if (note){
      console.log('Note created');
      console.log('----');
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
      console.log('----');
    } else {
      console.log('That note already exists!');
    }
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.readNote(argv.title);
    break;
  case 'remove':
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note removed' : 'Note not removed';
    console.log(message);
    break;
  default:
    console.log('Command not found');
};
