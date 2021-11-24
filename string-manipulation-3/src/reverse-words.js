/* exported reverseWords */
// make a blank sentence with a name
// for a given sentence, each word should be written backwards
// add each backwards word to blank sentence
// output backwards sentence

// 'All Code All Day' ===> "llA edoC llA yaD"

function reverseWords(string) {
  var backwardsWords = []; // ['llA']
  var words = string.split(' '); // ['All', 'Code', 'All', 'Day]

  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i]; // 'All'
    var reversedWord = '';
    for (var j = 0; j < currentWord.length; j++) {
      var letter = currentWord[j]; // A
      reversedWord = letter + reversedWord; // 'A' + ' '
    }
    backwardsWords.push(reversedWord); // ['llA']
  }
  return backwardsWords.join(' ');
}
