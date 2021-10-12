function convertMinutesToSeconds(min) {
  return min * 60;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

var person = { firstName: 'Matt', lastName: 'Powers' };

var testArray = [0, 1, 2, 3, 4];

convertMinutesToSeconds(5);

greet('Matt');

getArea(3, 5);

getFirstName(person);

getLastElement(testArray);
