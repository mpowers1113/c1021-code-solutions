/* exported pick */
// create new object variable
// access object keys and values
// if the first index of source pairs includes either index of keys, add sour pair to new object
// return new object

// pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']) // -> { foo: 1, baz: 3 }

function pick(source, keys) {
  var pickObject = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var sourceKey = sourceKeys[i];
    if (keys.includes(sourceKey) && source[sourceKey] !== undefined) { // ['foo', 'baz'].includes['foo',1]
      pickObject[sourceKey] = source[sourceKey];
    }
  }
  return pickObject;
}
