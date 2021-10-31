/* exported invert */

// create new variable for inverted data
// get data in pairs from source
// for each pair, reassign second value as first value
// add each inverted pair to new variable
// return new variable

// ----------------------Example---------------------

// invert({ age: NaN, occupation: 'programmer', language: 'JavaScript' })
// -> { NaN: 'age', programmer: 'occupation', JavaScript: 'language' }

function invert(source) {
  var invertedSource = {};
  var entries = Object.entries(source);
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    invertedSource[entry[1]] = entry[0];
  }
  return invertedSource;
}
