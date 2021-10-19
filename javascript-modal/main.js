var $overlay = document.querySelector('.overlay');
var $openModalButton = document.querySelector('.open-modal');
var $closeModalButton = document.querySelector('.close-modal');

$openModalButton.addEventListener('click', toggleModal);
$closeModalButton.addEventListener('click', toggleModal);

var modalSwitch = true;

function toggleModal(event) {
  modalSwitch = !modalSwitch;
  if (modalSwitch === true) {
    $overlay.className = 'overlay hidden';
  } else {
    $overlay.className = 'overlay';
  }
}
