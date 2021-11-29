const fs = require('fs');
const process = require('process');
const data = require('./data.json');
const args = process.argv.slice(2);
const writeThis = args.slice(1).join(' ');
const editThis = args.slice(2).join(' ');
const command = args[0];

function readNotes() {
  for (const key in data.notes) {
    console.log(key + ':' + ' ' + data.notes[key] + '\n');
  }
}

function addNote() {
  data.notes[data.nextId] = writeThis;
  data.nextId++;
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newJSON, err => {
    if (err) {
      console.err(err);
    }
  });
}

function deleteNote(id) {
  delete data.notes[id];
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newJSON, err => {
    if (err) {
      console.err(err);
    }
  });
}

function editNote(id) {
  data.notes[id] = editThis.trim();
  const newJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newJSON, err => {
    if (err) {
      console.err(err);
    }
  });
}

function crudFunctions() {
  if (command === 'read') {
    readNotes();
  } else if (command === 'create') {
    addNote(writeThis);
  } else if (command === 'delete') {
    deleteNote(args[1]);
  } else if (command === 'update' || command === 'edit') {
    editNote(args[1]);
  } else {
    console.log('Command not found, please use read, create, delete, or update');
  }

}

crudFunctions();
