"use strict";

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

const subjectNames = Object.keys(subjects).join(', ')

console.log(subjectNames);

// 2

let totalTeachers = 0;
let totalStudents = 0;

for(let value of Object.values(subjects)){
    console.log(value)
    totalStudents += value.students
    totalTeachers += value.teachers
}

console.log(totalTeachers);
console.log(totalStudents);

// 3

const sumSubject = Object.keys(subjects).length;
const averageStudents = totalStudents / sumSubject;

console.log(averageStudents)

// 4

const subjectArray = Object.entries(subjects).map(([subject, {students, teachers}]) => ({subject, students, teachers}))

console.log(subjectArray);

// 5

const sortedArray = Object.entries(subjects)
  .sort(([, a], [, b]) => b.teachers - a.teachers)
  .map(([name, details]) => ({ name, ...details }));

console.log(sortedArray);