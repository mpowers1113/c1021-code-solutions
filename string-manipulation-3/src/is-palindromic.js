/* exported isPalindromic */
// create new variable for reversed string that's an array
// add array backwards into string
// compare new variable to reversed string
// return true or false

function isPalindromic(string) {
  var backwardsString = '';
  var spaceLessString = string.replace(/\s/g, '');

  for (var i = 0; i < spaceLessString.length; i++) {
    backwardsString = spaceLessString[i] + backwardsString;
  }
  if (backwardsString === spaceLessString) {
    return true;
  } else {
    return false;
  }
}
