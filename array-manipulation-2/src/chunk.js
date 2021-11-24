/* exported chunk */
// create duplicate array for param
// create empty array variable to add values
// create empty array variable for each added array
// access array via indexes
// add values to empty array for each 'size' chunk
// create variable to check if last value of chunk exists
// add chunk to array variable
// clear empty array of chunk
// return array variable

function chunk(array, size) {
  var duplicateArray = array;
  var arrayOfChunks = [];
  var currentChunk = [];
  if (duplicateArray.length === 0) {
    return arrayOfChunks;
  }
  for (var i = 0; i < duplicateArray.length; i++) {

    if (currentChunk.length === size) {

      arrayOfChunks.push(currentChunk);
      currentChunk = [duplicateArray[i]];

    } else {
      currentChunk.push(duplicateArray[i]);

    }
  }
  arrayOfChunks.push(currentChunk);
  return arrayOfChunks;
}
