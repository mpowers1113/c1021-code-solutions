var $inputs = document.getElementById('contact-form').elements;
var $form = document.getElementById('contact-form');

$form.addEventListener('submit', getFormValues);

function getFormValues(event) {
  event.preventDefault();
  var userInput = {
    name: $inputs.name.value,
    email: $inputs.email.value,
    message: $inputs.message.value
  };
  console.log('userInput', userInput);
  $inputs.name.value = '';
  $inputs.email.value = '';
  $inputs.message.value = '';
}
