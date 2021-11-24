/* exported take */

// create variable for new array
// access array via indexes
// check each array count times
// add counted value to array
// return new array

function take(array, count) {
  var shortenedArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      shortenedArray = [];
    } else {
      shortenedArray.push(array[i]);
    }
  }
  return shortenedArray;
}
