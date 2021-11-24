/* exported toObject */
// create new object variable
// access array via indexes
// add first index as key
// add second index as value
// return object variable

function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
