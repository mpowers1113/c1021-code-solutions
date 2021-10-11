var student = {
  firstName: 'Matt',
  lastName: 'Powers',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('full name', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Copywriter';

console.log('lives in irvine', student.livesInIrvine);

console.log('previous occupation', student.previousOccupation);

console.log('student object', student);

var vehicle = {
  make: 'Chevy',
  model: 'Nova SS',
  year: 1970
};

vehicle['color'] = 'black';

console.log('value of vehicle color', vehicle['color']);

vehicle['isConvertible'] = false;

console.log('value of is it a convertible', vehicle['isConvertible']);

console.log('vehicle color', vehicle['color']);

console.log('is convertible', vehicle['isConvertible']);

console.log('vehicle object', vehicle);

var pet = {
  name: 'Zoe',
  type: 'Boston Terrier'
};

delete pet.name;

delete pet.type;

console.log('pet object', pet);
