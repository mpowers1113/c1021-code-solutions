/* exported isAnagram */
// (buildCharFrequencies(abcc) -> { a: 1, b: 1, c: 2 }
// make a hashmap/charmap for each string
// declare a varialbe anagram and set it to true
// get the keys of either string
// if the key value pairs of the first string's charmap are not strictly equal to the second strings, update anagram to be false
// return anagram

function buildCharFrequencies(inputString) {
  var withoutSpaces = inputString.split(' ').join('');
  var frequencies = {};

  for (var i = 0; i < withoutSpaces.length; i++) {
    var char = withoutSpaces[i];
    if (frequencies[char]) {
      frequencies[char] += 1;
    } else {
      frequencies[char] = 1;
    }
  }
  return frequencies;
}

function isAnagram(firstString, secondString) {
  var firstFrequencies = buildCharFrequencies(firstString); // { a: 1, b: 1, c: 2 }
  var secondFrequencies = buildCharFrequencies(secondString); // { a: 1, b: 1, c: 1 }

  var anagram = true;
  const firstKeys = Object.keys(firstFrequencies); // [a, b, c]
  for (var i = 0; i < firstKeys.length; i++) {
    var key = firstKeys[i];
    if (secondFrequencies[key] !== firstFrequencies[key]) {
      anagram = false;
    }

  }
  return anagram;
}
