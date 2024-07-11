import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { App } from "./components/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// Задача №1. Напишите функцию на джаваскрипт, которая принимает параметр
// со строкой и преобразовывает ее в следующий вид:

// "Привет Мир" => "прИвЕт мИр"
// "Азбука Вкуса" => "АзбУкА вкУсА"

//  Подсказка: "а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"

// const letters = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

// const changeLetters = (string) => {
//   return string
//     .split("")
//     .map((letter) => {
//       if (letters.includes(letter.toLowerCase())) {
//         return letter.toUpperCase();
//       } else {
//         return letter.toLowerCase();
//       }
//     })
//     .join("");
// };

// console.log(changeLetters("Привет Мир"));

// Задача №2. Преобразование массива в объект с группировкой и фильтрацией элементов.
// Напишите функцию, которая на вход принимает массив из студентов, где студент – объект с полями
// «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number}.
// На выходе возвращает объект, где ключ – это номер группы, а значение – массив из студентов старше 17 лет.

// const obj = [
//   { name: "Ivan", age: 15, groupId: 1 },
//   { name: "Jon", age: 25, groupId: 2 },
//   { name: "Bob", age: 41, groupId: 3 },
// ];

// // const groupByAge = (arr) =>
// //   arr
// //     .filter((el) => el.age > 17)
// //     .reduce((acc, el) => {
// //       if (!acc[el.groupId]) {
// //         acc[el.groupId] = [];
// //       }
// //       acc[el.groupId].push(el);
// //       return acc;
// //     }, {});

// function groupStudentsByGroupId(students) {
//   return students.reduce((acc, student) => {
//     if (student.age > 17) {
//       if (!acc[student.groupId]) {
//         acc[student.groupId] = [];
//       }
//       acc[student.groupId].push(student);
//     }
//     return acc;
//   }, {});
// }

// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: "John",
//   age: 30,
// };

// alert(count(user)); // 2

// function count(obj) {
//   return Object.keys(obj).length; // ['name', 'age']
// }

// Имея массив, описывающий цвет каждой перчатки,
// верните количество пар, которые вы можете составить, предполагая,
// что пары могут образовывать только перчатки одного цвета.

// Примеры:
// const input = ["red", "green", "red", "blue", "blue", "2", "22"];
// result = 2 (1 red pair + 1 blue pair)

// const input2 = ["red", "red", "red", "red", "red", "red", "red"];
// result = 3 (3 red pairs)

// function countPair(input) {
//   const colorCount = {};
//   let pairs = 0;

//   for (let i = 0; i < input.length; i++) {
//     const color = input[i];

//     if (!colorCount[color]) {
//       colorCount[color] = 0;
//     }

//     colorCount[color]++;
//   }

//   for (const color in colorCount) {
//     pairs += Math.floor(colorCount[color] / 2);
//   }

//   return pairs;
// }

// const input = ["red", "green", "red", "blue", "blue", "2", "22"];
// const input2 = ["red", "red", "red", "red", "red", "red", "red", "red"];

// console.log(countPair(input));
// console.log(countPair(input2));

// Нарциссическое число (или число Армстронга) —
// это положительное число, которое является суммой своих собственных цифр,
// каждая из которых возведена в степень количества цифр в данном основании.
// В этом ката мы ограничимся десятичной системой (основанием 10).
// Например, возьмем число 153 (3 цифры), которое является нарциссическим:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// что не является:
// 1652 (4 цифры),
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

// Ваш код должен возвращать значение true или false

// const someFn = (number) => {
//   const numberInString = String(number).split("");
//   const countOfCifras = numberInString.length;

//   const sum = numberInString.reduce((result, number) => {
//     return result + number ** countOfCifras;
//   }, 0);

//   return sum === number;
// };

// console.log(someFn(153));

// const isArmstrong = (num) =>
//   num ===
//   num
//     .toString()
//     .split("")
//     .reduce((acc, el, _, arr) => acc + Math.pow(+el, arr.length), 0);
