/* exported isVowel */

// create a variable of all vowels capitalized
// create a variable of the word capitalized
// create a variable that holds true or false value
// check if the capitalized word is one of the vowels
// if it is, return true
// if not, return false

function isVowel(char) {
  var vowels = 'AEIOU';
  var capitalizedChar = char.toUpperCase();
  var isVowel = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === capitalizedChar[0]) {
      isVowel = true;
    }
  }
  return isVowel;
}
