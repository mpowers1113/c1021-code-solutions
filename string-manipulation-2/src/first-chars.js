/* exported firstChars */
// create new variable for string
// if string is empty, return empty string
// access string via indexes
// if string variable is equal to length argument, return new string

function firstChars(length, string) {
  var newString = '';
  var lengthIfTooLong = string.length;
  if (string === '') {
    return newString;
  }
  if (string.length < length) {
    length = lengthIfTooLong;
  }
  for (var i = 0; i < (string.length); i++) {
    newString += string[i];
    if (newString.length === length) {
      return newString;
    }
  }
}
