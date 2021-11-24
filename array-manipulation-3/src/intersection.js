/* exported intersection */

// Examples
// intersection([2, 1], [2, 3]);
// // -> [2]
// intersection(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
// // -> ["css"]
// intersection(
//   ['a', 'link', 'to', 'the', 'past'],
//   ['the', 'adventure', 'of', 'link']
// )
// -> ["link", "the"]

// create a variable for new array that will contain common values
// combine the arrays into a single array
// use a hashmap to find values that appear more than once
// for values that appear more than once, add them to the new array
// return the new array

function intersection(first, second) {
  var newArray = [];
  var combinedFirstSecond = first.concat(second);
  if (typeof first[0] === 'number') {
    var sortedCombined = combinedFirstSecond.sort();
    for (var i = 0; i < sortedCombined.length; i++) {
      if (sortedCombined[i] === sortedCombined[i + 1]) {
        newArray.push(sortedCombined[i]);
      }
    }
    return newArray;
  } else {

    var combinedCharMap = buildCharMap(combinedFirstSecond);
    for (var key in combinedCharMap) {
      if (combinedCharMap[key] > 1) {
        newArray.push(key);
      }
    }
    return newArray;
  }

}

function buildCharMap(newCombined) {
  var charMap = {};
  for (var i = 0; i < newCombined.length; i++) {
    var eachArrayValue = newCombined[i];
    if (!charMap[eachArrayValue]) {
      charMap[eachArrayValue] = 1;
    } else {
      charMap[eachArrayValue]++;
    }
  }
  return charMap;
}
