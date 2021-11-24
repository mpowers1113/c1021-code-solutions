/* exported dropRight */
// create a new variable to duplicate array param
// create a new array variable to return
// access array param via indexes
// adjust condition expression with count param
// add values to array variable
// return array

function dropRight(array, count) {
  var duplicateArray = array;
  var shortenedArray = [];
  if (duplicateArray.length === 0) {
    return shortenedArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    shortenedArray.push(array[i]);
  }
  return shortenedArray;
}
