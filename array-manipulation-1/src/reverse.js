/* exported reverse */
// make new empty array variable
// access array indexes
// add index to new array variable backwards
// return new array variable

function reverse(array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}
