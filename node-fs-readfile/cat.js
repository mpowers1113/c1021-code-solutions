const process = require('process');
const args = process.argv;

const fs = require('fs');

try {
  const input = args.slice(2);
  for (const request of input) {
    const eachRequest = './' + request.trim();
    console.log(
      fs.readFileSync(eachRequest, 'utf8')
    );
  }
} catch (error) {
  console.log(error);
}
