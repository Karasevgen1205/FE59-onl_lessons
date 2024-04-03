'use strict'

// Сложение, вычитание, деление, умножение
// console.log(10 + 1); // 11
// console.log(10 + '1'); // '101'
// console.log('10' + '1'); // '101'
// console.log(10 - 1); // 9
// console.log(10 - '1'); // 9
// console.log('10' - '1'); // 9
// console.log('10' / 2); // 5
// console.log(10 / 2); // 5
// console.log(10 / '2'); // 5
// console.log('10' / '2'); // 5
// console.log(10 * 2); // 20
// console.log(10 * '2'); // 20
// console.log('10' * '2'); // 20

// console.log(10 + 'hello'); // 10hello
// console.log('10' + 'hello'); // 10hello
// console.log(10 - 'hello'); // NaN
// console.log('10' - 'hello'); // NaN
// console.log('10' / 'hello'); // NaN
// console.log(10 / 'hello'); // NaN
// console.log('10' / 'hello2'); // NaN
// console.log(10 * 'hello'); // NaN
// console.log('10' * 'hello'); // NaN

// Number(true) === 1
// Number(false) === 0

// console.log(10 + true); // 11
// console.log('10' + true); // 10true
// console.log(10 - true); // 9
// console.log('10' - true); // 9
// console.log('10' / true); // 10
// console.log(10 / true); // 10
// console.log('10' / true); // 10
// console.log(10 * true); // 10
// console.log('10' * true); // 10

// console.log(10 + false); // 10
// console.log('10' + false); // 10false
// console.log(10 - false); // 10
// console.log('10' - false); // 10
// console.log('10' / false); // Infinity
// console.log(10 / false); // Infinity
// console.log(10 * false); // 0
// console.log('10' * false); // 0

// console.log(10 + null); // 10
// console.log('10' + null); // 10null
// console.log(10 - null); // 10
// console.log('10' - null); // 10
// console.log('10' / null); // Infinity
// console.log(10 / null); // Infinity
// console.log(10 * null); // 0
// console.log('10' * null); // 0

// console.log(10 + []); // '10'
// console.log('10' + []); // '10'
// console.log(10 - []); // 10
// console.log('10' - []); // 10
// console.log('10' / []); // Infinity
// console.log(10 / []); // Infinity
// console.log('10' / []); // Infinity
// console.log(10 * []); // 0
// console.log('10' * []); // 0

// console.log(10 + {}); // 10[object Object]
// console.log('10' + {}); // 10[object Object]
// console.log(10 - {}); // NaN
// console.log('10' - {}); // NaN
// console.log('10' / {}); // NaN
// console.log(10 / {}); // NaN
// console.log('10' / {}); // NaN
// console.log(10 * {}); // NaN
// console.log('10' * {}); // NaN

// Тернарный оператор
// if (18 > 14) {
//     alert('Hello');
// } else {
//     alert('BY');
// }

// условие ? если истинно : если ложно
// 18 > 14 ? alert('Hello') : alert('BY');

// Функция
// const userName = 'Bob'; // внешние переменные функции
// let number = 3; // внешние переменные функции
// console.log('92', number);

// function name() {
//     // ...тело нашей фн - сам код
//     // console.log('Ура - это наша первая функция');
//     // const userName = 'Jon'; // внутренняя переменная функции

//     number += 10;
//     console.log('100', number);
//     // console.log(userName);

//     // function age() {
//     //     number += 10;
//     //     console.log('100', number);
//     // }

//     // age();
// }
// console.log(userName);
// console.log('104', number);
// name();
// console.log('106', number);
// name();

// const user_1 = 'Jon';
// const user_2 = 'Bob';
// const user_3 = 'Bill';
// const user_4 = 'Mari';

// // console.log('Привет, ' + user_1 + '! Рады видеть тебя на нашем сайте!');
// // console.log('Привет, ' + user_2 + '! Рады видеть тебя на нашем сайте!');
// // console.log('Привет, ' + user_3 + '! Рады видеть тебя на нашем сайте!');
// // console.log('Привет, ' + user_4 + '! Рады видеть тебя на нашем сайте!');

// function clickButton(parametr) { // здесь user_1 - это аргумент функции
//     console.log('Привет, ' + parametr + '! Рады видеть тебя на нашем сайте!');
// }

// clickButton(user_1); // здесь user_1 - это параметр нашей функции
// clickButton(user_2); // здесь user_2 - это параметр нашей функции
// clickButton(user_3); // здесь user_3 - это параметр нашей функции
// clickButton(user_4); // здесь user_4 - это параметр нашей функции

// const a = 15;
// const b = 3;
// const c = -7;
// const d = 99;

// function sum(arg1, arg2) {
//     console.log(arg1 ** arg2);
// }

// sum(2, 3);
// sum(3, -7);
// sum(15, 7);
// sum(3, 3);

// function showMessage(name, text = 'Все!!!') {
//     // if (text) {
//     //     console.log(`${name}: ты нам должен: ${text}`);
//     // } else {
//     //     console.log('Ты нам ничего не далжон!');
//     // }

//     // text ? console.log(`${name}: ты нам должен: ${text}`) : console.log('Ты нам ничего не далжон!');
//     // console.log(text ? `${name}: ты нам должен: ${text}` : 'Ты нам ничего не далжон!');

//     // const newtext = text ? text : 'Все!!!'; // если в text что-нить есть то показываем этот text, если нет то 'Все!!!';

//     console.log(`${name}: ты нам должен: ${text}`);
// }

