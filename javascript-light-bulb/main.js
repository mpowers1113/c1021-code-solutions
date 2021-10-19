var $lightbulb = document.querySelector('.column');
var $container = document.querySelector('.container');

$lightbulb.addEventListener('click', toggleLightbulb);

var onOff = 2;

function toggleLightbulb(event) {
  onOff++;
  if (onOff % 2 === 1) {
    $lightbulb.className = 'column ' + 'off';
    $container.className = 'container ' + 'off-container';
  } else {
    $lightbulb.className = 'column ' + 'on';
    $container.className = 'container';
  }
}
