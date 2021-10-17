/* exported takeRight */
// create a new array and set it equal to array param
// create a new array for output of taken values
// check array param for required values
// add values to new array variable
// return array variable

function takeRight(array, count) {
  var duplicateArray = array;
  var takenArray = [];
  if (duplicateArray.length === 0) {
    return takenArray;
  }
  for (var i = array.length - count; i < array.length; i++) {
    takenArray.push(duplicateArray[i]);
  }
  return takenArray;
}
