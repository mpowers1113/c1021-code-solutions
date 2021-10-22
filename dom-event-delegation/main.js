var $taskListUl = document.querySelector('.task-list');
var $taskSpan = document.querySelectorAll('span');
var $goalsButton = document.querySelector('.goals-button');

$taskListUl.addEventListener('click', clickEventHandler);
$goalsButton.addEventListener('click', addGoals);

function clickEventHandler(event) {
  console.log(event.target, event.target.tagName);
  console.log('closest task list item is ', event.target.closest('.task-list-item'));
  if (event.target && event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}

var WebDevGoals = [{
  goal: 'Beat CSS',
  likelihood: 'High'
},
{
  goal: 'Pwn JavaScript',
  likelihood: 'Medium'
},
{
  goal: 'Make React My B****',
  likelihood: 'High'
},
{
  goal: 'Solve Any Algorithm',
  likelihood: 'Low'
},
{
  goal: 'Stave Off Carpal Tunnel',
  likelihood: 'Low'
}];

function addGoals(event) {
  for (var i = 0; i < $taskSpan.length; i++) {
    var eachTask = $taskSpan[i];
    eachTask.textContent = WebDevGoals[i].goal;
    var likely = document.createElement('span');
    likely.textContent = 'Likelihood: ' + WebDevGoals[i].likelihood;
    likely.setAttribute('class', 'likely');
    eachTask.appendChild(likely);
    if (likely.textContent.includes('High')) {
      likely.setAttribute('class', 'likely high');
    } else if (likely.textContent.includes('Medium')) {
      likely.setAttribute('class', 'likely medium');
    } else {
      likely.setAttribute('class', 'likely low');
    }
  }
}
