const htmlButton = document.getElementById('html');
const cssButton = document.getElementById('css');
const jsButton = document.getElementById('javascript');

const appendHtml = () => {
  var newLi = document.createElement('li');
  newLi.innerHTML = `<h1> You clicked the HTML button.</h1>
  <p>Tim Berners-Lee, a scientist and academic, was the primary author of HTML, with the assistance of his colleagues at CERN, an international scientific organization based in Geneva. Berners-Lee invented the World Wide Web in 1989 at CERN. He was named one of Time magazine's 100 most important people of the 20th century for this accomplishment.</p>
  </li>`;
  document.body.appendChild(newLi);
  htmlButton.disabled = true;
};

const appendJs = () => {
  var newLi = document.createElement('li');
  newLi.innerHTML = '<h1>You clicked the JavaScript button.</h1><p>JavaScript was invented by Brendan Eich while working on the Netscape Navigator web browser at Netscape Communications Corporation. Eich developed the language, under the code name Mocha, as a lightweight programming language that anyone could use to complement Java.</p></li>';
  document.body.appendChild(newLi);
  jsButton.disabled = true;
};

const appendCss = () => {
  var newLi = document.createElement('li');
  newLi.innerHTML = '<h1>You clicked the CSS button.</h1><p>Among the people who responded to the first draft of CSS was Bert Bos. At that time, he was building Argo, a highly customizable browser with style sheets, and he decided to join forces with Håkon. Both of the two proposals look different from present-day CSS, but it is not hard to recognize the original concepts.</p></li>';
  document.body.appendChild(newLi);
  cssButton.disabled = true;
};

htmlButton.addEventListener('click', appendHtml);
jsButton.addEventListener('click', appendJs);
cssButton.addEventListener('click', appendCss);
