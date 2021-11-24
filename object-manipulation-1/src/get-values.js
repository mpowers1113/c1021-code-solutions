/* exported getValues */
// create an empty array variable
// access objects keys and values
// add values to array
// return array

function getValues(object) {
  var arrayOfKeys = [];
  for (var key in object) {
    arrayOfKeys.push(object[key]);
  }
  return arrayOfKeys;
}
