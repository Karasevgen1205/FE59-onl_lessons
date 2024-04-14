// Task 1

// function declaration

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const firstWay = function (element) {
    console.log(element);
}
fibonacci.forEach(firstWay);

// сокращенно

fibonacci.forEach(function (element) {
    console.log(element);
});

// arrow function
const arrowFunction = (element) => console.log(element);
fibonacci.forEach(arrowFunction);

// сокращенно
fibonacci.forEach((element) => console.log(element));


const firstWayWay = function (element, index, arr) {
    console.log(index, element, arr);
}
fibonacci.forEach(firstWayWay);

fibonacci.forEach((element, index, arr) => console.log(index, element, arr));

// Task 2

// arrow function
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers = users.map((elem, index) => `member ${index + 1}: ${elem}`);
console.log(newUsers);

// function declaration

const addMember = function(elem, index) {
    return `member ${index + 1}: ${elem}`;
}
const newUsers1 = users.map(addMember);
console.log(newUsers);

// Task 3

// arrow function
const numbers = [7, -4, 32, -90, 54, 32, -21];
const newNumbers = numbers.filter((elem) => elem >= 0);
console.log(newNumbers);

// function declaration

const isPositive = function(elem) {
    return elem >= 0;
}
const newNumbers1 = numbers.filter(isPositive);
console.log(newNumbers1);

// Task 4

// arrow function

const fibonacci1 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonacci1 = fibonacci1.reduce((accum, elem) => accum + elem);
console.log(sumFibonacci1);

// function declaration
const sumFibonacci2 = function(accum, elem) {
    return accum + elem;
}
const newFibonacci = fibonacci1.reduce(sumFibonacci2);
console.log(newFibonacci);

// Task 5

// arrow function

const number = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber = number.find((elem) => elem % 2 == 0);
console.log(evenNumber);

// function declaration
const findEvenNumber = function(elem) {
    return elem % 2 == 0;
}
const result = number.find(findEvenNumber);
console.log(result);

// Advanced level

// Task 1

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;
    this.getCredit = function() {
        if (this.rate == 'A') {
            return 12 * this.salary;
        }else if (this.rate == 'B') {
            return 9 * this.salary;
        } else if (this.rate == 'C') {
            return 6 * this.salary;
        } else {
            return 0;
        }
    }
}
const arrStudents = [
    new Student(5000, 'A', 'Liza'), 
    new Student(1000, 'B', 'Ivan'),
    new Student(3500, 'C', 'Katya'),
    new Student(6000, 'D', 'Sveta'),
    new Student(4000, 'A', 'Nikita'),
]
const sumCredit = function(arrStudents) {
    let sum = 0;
    for (let student of arrStudents) {
        sum += student.getCredit();
    }
    return sum;
}
console.log(sumCredit(arrStudents));