/* exported union */

// declare a new variable set to an empty array
// declare a variable equal to both arrays combined
// if the new array variable does not include the next index value of the combined arrays, add it to the new array variable
// return the new array variable

function union(first, second) {
  var unionArray = [];
  var combinedArrays = first.concat(second);

  for (var i = 0; i < combinedArrays.length; i++) {
    if (unionArray.includes(combinedArrays[i]) === false) {
      unionArray.push(combinedArrays[i]);
    }
  }

  return unionArray;
}
