/* exported todos */

var todos = [];

var previousTodosJSON = window.localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {

  var parsedTodos = JSON.parse(previousTodosJSON);
  todos = parsedTodos;
}
window.addEventListener('beforeunload', unloadHandler);

function unloadHandler(event) {
  event.preventDefault();
  var todosJSON = JSON.stringify(todos);
  window.localStorage.setItem('javascript-local-storage', todosJSON);
}
