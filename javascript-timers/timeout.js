var $h1 = document.querySelector('h1');

function changeH1onSetTimeout() {
  $h1.innerText = 'Hello There';
}

setTimeout(changeH1onSetTimeout, 2000);
