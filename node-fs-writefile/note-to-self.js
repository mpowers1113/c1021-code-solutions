const fs = require('fs');
const process = require('process');
const args = process.argv;
const userInput = args.slice(2).join(' ');

fs.writeFile('note-to-self.txt', userInput, err => {
  if (err) throw err;
});
