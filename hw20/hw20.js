

//ex1
const colors = ['red', 'green', 'blue'];
console.log(colors.length);

//ex2
const animals = ['monkey', 'dog', 'cat']; 
const lastAnimal = animals[animals.length-1];
console.log(lastAnimal);

//ex3
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
console.log(numbers);

const numbers1 = [5, 43, 63, 23, 90];
numbers1.length = 0;
console.log(numbers1);

//ex4
const students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log(students);

//ex5
const cats = ['Gachito', 'Tom', 'Batman'];

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

const cats1 = ['Gachito', 'Tom', 'Batman'];

for (const cat of cats1) {
    console.log(cat);
}

//ex6
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers); 

const index = allNumbers.indexOf(8);

console.log(allNumbers);
console.log(index);

//ex7
const binary = [0, 0, 0, 0];
const String = binary.join(''); 
console.log(String);
