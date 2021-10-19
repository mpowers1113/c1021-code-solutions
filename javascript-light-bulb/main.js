var $lightbulb = document.querySelector('.column');
var $container = document.querySelector('.container');

$lightbulb.addEventListener('click', toggleLightbulb);

var onOff = true;

function toggleLightbulb(event) {
  onOff = !onOff;
  if (onOff === false) {
    $lightbulb.className = 'column off';
    $container.className = 'container off-container';
  } else {
    $lightbulb.className = 'column on';
    $container.className = 'container';
  }
}
