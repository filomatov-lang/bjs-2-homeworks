function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  this?.marks === undefined ? undefined : this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return this?.marks === undefined || this.marks.length === 0  ? 0 : this.marks.reduce((sum, assessment, index, marks) => sum + assessment / marks.length, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}