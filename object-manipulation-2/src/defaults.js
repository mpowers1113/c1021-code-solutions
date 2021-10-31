/* exported defaults */

// Create new variable and assign it to an empty array
// Goal: Add data from source variable that's not included in target variable
// Get data from source
// Get data from target
// if source data is not included in target, add it to target

// --------------Example----------------------//

// const target = {
//   foo: 1,
//   baz: 3
// };
// //const source = {
//   bar: 2
// };
// defaults(target, source);
// console.log(target) // -> { foo: 1, bar: 2, baz: 3 }

function defaults(target, source) {
  var newDefaultObj;

  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var eachSourceKey = sourceKeys[i];
    if (targetKeys.includes(eachSourceKey) === false) {
      target[eachSourceKey] = source[eachSourceKey];
    }
    newDefaultObj = target;
  }
  return newDefaultObj;

}
