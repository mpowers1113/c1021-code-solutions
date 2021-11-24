/* exported capitalizeWords */
// create variable for new string
// create variable for current word
// access string param via indexes
// check indexes for spaces, which indicate a new word
// if spaces exist, capitalize first index of current word
// add current word to new string with space
// clear current word
// add current word to end of new string at the end of loop
// return new string

function capitalizeWords(string) {
  var newTitleCaseString = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && currentWord === '') {
      currentWord += string[i].toUpperCase();
    } else if (string[i] !== ' ') {
      currentWord += string[i].toLowerCase();
    } else {
      newTitleCaseString += currentWord + ' ';
      currentWord = '';
    }
  }
  newTitleCaseString += currentWord;
  return newTitleCaseString;
}
