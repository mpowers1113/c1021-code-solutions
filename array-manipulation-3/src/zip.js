/* exported zip */

// declare a variable and set it to an empty array
// loop through first array and combine index with same index value of second array
// add each value pair to a new variable called chunk
// add chunk to empty array
// clear chunk
// if the first array is longer than the second, splice array variable at second's length and vice versa
// return array variable

function zip(first, second) {
  var zipArray = [];
  for (var i = 0; i < first.length; i++) {
    var eachIndexValFirst = first[i];
    var zipChunk = [];
    zipChunk = [eachIndexValFirst, second[i]];
    zipArray.push(zipChunk);
    zipChunk = [];
  }
  if (first.length > second.length) {
    zipArray.splice(second.length);
  } else {
    zipArray.splice(first.length);
  }
  return zipArray;
}
