// const subjects = {
//   mathematics: {
//     students: 200,
//     teachers: 6,
//   },
//   biology: {
//     students: 120,
//     teachers: 6,
//   },
//   geography: {
//     students: 60,
//     teachers: 2,
//   },
//   chemistry: {
//     students: 100,
//     teachers: 3,
//   },
// };

// //1

// const stringOfSubjects = (subjects) => {
//   const arrayOfSubjects = Object.keys(subjects);
//   return arrayOfSubjects.join(", ");
// };

// console.log(stringOfSubjects(subjects));

// //2

// const countOfSubjectsAndTeachers = (subjects) => {
//   const arrayOfStudentdAndTeachers = Object.values(subjects);
//   console.log(arrayOfStudentdAndTeachers);

//   return arrayOfStudentdAndTeachers.reduce(
//     (result, { students, teachers }) => {
//       result.amountOfStudents += +[students];

//       result.amountOfTeachers += +[teachers];

//       return result;
//     },
//     { amountOfStudents: 0, amountOfTeachers: 0 }
//   );
// };

// console.log(countOfSubjectsAndTeachers(subjects));

// //3

// const averageOfStudent = (subjects) => {
//   const arrayOfStudentdAndTeachers = Object.values(subjects);

//   const sumOfObjects = Object.keys(subjects).length;
//   const sum = arrayOfStudentdAndTeachers.reduce((result, { students }) => {
//     result += +students;

//     return result;
//   }, 0);

//   const averageOfStudents = sum / sumOfObjects;
//   return averageOfStudents;
// };

// console.log(averageOfStudent(subjects));

// //4
// const arrayOfObjects = (subjects) => {
//   const subjectEntries = Object.entries(subjects);
//   console.log(subjectEntries);

//   return subjectEntries.reduce((result, [key, value]) => {
//     const arrayToPust = { [key]: value };

//     result.push(arrayToPust);
//     return result;
//   }, []);
// };

// console.log(arrayOfObjects(subjects));

// //5

// const sortOfObjectsByAmountOfTeachers = (subjects) => {
//   const subjectEntries = Object.entries(subjects);
//   console.log(subjectEntries);

//   subjectEntries.sort(
//     (
//       [currentObject, { teachers: currentTeachers }],
//       [nextObject, { teachers: nextTeachers }]
//     ) => nextTeachers - currentTeachers
//   );

//   console.log(subjectEntries);

//   return subjectEntries.reduce((result, [key, value]) => {
//     result.push(key);
//     return result;
//   }, []);
// };

// console.log(sortOfObjectsByAmountOfTeachers(subjects));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const subjects = {
//   mathematics: { students: 200, teachers: 6 },
//   biology: { students: 120, teachers: 6 },
//   geography: { students: 60, teachers: 2 },
//   chemistry: { students: 100, teachers: 3 },
// };

// const nameOfSubject = Object.keys(subjects).join(", ");
// console.log("Названия предметов:", nameOfSubject);

// const totalCounts = Object.values(subjects).reduce(
//   (acc, subject) => {
//     acc.students += subject.students;
//     acc.teachers += subject.teachers;
//     return acc;
//   },
//   { students: 0, teachers: 0 }
// );
// console.log("Общее количество студентов и учителей:", totalCounts);

// const averageStudents = totalCounts.students / Object.keys(subjects).length;
// console.log("Среднее количество студентов на всех предметах:", averageStudents);

// const subjectsArray = Object.entries(subjects).map(([name, data]) => {
//   return { name, ...data };
// });
// console.log("Массив из объектов предметов:", subjectsArray);

// const sortedByTeachers = subjectsArray.sort((a, b) => b.teachers - a.teachers);
// console.log(
//   "Отсортированный массив по количеству преподавателей:",
//   sortedByTeachers
// );
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use strict";

// const subjects = {
//   mathematics: {
//     students: 200,
//     teachers: 6,
//   },
//   biology: {
//     students: 120,
//     teachers: 6,
//   },
//   geography: {
//     students: 60,
//     teachers: 2,
//   },
//   chemistry: {
//     students: 100,
//     teachers: 3,
//   },
// };

// const nameSubject = Object.keys(subjects).join(", ");

// let sumTeachers = 0;
// let sumStudents = 0;

// for (let value of Object.values(subjects)) {
//   sumTeachers += value.teachers;
//   sumStudents += value.students;
// }

// const sumSubject = Object.keys(subjects).length;
// const averageStudents = sumStudents / sumSubject;

// const arraySubjects = Object.entries(subjects).map(
//   ([subject, { students, teachers }]) => ({ subject, students, teachers })
// );

// const sortArray = arraySubjects.sort((max, min) => min.teachers - max.teachers);

// console.log(nameSubject);
// console.log(sumStudents);
// console.log(sumTeachers);
// console.log(averageStudents);
// console.log(arraySubjects);
// console.log(sortArray);
