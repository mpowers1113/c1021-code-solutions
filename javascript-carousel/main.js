var $image = document.querySelector('.image');
var $dots = document.querySelectorAll('.fa-circle');
var $leftArrow = document.querySelector('.fa-chevron-left');
var $rightArrow = document.querySelector('.right');

var currentImageArrayIndex = 0;

var imageArray = [
  './images/001.png', './images/004.png', './images/007.png', './images/025.png', './images/039.png'
];

function changeImageHandler(event) {
  var whichArrow = event.target.getAttribute('data-view') || 'right';
  if (whichArrow === 'left' && currentImageArrayIndex === 0) {
    currentImageArrayIndex = 4;
  } else if (whichArrow === 'left' && currentImageArrayIndex > 0) {
    currentImageArrayIndex--;
  }
  if (whichArrow === 'right' && currentImageArrayIndex === 4) {
    currentImageArrayIndex = 0;
  } else if (whichArrow === 'right' && currentImageArrayIndex < 4) {
    currentImageArrayIndex++;
  }
  $image.setAttribute('style', `background-image: url(${imageArray[currentImageArrayIndex]})`);
  for (var i = 0; i < $dots.length; i++) {
    if (i === currentImageArrayIndex) {
      $dots[i].setAttribute('class', 'fas fa-circle');
    } else {
      $dots[i].setAttribute('class', 'far fa-circle');
    }
  }
  clearInterval(myCarousel);
  myCarousel = setInterval(carouselHandler, 2000);
}

$leftArrow.addEventListener('click', changeImageHandler);
$rightArrow.addEventListener('click', changeImageHandler);

function carouselHandler() {
  if (currentImageArrayIndex === 4) {
    currentImageArrayIndex = 0;
  } else {
    currentImageArrayIndex++;
  }
  $image.setAttribute('style', `background-image: url(${imageArray[currentImageArrayIndex]})`);
  for (var i = 0; i < $dots.length; i++) {
    if (i === currentImageArrayIndex) {
      $dots[i].setAttribute('class', 'fas fa-circle');
    } else {
      $dots[i].setAttribute('class', 'far fa-circle');
    }
  }
}

var myCarousel = setInterval(carouselHandler, 2000);
