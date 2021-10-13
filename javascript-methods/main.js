var smallBoy = 1;
var mediumBoy = 2;
var bigBoy = 10;

var maximumValue = Math.max(smallBoy, mediumBoy, bigBoy);

console.log('maximum value', maximumValue);

var heroes = ['Nietzsche', 'Chesterton', 'Paglia', 'Mishima'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('random index', randomIndex);

var randomHero = heroes[randomIndex];

console.log('random hero', randomHero);

var library = [{ title: 'Beyond Good & Evil', author: 'Friedrich Nietzsche' }, { title: 'Orthodoxy', author: 'G.K. Chesterton' }, { title: 'Sun & Steel', author: 'Yukio Mishima' }];

var lastBook = library.pop();

console.log('last book', lastBook);

var firstBook = library.shift();

console.log('first book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library', library);

var fullName = 'Matt Powers';

var firstAndLastName = fullName.split(' ');

console.log('first and last name', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('say my name', sayMyName);
