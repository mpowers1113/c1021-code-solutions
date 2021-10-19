var $letters = document.querySelectorAll('span');

document.addEventListener('keydown', typeCheck);

var grumpyWizards = 'grumpy wizards make toxic brew';

var letterIndex = 0;

function typeCheck(event) {
  if (event.key === grumpyWizards[letterIndex]) {
    $letters[letterIndex].className = 'correct';
    letterIndex++;
    $letters[letterIndex].className = 'underlined';

  } else {
    $letters[letterIndex].className = 'incorrect';
  }
}
