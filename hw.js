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
// 1.
const namesSubjects = Object.keys(subjects).join(', ');
console.log(namesSubjects);

// 2.

function getStudentsCounter(subjects) {
  let count = 0;
  for (let subject in subjects) {
    count += subjects[subject].students;
  }
  return count;
}
function getTeachersCounter(subgects) {
  let count = 0;
  for (let subject in subjects) {
    count += subjects[subject].teachers;
  }
  return count;
}

const getPeopleCounter = (subjects) => getStudentsCounter(subjects) + getTeachersCounter(subjects);
console.log(getPeopleCounter(subjects));

// 3.

const getAverageStudentsCounter = (subjects) => getStudentsCounter(subjects) / Object.keys(subjects).length;
console.log(getAverageStudentsCounter(subjects));

// 4.

const subgectsArray = Object.values(subjects);
console.log(subgectsArray);

// 5.

const subgectsArraySorted = subgectsArray.sort((a, b) => b.teachers - a.teachers);
console.log(subgectsArraySorted);