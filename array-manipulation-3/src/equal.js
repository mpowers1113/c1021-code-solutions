/* exported equal */
// create a variable for the equality and set it to false
// if first and second arrays are uneven in length, return false
// if first and second arrays are empty, return true
// for each index of the first array, check if it's equal to the same index of the second array
// if it's equal, update equal variable to true
// if it's not, update equal variable to false
// return equal variable

function equal(first, second) {

  var isEqual = false;

  if (first.length !== second.length) {
    return false;
  }
  if (first.length === 0 && second.length === 0) {
    return true;
  }
  for (var i = 1; i < first.length; i++) {
    var eachFirstIndexValue = first[i];
    if (eachFirstIndexValue === second[i]) {
      isEqual = true;
    } else {
      isEqual = false;
      return isEqual;
    }
  }
  return isEqual;
}
