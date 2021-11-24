/* exported titleCase */

// make a new blank sentence
// for the input sentence, capitalize each new word except for articles, conjunctions, and prepositions
// hypenated words must have next letter capitalized
// words after spaces must be capitalized
// the letter of the first word must always be capitalized
// the last letter of the last word must not have a space
// add new word to blank sentence
// output is blank sentence

// titleCase('speaking Javascript: an in-depth guide for programmers')
// // -> "Speaking JavaScript: An In-Depth Guide for Programmers"

// function buildCharMap(input) {
//   var charMap = {};
//   for (var i = 0; i < input.length; i++) {
//     var letter = input[i];
//     if (charMap[letter]) {
//       charMap[letter]++;
//     } else {
//       charMap[letter] = 1;
//     }
//   }
//   return charMap;
// }

// function titleCase(title) {

//   var nowTitleCased = '';
//   var wordChunk = '';
//   var alwaysLowerCase = ['a', 'to', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'and', 'nor', 'but'];
//   var separatedByWord = title.split(' ');// ['speaking', 'javascript', ...]

//   for (var i = 0; i < separatedByWord.length; i++) {
//     var word = separatedByWord[i];

//     if (i !== 0 && alwaysLowerCase.includes(word)) {
//       wordChunk += word.toLowerCase();
//       nowTitleCased += wordChunk + ' ';
//       wordChunk = '';
//     }
//     if (!alwaysLowerCase.includes(word) && wordChunk.length === 0) {
//       var capitalized = word.split('');
//       for (var j = 0; j < capitalized.length; j++) {
//         var capitalizedLetter = capitalized[j];

//         if (wordChunk.length === 0) {
//           wordChunk += capitalizedLetter[0].toUpperCase();
//         } else if (capitalizedLetter[j] === ' ' || capitalizedLetter[j] === '-') {
//           wordChunk += capitalizedLetter[j];
//           nowTitleCased += wordChunk;
//           wordChunk = '';
//           nowTitleCased += wordChunk;
//         } else {
//           wordChunk += capitalizedLetter;
//         }
//       }
//       nowTitleCased += wordChunk + ' ';
//       wordChunk = '';
//     }
//   }
//   return nowTitleCased;
// }

function titleCase(title) {

  var hyphenCheckArray = [];
  var finalTitleCaseArray = [];

  var titleCaseArray = [];

  var alwaysLowerCase = ['a', 'to', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'and', 'nor', 'but'];

  var words = title.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    if (i === 0 || words[i - 1][words[i - 1].length - 1] === ':') {
      titleCaseArray.push(words[i][0].toUpperCase() + words[i].slice(1));
    } else if (alwaysLowerCase.includes(words[i])) {
      titleCaseArray.push(words[i]);
    } else if (words[i].toLowerCase() === 'javascript') {
      titleCaseArray.push('JavaScript');

    } else if (words[i].toLowerCase() === 'api') {
      titleCaseArray.push('API');
    } else if (i > 0) {

      titleCaseArray.push(words[i][0].toUpperCase() + words[i].slice(1));
    }

  }
  for (var j = 0; j < titleCaseArray.length; j++) {
    if (titleCaseArray[j].includes('-')) {
      var hyphened = titleCaseArray[j].split('-');
      hyphened = hyphened[0][0].toUpperCase() + hyphened[0].slice(1) + '-' + hyphened[1][0].toUpperCase() + hyphened[1].slice(1);
      hyphenCheckArray.push(hyphened);
    } else {
      hyphenCheckArray.push(titleCaseArray[j]);
    }
  }
  for (var k = 0; k < hyphenCheckArray.length; k++) {
    if (hyphenCheckArray[k] === 'Javascript:') {
      finalTitleCaseArray.push('JavaScript:');
    } else if (hyphenCheckArray[k] === 'API:') {
      finalTitleCaseArray.push('API:');
    } else {
      finalTitleCaseArray.push(hyphenCheckArray[k]);
    }
  }
  finalTitleCaseArray = finalTitleCaseArray.join(' ');
  return finalTitleCaseArray;
}
