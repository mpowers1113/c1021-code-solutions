/* exported getKeys */
// create array variable for keys
// access keys in object
// add keys to array variable
// return array variable

function getKeys(object) {
  var theKeys = [];
  for (var key in object) {
    theKeys.push(key);
  }
  return theKeys;
}
