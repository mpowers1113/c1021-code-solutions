/* exported capitalizeWord */

// create new string variable
// access string parameter's indexes
// at string-param's first index, capitalize
// add capitalize to new string
// the following indexes lowercased
// add lowercased to new string

// if lowercased parameter is javascript, return proper capitalized JavaScript

function capitalizeWord(word) {
  var nowCapitalized = '';
  for (var i = 0; i < word.length; i++) {
    if (word.toUpperCase() === 'JAVASCRIPT') {
      return 'JavaScript';
    } else if (i === 0) {
      nowCapitalized += word[0].toUpperCase();
    } else {
      nowCapitalized += word[i].toLowerCase();
    }
  }
  return nowCapitalized;
}
