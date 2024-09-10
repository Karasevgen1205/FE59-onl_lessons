"use strict";

// Стек следует принципу LIFO (Last In First Out)
// const array = [1, 5, 0, -1, 7];

// array.push(4);
// // array.pop(); // 4
// const lastNum = array.pop(); // 4

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// В очереди используется принцип FIFO («первым вошел - первым вышел»)
// const array = [1, 5, 0, -1, 7];

// array.push(4);
// // array[0]...
// array.shift(); // [5, 0, -1, 7, 4];

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Set

// const array = [1, 5, 0, -1, 7, 7, 5, 7, "2", "a", "a"];

// const obj = { a: 1 };
// const obj1 = { a: 1 };

// console.log(obj === obj1);

// const newSet = new Set(array); // []

// newSet.add(1);
// newSet.add(5);
// newSet.add(1);
// newSet.add(obj);
// newSet.add(obj);
// newSet.add(obj);

// console.log(newSet);

// newSet.add();
// newSet.clear();
// newSet.delete(1);
// newSet.has(1);
// newSet.size; // количесвто элементов
// newSet.forEach((item) => console.log(item))
// newSet.entries() // [[0, 1], [1, 5]]

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Map

// const a = {
//   ["1"]: "aaaa",
//   1: "bbbb",
// };

// console.log(a, a[1], a["1"]); // {1: "bbbb"}

// const map = new Map();

// const map = new Map([
//   [key1, "value1"],
//   [key2, "value2"],
//   [key3, "value3"],
// ]);
// console.log(map);
// map.set(1, "aaaa");
// map.set("1", "bbbb");

// console.log(map.get(1)); //aaaa
// console.log(map.get("1")); //bbbb

// const obj = { ttt: "bjwhfw" };

// // map.set(obj, "54");
// // console.log(map.get(obj)); //"54"

// // map.forEach((item) => console.log(item))

// const a = {
//   [obj]: 52151251,
// };

// console.log(a); //{ '[object Object]': 52151251 }

// map.set();
// map.get();
// map.clear();
// map.delete(1);
// map.has(1);
// map.keys();
// map.values(1);
// map.size; // количесвто элементов
// map.forEach((item) => console.log(item))
// map.entries() // [[0, 1], [1, 5]]

// const a = Object.keys({ a: 1 }); // ['a'];
// const a1 = Object.values({ a: 1 }); // [1];

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// WeakMap

// Отличие WeakMap от Map в том, что в WeakMap ключи должны быть строго объектами
// у WeakMap мы не можем увидеть все, что в нее входит

// // Кейс 1:
// let a = { a: 1 };
// //{ a: 1 } существует и не удаляется из памяти так как на него ссылается переменная а
// a = null; // затираем объект a
// // объект удален из пямяти

// Кейс 2:
// let a = { a: 1 };
// const array = [a];
// a = null; // затираем объект a
// но в массиве { a: 1 } все еще есть - по этому его не удалит уборщик мусора

// Кейс 3:
// let a = { a: 1 };
// const map = new WeakMap();
// map.set(a, "...");
// a = null; // затираем объект a
// объект a - удален из памяти

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// WeakSet

// все элементы WeakSet должны быть объектами и аналогичен Set

// get
// set
// delete
// has

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// Алгоритмы

// поиска
// сортровки
// рекурсивные/кэширущие

// !!!!!!!!!!!!!!!!
// Линейный поиск
// !!!!!!!!!!!!!!!!

// const array = [
//     -1, 0, 2, 3, 5, 7, 8, 16, 17, 21, 23, 34, 45, 46, 48, 55, 58, 69, 71, 73, 74,
//   ]; // 21 элемент
// в лучшем случае найдем на - 1 итерации, в худшем - 21,
// значит здесь скорость выполнения O(n)

//   let count = 0;

// const linearSearch = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     ++count;

//     if (array[i] === value) {
//       return i;
//     }
//   }

//   return -1;
// };

// console.log(linearSearch(array, 74));
// console.log(count, array.length);

// !!!!!!!!!!!!!!!!
// Бинарный поиск
// !!!!!!!!!!!!!!!!

