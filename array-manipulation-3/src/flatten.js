/* exported flatten */
// create a single bundle
// take input bundle of values, and add each value to single bundle
// if input bundle is empty, return single empty bundle
// output single bundle of values

// flatten([['foo', 'bar'], ['baz', 'qux']]);
// // -> ["foo", "bar", "baz", "qux"]

function flatten(array) {
  var singleBundle = []; // ['foo', 'bar']

  if (array.length === 0) {
    return singleBundle;
  }

  for (var i = 0; i < array.length; i++) {
    var potentialSubArray = array[i]; // ['foo','bar]
    if (Array.isArray(potentialSubArray)) {
      singleBundle.push(...potentialSubArray);
    } else {
      singleBundle.push(potentialSubArray);
    }
  }

  return singleBundle;
}
