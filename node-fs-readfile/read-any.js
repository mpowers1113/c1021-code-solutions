const fs = require('fs');
const process = require('process');
const args = process.argv;

const userInput = args.slice(2).join('');

function readItAndWeep(input) {
  const snippedAndTrimmed = './' + input.trim();
  fs.readFile(snippedAndTrimmed, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

console.log(readItAndWeep(userInput));
