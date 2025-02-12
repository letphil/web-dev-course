// init students array
const students = [];

// add student
function addStudent(name, grade) {
  students.push({
    name,
    grade,
  });
}

// function to remoe student
function removeStudent(name) {
  const index = students.findIndex((student) => student.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(name, "has been removed");
  } else {
    console.log(name, "was not found");
  }
}

// function to filter students
function filterTopStudents(minGrade) {
  return students.filter((student) => student.grade >= minGrade);
}

// function to map students in formatted list
function formatStudentList() {
  return students.map((student) => `${student.name} - Grade: ${student.grade}`);
}

// start
console.log("students =", students);

// add students
addStudent("Alice", 85);
addStudent("Bob", 90);
addStudent("Charles", 78);
addStudent("Davie", 60);
addStudent("Emma", 92);

console.log("STUDENT LIST:");
console.log(formatStudentList());

removeStudent("Charles");

console.log("STUDENT LIST:");
console.log(formatStudentList());

console.log("Students with Grade equal to or higher than 80");
console.log(filterTopStudents(80));
