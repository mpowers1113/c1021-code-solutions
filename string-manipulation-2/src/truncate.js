/* exported truncate */
// create variable for new string
// access string indexes
// update value of variable with new string length
// add ellipses
// return string variable

function truncate(length, string) {
  var shortString = string.slice(0, length) + '...';
  return shortString;
}
