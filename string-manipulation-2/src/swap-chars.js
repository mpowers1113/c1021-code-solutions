/* exported swapChars */
// create variable for new string
// access string param via indexes
// check if string param's index is equal to firstIndex or secondIndex argument
// if equal, assign index to argument
// if not, add current index to new string
// return string variable

function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedString += string[firstIndex];
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}
