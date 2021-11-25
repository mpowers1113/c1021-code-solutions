console.log('Hello, just a moment...');

setTimeout(() => { console.log('Thanks for waiting!'); }, 2000);

let count = 3;

const intervalID = setInterval(logCount, 1000);

function logCount() {
  if (count >= 0) {
    if (count === 0) {
      console.log('Blast OFF!');
      clearInterval(intervalID);
      count--;
    } else {
      console.log(count);
      count--;
    }
  }
}
