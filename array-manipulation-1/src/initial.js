/* exported initial */

// make a new empty array variable
// access array indexes
// add each index to new array except for the last one
// return the new array variable

function initial(array) {
  var skipLastIndex = [];
  for (var i = 0; i < array.length - 1; i++) {
    skipLastIndex.push(array[i]);
  }
  return skipLastIndex;
}
