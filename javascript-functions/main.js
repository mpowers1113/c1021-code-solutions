function convertMinutesToSeconds(min) {
  return min * 60;
}

function greet(name) {
  var helloThere = 'Hey, ' + name;
  return helloThere;
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

console.log('convert 5 minutes to seconds:', convertMinutesToSeconds(5));

console.log('greet matt:', greet('Matt'));

console.log('area of 5 and 3 is', getArea(3, 5));

console.log('first name is', getFirstName({ firstName: 'Matt', lastName: 'Powers' }));

console.log('last element is', getLastElement([0, 1, 2, 3, 4]));
