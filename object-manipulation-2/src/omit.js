/* exported omit */

// create new variable for data
// access paired data from source variable
// if first index of paired source data does not include key variable, add paired source data to new variable
// return new variable

function omit(source, keys) {
  var omitObj = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var sourceKey = sourceKeys[i];
    if (!keys.includes(sourceKey)) {
      omitObj[sourceKey] = source[sourceKey];
    }
  }
  return omitObj;
}
