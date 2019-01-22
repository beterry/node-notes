const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  }
};
const bodyOptions = {
  title: {
    describe: 'bodyOptions of note',
    demand: true,
    alias: 'b'
  }
};

const argv = yargs
  .command('add', 'Add a new note', {titleOptions, bodyOptions})
  .command('list', 'List all notes')
  .command('read', 'Read a note', {titleOptions})
  .help()
  .argv;

let command = argv._[0];

if (command == 'add'){
  const note = notes.addNote(argv.title, argv.body);
  if (note){
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('That note already exists!');
  }
} else if (command == 'list'){
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
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
