/* exported includes */
// create new variable set to false
// access array input param
// check if value param is equal to input params
// if it is, change new variable to true
// return new variable

function includes(array, value) {
  var arrayIncludesVal = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      arrayIncludesVal = true;
    }
  }
  return arrayIncludesVal;
}
