const subjects = {
mathematics: {
students: 200,
teachers: 6
},
biology: {
students: 120,
teachers: 6
},
geography: {
students: 60,
teachers: 2
},
chemistry: {
students: 100,
teachers: 3
}
}

// 1

const subjectNames = Object.keys(subjects).join(', ');
console.log(subjectNames);

//2

let totalStudents = 0;
let totalTeachers = 0;

for (const subject in subjects) {
  totalStudents += subjects[subject].students;
  totalTeachers += subjects[subject].teachers;
}

console.log(`Общее количество студентов: ${totalStudents}`);
console.log(`Общее количество учителей: ${totalTeachers}`);

//3

const averageStudents = totalStudents / Object.keys(subjects).length;
console.log(`Среднее количество студентов: ${averageStudents}`);

//4

const subjectsArray = Object.entries(subjects).map(([name, data]) => ({
  name,
  students: data.students,
  teachers: data.teachers
}));

console.log(subjectsArray);

//5

const sortedSubjects = subjectsArray.sort((a, b) => b.teachers - a.teachers);
console.log(sortedSubjects);