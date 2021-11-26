const process = require('process');
const args = process.argv;

const fs = require('fs');

const catnip = args.slice(2);

function printArray(input) {
  const arrayOfText = [];
  for (let i = 0; i < input.length; i++) {
    const fileName = './' + input[i];
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      arrayOfText[i] = data;
      if (i === input.length - 1) {
        console.log(arrayOfText.join(''));
      }
    });
  }
}
printArray(catnip);

function recursiveReadPrint(input) {
  if (input.length >= 1) {
    const fileName = './' + input[0];
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    return recursiveReadPrint(input.slice(1));
  }
}
recursiveReadPrint(catnip);