// const user_1 = 'Jon';
// const user_2 = 'Bob';
// const user_3 = 'Bill';
// const user_4 = 'Mari';

// showMessage(user_1, '100$');
// showMessage(user_2, '24$');
// showMessage(user_3, '242руб');
// showMessage(user_4);

// function showCount(count) {
//     // console.log(count || "неизвестно");

//     // тоже самое

//     // console.log(count ? count : "неизвестно");

//     // тоже самое

//     // if (count) {
//     //     console.log(count);
//     // } else {
//     //     console.log("неизвестно");
//     // }
// }

// showCount(0); // неизвестно
// showCount(null); // неизвестно
// showCount('test'); // test
// showCount(); // неизвестно

// function getSum(arg1, arg2) {
//     // console.log("неизвестно");
//     const result = arg1 + arg2;
//     return result;
//     console.log("неизвестно");
//     console.log("неизвестно");
//     console.log("неизвестно");
//     console.log("неизвестно");
// }

// // const sum = 10 + 55; // 65

// // результат одинаковый

// const sum = getSum(10, 55); // 65
// const sum_1 = getSum(3532, 654); // 65
// const sum_2 = getSum(3, 7); // 65
// const sum_3 = getSum(66, 43534); // 65

// console.log(sum);
// console.log(getSum(10, 55));

// function checkAge(userAge = 18) {
//     // const a = userAge >= 18; // true или false

//     if (userAge >= 18) {
//       return true;
//     } else {
//         return false;
//     //   return confirm('А родители разрешили?');
//     }

//     return userAge >= 18 ? true : false;

//     return userAge >= 18; // всегда вернет true или false - и это то же самое, что и проверки выше
// }

// let age = prompt('Сколько вам лет?');

// if (checkAge(age)) {
//     alert('Доступ получен');
// } else {
//     alert('Доступ закрыт');
// }

// Если функция не возвращает значения, это всё равно, как если бы она возвращала undefined
// function doNothing() {

// }

// console.log(doNothing() === undefined); // true

// или

// function doNothing() {
//     return undefined; //=== return; === ничего не написать
// }

//   console.log(doNothing() === undefined); // true

// Выбор имени функции
// showMessage(..)     // показывает сообщение
// getAge(..)          // возвращает возраст (получая его каким-то образом)
// calcSum(..)         // вычисляет сумму и возвращает результат
// createForm(..)      // создаёт форму (и обычно возвращает её)
// checkPermission(..) // проверяет доступ, возвращая true/false

// Function Declaration и Function Expression // то как пишется функция и как она применяется
// Function Declaration
// function sum(a, b) {
//     return a + b;
// }

// Function Expression
// const sum = function(a, b) {
//     return a + b;
// }

// Стрелочные функции
// const sum = (a, b) => { // >= - это стравнени, а => - элемент функции
//     return a + b;
// }

// console.log(sum(1, 5)); // 6

// Подъем состояний hoisting // hoisting - перемещает все функции unction Declaration в самы верх нашего файла
// console.log(sum(23, 17));

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(23, 17));

// console.log(sum(23, 17)); // ReferenceError: Cannot access 'sum' before initialization

// const sum = function(a, b) {
//     return a + b;
// }

// console.log(sum(23, 17));

// const age = 15;

// const a = 10;

// if (age === 18) {
//     внутрення область видимости
//     const a = 15;
//     console.log(a);
// } else {
//     внутрення область видимости
//     const a = 19;
//     console.log(a);
// }

// const age = 55;

// let customFn;

// if (age < 18) {
//     customFn = function welcome() {
//     console.log("Привет!");
//   }
// } else {
//     customFn = function newWelcome() {
//     console.log("Здравствуйте!");
//   }
// //   customFn // - это функция
// }

// customFn();

// Стрелочные функции

// function sum(a, b) {
//     return a + b;
// }
// sum();

// const sum = (a, b) => { // >= - это стравнени, а => - элемент функции
//     return a + b;
// }
// sum();
// // // они одинакове!!!

// const sum = (a, b) => a + b; // тоже самое что return a + b;
// const sayHi = () => console.log("Hello!");

// ТРИ ВАРИАНТА СОЗДАНИЯ ФУНКЦИИ
// const sum = (a, b) => {
//     return a + b;
// }

// const sum = function(a, b) {
//     return a + b;
// }

// function sum(a, b) {
//     return a + b;
// }

// 1.
// Написать функцию, котоая принимает два аргумента оба из которых числа и возвращает наибольшее число;
// вывести результат выполнения функции в консоль.

// 2.
// Написать функцию, которая будет подсчитывать количество ее вызовов и выводить их в консоль.
// Также как только количество вызовов достигнет 10 - вывести в консоль "А не многовато ли?"

// let num = 0;

// const count = () => {
//     num = num + 1;
//     // num += 1;
//     // ++num
//     console.log(num);

//     // if (num === 10) {
//     //     console.log("А не многовато ли?")
//     // }
//     num === 10 ? console.log("А не многовато ли?") : undefined;
// }

// count(); // 1
// count(); // 2
// count(); // 3
// count();
// count();
// count();
// count();
// count();
// count();
// count(); //// это будет 10 то еще и текст
// count();
// count();

// 'папа'[1]
// 'папа'.slice(1)
// '2222'.split('') = ['2', '2', '2', '2'];

// const a = () => {
//     console.log('a');
// };
// const b = () => {
//     console.log('b');
// };

// const test = (a, b) => {
//     a();
//     b();
// }

// test(a, b)

asdas
