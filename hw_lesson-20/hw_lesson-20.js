// Task 1

//  Дан массив. Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']
console.log(colors.length);

// Task 2

// Дан массив. Выведите в консоль его последний элемент вне зависимости от его длины.

const animals = ['monkey', 'dog', 'cat']
const lastElement = animals[animals.length - 1]
console.log(lastElement);

// Task 3

// Дан массив. Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами

// 1 way
const numbersOne = [5, 43, 63, 23, 90]
numbersOne.splice(0, numbersOne.length);
console.log(numbersOne);

// 2 way
const numbersTwo = [5, 43, 63, 23, 90]
numbersTwo.length = 0;
console.log(numbersTwo);

// Task 4

// Дан массив.
// Удалите последний элемент массива, затем вместо него добавьте в массив студента Borya.
// Удалите первый элемент массива, затем вместо него добавьте в массив студента Andrey.
// Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);

// Task 5

// Дан массив.
// Выведите в консоль все элементы массива. Сначала через цикл for, затем for..of 

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for (let element of cats) {
    console.log(element)
}

// Task 6

// Соедините два массива чисел в один. В полученном массиве попробуйте найти индекс числа 8

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]
const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
let index = allNumbers.indexOf(8);
console.log(index);

// Task 7

// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
let string = '';
for (let i = 0; i < binary.length; i++) {
    string += `${binary[i]}`;
    if (i !== binary.length - 1) {
        string += '1';
    }
}
console.log(string);