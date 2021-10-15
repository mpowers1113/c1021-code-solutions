/* exported getStudentNames */
// function getStudentNames(students) {
//   var newArr = students.map(person => person.name);
//   return newArr;
// }

function getStudentNames(students) {
  var newArr = [];
  for (var i = 0; i < students.length; i++) {
    for (var name in students[i]) {
      newArr.push(students[i][name]);
    }
  }
  return newArr;
}
