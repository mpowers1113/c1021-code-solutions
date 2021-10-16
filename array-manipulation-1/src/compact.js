/* eslint-disable eqeqeq */
/* eslint-disable no-self-compare */
/* exported compact */
// create new array variable
// access array via indexes
// skip omitted values
// add indexes to new array variable
// return new array variable

function compact(array) {
  var acceptableValues = [];
  var unacceptableValues = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === '' || array[i] != array[i] || array[i] === 0 || array[i] === null || array[i] === undefined) {
      unacceptableValues.push(array[i]);
    } else {
      acceptableValues.push(array[i]);
    }
  }
  return acceptableValues;
}
