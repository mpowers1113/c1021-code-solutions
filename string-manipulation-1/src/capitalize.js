/* exported capitalize */

// access first index of string
// check each index for the first one
// if it is the first index, capitalize it
// add it to the new string variable
// return new concatinated string

function capitalize(word) {
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizedWord += word[0].toUpperCase();
    } else {
      capitalizedWord += word[i].toLowerCase();
    }
  }
  return capitalizedWord;
}
