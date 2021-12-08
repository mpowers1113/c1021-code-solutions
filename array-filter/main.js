const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(num => num % 2 === 0);

const orderFive = numbers.filter(num => num > 5);

const startsWithE = names.filter(each => each[0] === 'E');

const haveD = names.filter(word => word.toLocaleLowerCase().includes('d'));

console.log('evenNumbers', evenNumbers, 'orderFive', orderFive, 'startsWithE', startsWithE, 'haveD', haveD);
