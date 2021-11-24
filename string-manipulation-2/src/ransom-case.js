/* exported ransomCase */
// set new string variable to empty
// access parameter's indexes
// check if each index is odd or even
// assign lowercase if even, uppercase if odd
// add each index to string variable
// return string

function ransomCase(string) {
  var evenOddString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      evenOddString += string[0].toLowerCase();
    } else if (i % 2 === 1) {
      evenOddString += string[i].toUpperCase();
    } else {
      evenOddString += string[i].toLowerCase();
    }
  }
  return evenOddString;
}
