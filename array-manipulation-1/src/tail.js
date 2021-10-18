/* exported tail */
// Access array indexes
// create a new empty array variable
// Skip the first index
// add the following indexes to empty array
// if the first array is empty, return an empty array
// return array variable

function tail(array) {
  var skippedFirstIndex = [];
  for (var i = 1; i < array.length; i++) {
    skippedFirstIndex.push(array[i]);
  }
  return skippedFirstIndex;
}
