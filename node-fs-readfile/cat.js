const process = require('process');
const args = process.argv;

const fs = require('fs');

const catnip = args.slice(2);

function readItAndWeep(input) {
  let concatinated = '';
  input.forEach(cat => {
    const snippedAndTrimmed = './' + cat.trim();
    fs.readFile(snippedAndTrimmed, 'utf8', (err, data) => {
      if (err) throw err;
      concatinated += data;
      fs.writeFile('./concatinated.txt', concatinated, err => {
        if (err) throw err;
        console.log(concatinated);
      });
    });
  });
}
readItAndWeep(catnip);
