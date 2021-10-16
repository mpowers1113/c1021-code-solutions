/* exported isUpperCased */

// make variable of word in all capitals
// compare it to original word
// determine whether they are identical
// if they are not, return false

function isUpperCased(word) {
  var allCaps = word.toUpperCase();
  if (word === allCaps) {
    return true;
  } else {
    return false;
  }
}
