/* exported findIndex */
function findIndex(array, value) {
  var indexFound = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexFound = i;
      break;
    }
  }
  return indexFound;
}
