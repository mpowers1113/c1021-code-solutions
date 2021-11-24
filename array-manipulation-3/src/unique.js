/* exported unique */

// declare a new variable and set it to an empty array
// if the empty array does not include the next index value of the input array, add it to the array variable
// return the array variable

function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    var eachIndexVal = array[i];
    if (!uniqueArray.includes(eachIndexVal)) {
      uniqueArray.push(eachIndexVal);
    }
  }
  return uniqueArray;
}
