var $h1 = document.querySelector('h1');

var countdown = 3;

function countDownInterval(number) {
  if (countdown === 0) {
    $h1.innerText = 'earth below us!';
    clearInterval();
  } else {
    $h1.innerText = `${countdown}`;
    countdown--;
  }
}

setInterval(countDownInterval, 1000);
