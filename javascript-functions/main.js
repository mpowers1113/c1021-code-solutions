function convertMinutesToSeconds(min) {
  console.log('mintues to seconds', min * 60);
}

function greet(name) {
  var helloThere = 'Hey, ' + name;
  console.log('greeting', helloThere);
}

function getArea(width, height) {
  console.log('area is ', width * height);
}

function getFirstName(person) {
  console.log('first name is ', person.firstName);
}

function getLastElement(array) {
  console.log('array length is ', array[array.length - 1]);
}

convertMinutesToSeconds(5);

greet('Matt');

getArea(3, 5);

getFirstName({ firstName: 'Matt', lastName: 'Powers' });

getLastElement([0, 1, 2, 3, 4]);
