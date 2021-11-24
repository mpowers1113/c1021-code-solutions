/* exported drop */
// create variable for new array
// access array via indexes
// check each index for value of count param which is equal to initialization expression
// add count amount of indexes to new array
// return new array

function drop(array, count) {
  var duplicateArray = array;
  var shorterArray = [];
  for (var i = count; i < duplicateArray.length; i++) {
    shorterArray.push(duplicateArray[i]);
  }
  return shorterArray;
}
