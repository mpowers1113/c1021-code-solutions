function handleClick(event) {
  console.log('button clicked', event, event.target);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered', event, event.target);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked', event, event.target);
}

var $doubleClickButton = document.querySelector('.double-click-button');

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
