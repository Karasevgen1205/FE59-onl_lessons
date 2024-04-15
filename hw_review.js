// Стилистика кода

// 1.
// удалить оба ключа

// 2.
// Хорошее альтернативное решение
// const job = {
//     oklad : 1200,
//     schedule : "five-day"
// }
// console.log(job.hasOwnProperty("oklad"));
// console.log(job.hasOwnProperty("stavka"));

// 3.
// const student = {
//     name: 'John',
//     age: 19,
//     isHappy: true
//     }
//     for (const cikl in student) {
//         console.log({cikl})
//     };

// 5. вместо этого можно проще salariesArray.length

// let salaries = {
//   andrey: 500,
//   sveta: 413,
//   anton: 987,
//   igor: 664,
//   alexandra: 199,
// };
// let salariesArray = Object.values(salaries);
// let keyInObject = Object.keys(salaries).length; // вместо этого можно проще salariesArray.length
// let sum = 0;
// for (const numberSum of salariesArray) {
//   sum += numberSum;
// }
// let finalZp = sum / keyInObject;
// console.log(finalZp);

// 6.
// Я интерпретировал "Потом попросить пользователя подтвердить данные. Если верно введен логин и пароль, вывести сообщение Добро пожаловать"
// как необходимость повторного запроса данных через промпт и проверка уже вновь введенных данных с теми, что в объекте, но я думаю,
// вы бы справились без проблем

// function registrationValidator() {
//     let login = prompt("Введите логин:");
//     let password = prompt("Введите пароль:");
//     let user = {
//         login: login,
//         password: password
//     };
//     let confirmation = confirm(`Подтвердите данные:\nЛогин: ${user.login}\nПароль: ${user.password}`);
//     if (confirmation) {
//         alert("Добро пожаловать!");
//     } else {
//         alert("Регистрация отменена.");
//     }
// }
// registrationValidator();

7
// альтернативное решение через массивы

// function describeScore(score) {
//   const goals = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

//   const [team1, team2] = score.split(':');

//   if (team1 > 9 || team2 > 9) {
//       return 'Число забитых голов не должно превышать 9.';
//   }

//   const description = `Команда 1 забила ${goals[team1]} гола, а команда 2 забила ${goals[team2]} голов.`;

//   return description;
// }

// const score = '2:5';
// const resultDescription = describeScore(score);
// console.log(resultDescription);

// 8;
// let student1 = {
//   name: "Polina",
//   age: 27,
// };

// let student2 = {
//   name: "Polina",
//   age: 27,
// };

// if (JSON.stringify(student1) === JSON.stringify(student2)) {
//   console.log("Объекты равны");
// } else {
//   console.log("Объекты не равны");
// }
