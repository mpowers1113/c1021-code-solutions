/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    return numbers.reduce((acc, cur) => acc + cur);
  },
  getAverage: function (numbers) {
    var sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
  }
};
