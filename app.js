console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = argv._[0];
console.log('Yargs', argv);
console.log('Command:', command);

  if (command == 'add'){
    const note = notes.addNote(argv.title, argv.body);
    if (note){
      console.log('Note created');
      notes.logNote(note);
    } else {
      console.log('That note already exists!');
    }
  } else if (command == 'list'){
    notes.getAll();
  } else if (command == 'read'){
    const note = notes.readNote(argv.title);
    if (note){
      notes.logNote(note);
    } else{
      console.log('Note not found');
    }
  } else if (command == 'remove'){
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note removed' : 'Note not removed';
    console.log(message);
  } else{
    console.log('Command not found');
  }
