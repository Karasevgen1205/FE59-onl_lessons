
//1

const colors = ['red', 'green', 'blue']

console.log(colors.length)

//2

const animals = ['monkey', 'dog', 'bear', 'owl', 'cat']
const lastanimal = animals[animals.length -1]
console.log(lastanimal)

//3

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers.length = 0;
console.log(numbers);

//4

const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log(students);

//5

const cats = ['Gachito', 'Tom', 'Batman'];

console.log('Через цикл for:');
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

console.log('Через цикл for..of:');
for (const cat of cats) {
    console.log(cat);
}

// 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = oddNumbers.concat(evenNumbers);
const index = allNumbers.indexOf(8);

console.log(allNumbers);
console.log('Индекс числа 8: ' + index);

// 7 

const binary = [0, 0, 0, 0];
const binaryString = binary.map(num => num.toString()).join('1');
console.log(binaryString);

// LVL UP 1

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

const word = 'шабаш';
if (isPalindrome(word)) {
    console.log(`${word} является палиндромом`);
} else {
    console.log(`${word} не является палиндромом`);
}

// LVL UP 2

const matrix = [
[12, 98, 78, 65, 23],
[54, 76, 98, 43, 65],
[13, 324, 65, 312],
[9092, 22, 45, 90000],
]

let sum = 0;
let count = 0;

for (const array of matrix) {
  for (const number of array) {
    sum += number;
    count++;
  }
}

const average = sum / count;

console.log(average);

// LVL UP 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] >= 0) {
    positiveNumbers.push(mixedNumbers[i]);
  } else {
    negativeNumbers.push(mixedNumbers[i]);
  }
}

console.log("Положительные числа: ", positiveNumbers);
console.log("Отрицательные числа: ", negativeNumbers);

// LVL UP 4

const Array_1 = [];
for (let i = 0; i < 5; i++) {
    Array_1.push(Math.random() * 10);
}

const cubedArray = [];
for (let number of Array_1) {
    cubedArray.push(Math.pow(number, 3));
}


console.log("Исходный массив случайных чисел:");
console.log(Array_1);

console.log("Массив чисел, возведенных в куб:");
console.log(cubedArray);