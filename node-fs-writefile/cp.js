const fs = require('fs');
const process = require('process');
const args = process.argv;
const userInput = args.slice(2);

function copyFile(userInput) {
  fs.readFile(userInput[0], 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(userInput[1], data, err => {
      if (err) throw err;
    });
  });
}

copyFile(userInput);
