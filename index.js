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
  
  // 1.Создать строку из названий предметов написанных через запятую
  // 2.Подсчитать общее количество студентов и учителей на всех предметах
  // 3.Получить среднее количество студентов на всех предметах
  // 4.Создать массив из объектов предметов
  // 5.Получить массив из предметов и отсортировать по количеству преподавателей на
  // факультете от большего к меньшему
  
  ////////////////////////////////////////////////////1111111111/////////////////////////////////////////////////////////
  const subjectsNames = Object.keys(subjects).join(', ');
  console.log('предметы:'+subjectsNames)
  ///////////////////////////////////////////////////////222222222//////////////////////////////////////////////////////
  let totalStudents = 0;
  let totalTeachers = 0;
  for (const subject in subjects) {
      totalStudents += subjects[subject].students;
      totalTeachers += subjects[subject].teachers;
  }
  console.log('число учеников:'+ totalStudents, 'число учителей:'+ totalTeachers);
  /////////////////////////////////////////////////////3333333////////////////////////////////////////////////////////
  const totalSubjects = Object.keys(subjects).length;
  const averageStudents = totalStudents / totalSubjects;

  console.log('среднее кол-во студентов:'+ averageStudents);
  //////////////////////////////////////////////////////444444444///////////////////////////////////////////////////////
   const subjectsArray = Object.keys(subjects).map(subject => ({
      name: subject,
      students: subjects[subject].students,
      teachers: subjects[subject].teachers
  }));
  console.log(subjectsArray)
  ///////////////////////////////////////////////////////555555555555//////////////////////////////////////////////////////
   const sortedSubjects = Object.keys(subjects).sort((a, b) => subjects[b].teachers - subjects[a].teachers);
  
  console.log('сортировка предметов по кол-во учеников на уроке по убыванию:' + sortedSubjects)
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////