/* exported lastChars */
// create variable for new string
// access string via indexes
// return new string

function lastChars(length, string) {
  var lastBits = string.slice(-length);
  return lastBits;
}