// const array = [
//   -1, 0, 2, 3, 5, 7, 8, 16, 17, 21, 23, 34, 45, 46, 48, 55, 58, 69, 71, 73, 74,
// ];
// let count = 0;

// const binarySearch = (array, value) => {
//   let start = 0;
//   let end = array.length;
//   let middle;
//   let found = false;
//   let index = -1;

//   while (!found && start <= end) {
//     ++count;

//     middle = Math.floor((start + end) / 2);

//     if (array[middle] === value) {
//       found = true;
//       index = middle;
//       return middle;
//     }

//     if (value < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return index;
// };

// console.log(binarySearch(array, 74));
// console.log(count);

// пример простой рекурсии:
// написать функцию факториал:

// const getFuctorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }

//   return n * getFuctorial(n - 1); // 5 * 4 * 3 * 2 * 1
// };

// console.log(getFuctorial(5));

// !!!!!!!!!!!!!!!!
// бинарный поиск через рекурсию
// !!!!!!!!!!!!!!!!

// const array = [
//   -1, 0, 2, 3, 5, 7, 8, 16, 17, 21, 23, 34, 45, 46, 48, 55, 58, 69, 71, 73, 74,
// ];
// let count = 0;

// const binarySearch = (array, value, start, end) => {
//   let middle = Math.floor((start + end) / 2);
//   ++count;

//   if (array[middle] === value) {
//     return middle;
//   }

//   if (value < array[middle]) {
//     return binarySearch(array, value, 0, middle - 1);
//   } else {
//     return binarySearch(array, value, middle + 1, end);
//   }
// };

// console.log(binarySearch(array, 74, 0, array.length));
// console.log(count);

// !!!!!!!!!!!!!!!!
// сортировка выбором
// !!!!!!!!!!!!!!!!
// O(n ** 2)

// const array = [
//   17, 21, 23, 55, 58, 69, 71, 73, 34, 45, 74, 46, 48, -1, 0, 2, 3, 5, 7, 8, 16,
// ];
// const array = new Array(1000).fill(null).map((_, i) => ++i);
// let count = 0;

// const selectingSort = (array) => {
//   const result = [...array];

//   for (let i = 0; i < array.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] < array[minIndex]) {
//         minIndex = j;
//       }

//       ++count;
//     }

//     let temp = array[i];
//     array[i] = array[minIndex];
//     array[minIndex] = temp;
//   }
// };

// selectingSort(array);
// console.log(count);

// !!!!!!!!!!!!!!!!
// сортировка пузырьком
// !!!!!!!!!!!!!!!!
// скорость 0(n ** n)

// const array = [
//   17, 21, 23, 55, 58, 69, 71, 73, 34, 45, 74, 46, 48, -1, 0, 2, 3, 5, 7, 8, 16,
// ];
// const array = new Array(1000).fill(null).map((_, i) => ++i);
// let count = 0;

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[j + 1] < array[j]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }

//       ++count;
//     }
//   }
//   return array;
// };

// bubbleSort(array);
// console.log(count);

// !!!!!!!!!!!!!!!!
// быстрая сортировка
// !!!!!!!!!!!!!!!!

// const list = [
//   17, 21, 23, 55, 58, 69, 71, 73, 34, 45, 74, 46, 48, -1, 0, 2, 3, 5, 7, 8, 16,
// ];
// const list = new Array(1000).fill(null).map((_, i) => ++i);

// let count = 0;

// const fastSort = (array) => {
//   if (array.length <= 1) {
//     return array; // [17], например
//   }

//   let midIndex = Math.floor(array.length / 2);
//   let value = array[midIndex];
//   let less = [];
//   let greate = [];

//   for (let i = 0; i < array.length; i++) {
//     ++count;

//     if (i === midIndex) {
//       continue;
//     }

//     if (array[i] < value) {
//       less.push(array[i]);
//     } else {
//       greate.push(array[i]);
//     }
//   }

//   return [...fastSort(less), value, ...fastSort(greate)];
// };

// fastSort(list);
// console.log(count);
