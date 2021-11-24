/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var result = this.firstName + ' ' + this.lastName;
  return result;
};

Student.prototype.getIntroduction = function () {
  var result = `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`;
  return result;
};
