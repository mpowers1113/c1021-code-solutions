/* exported getWords */

// create a variable for new spaced words
// create a variable for current word
// inspect string for spaces
// if spaces exist, add that value to current word
// add the current word to the array
// clear the current word variable
// repeat this process for each instance of a space
// FIND OUT HOW TO RETURN EMPTY ARRAY WITHOUT UPDATING CURRENT WORD
// return the array

function getWords(string) {
  var wordsArray = [];
  var currentWord = '';
  if (string === '') {
    return wordsArray;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      wordsArray.push(currentWord);
      currentWord = '';
    }
  }
  wordsArray.push(currentWord);
  return wordsArray;
}
