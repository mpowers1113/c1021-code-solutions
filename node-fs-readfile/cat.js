const process = require('process');
const args = process.argv;

const fs = require('fs');

const catnip = args.slice(2);

function readItAndWeep(input) {
  input.forEach(cat => {
    const snippedAndTrimmed = './' + cat.trim();
    fs.readFile(snippedAndTrimmed, 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  });
}

console.log(readItAndWeep(catnip));
