/* exported isLowerCased */

// make a new variable of the word in all lowercase
// compare it to the original word
// if they are the same, return true
// if they are different, return false

function isLowerCased(word) {
  var allLowerCase = word.toLowerCase();
  if (word === allLowerCase) {
    return true;
  } else {
    return false;
  }
}
