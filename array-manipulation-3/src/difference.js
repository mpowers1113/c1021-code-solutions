/* exported difference */
// Parameters
// first - Any JavaScript Array
// second - Any JavaScript Array
// Return Value
// A new Array containing unique values found in both first and second. The order of result values is determined by the order they occur.
// Examples
// difference([2, 1], [2, 3]);
// // -> [1, 3]
// difference(['html', 'css', 'javascript'], ['php', 'css', 'sql']);
// // -> ["html", "javascript", "php", "sql"]
// difference(
//   ['a', 'link', 'to', 'the', 'past'],
//   ['the', 'adventure', 'of', 'link']
// )
// // -> ["a", "to", "past", "adventure", "of"]

// PseudoCode:

// decalre a new empty array for returned symmetric array
// combine the two arrays
// if the rest of the array does not include the index in question, push it to the symmetric array
// return the symmetic array

// function difference(first, second) {
//   var symmeticArray = [];
//   var combinedFirstSecond = first.concat(second);
//   for (var i = 0; i < combinedFirstSecond.length; i++) {
//     var includesThisVal = combinedFirstSecond.splice(i, 1);
//     if (!combinedFirstSecond.includes(includesThisVal[0])) {
//       symmeticArray.push(includesThisVal[0]);
//       includesThisVal = undefined;
//     }
//   }
//   return symmeticArray;
// }

function difference(first, second) {
  var symmetricArray = [];
  var numberSymmetric = [];
  var combinedFirstSecond = first.concat(second);

  if (typeof combinedFirstSecond[0] === 'number') {
    var numberMap = buildCharMap(combinedFirstSecond);
    for (var key in numberMap) {
      if (numberMap[key] <= 1) {
        numberSymmetric.push(Number(key));
      }
    }
    return numberSymmetric;
  } else {

    var combinedCharMap = buildCharMap(combinedFirstSecond);
    for (var newKey in combinedCharMap) {
      if (combinedCharMap[newKey] <= 1) {
        symmetricArray.push(newKey);
      }
    }
    return symmetricArray;
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
