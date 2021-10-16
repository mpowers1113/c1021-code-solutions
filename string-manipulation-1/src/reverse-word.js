/* exported reverseWord */
// access the word via indexes
// create variable for new string
// add each word's value to the new string via indexes backwards
// return the new string

function reverseWord(word) {
  var reversedWord = '';
  for (var i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  return reversedWord;
}
