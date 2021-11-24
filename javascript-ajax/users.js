var $users = document.querySelector('#user-list');

function userRequestHandler() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var users = xhr.response;
    if (xhr.status === 200) {
      for (var i = 0; i < users.length; i++) {
        var eachUser = users[i];
        var $li = document.createElement('li');
        $li.textContent = eachUser.name;
        $users.appendChild($li);
      }
    }
  });
  xhr.send();
}

userRequestHandler();
