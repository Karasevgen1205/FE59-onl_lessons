"use strict";

//1


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function printElement(element) {
console.log(element);
}

fibonacci.forEach(printElement);


const fibonacci2 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci2.forEach(element => console.log(element));

//2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

function createMemberStrings(users) {
return users.map(function(user, index) {
return `member ${index + 1}: ${user}`;
});
}

console.log(createMemberStrings(users));


const users2 = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

const createMemberStrings2 = users => users.map((user, index) => `member ${index + 1}: ${user}`);

const memberStrings = createMemberStrings2(users2);
console.log(memberStrings);

//3

const numbers = [7, -4, 32, -90, 54, 32, -21];

function filterPositiveNumbers(arr) {
return arr.filter(function(num) {
return num >= 0;
});
}

console.log(filterPositiveNumbers(numbers));



const numbers2 = [7, -4, 32, -90, 54, 32, -21];

const filterPositiveNumbers2 = arr => arr.filter(num => num >= 0);

console.log(filterPositiveNumbers2(numbers2));

//4

const fibonacci3 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

function sumArray(arr) {
return arr.reduce(function(total, num) {
return total + num;
}, 0);
}

console.log(sumArray(fibonacci3));


const fibonacci4 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

const sumArray4 = arr => arr.reduce((total, num) => total + num, 0);

console.log(sumArray4(fibonacci4));

//5

function findEvenNumber(element) {
    return element % 2 === 0;
}

const numbers5 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber5 = numbers5.find(findEvenNumber);

console.log(evenNumber5); 

const numbers6 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber6 = numbers6.find(element => element % 2 === 0);

console.log(evenNumber6);


// LVL UP 1

function Student(salary, rate, name) {
    this.salary = salary;
    this.rate = rate;
    this.name = name;

    this.calculateCredit = function() {
        switch(this.rate) {
            case 'A':
                return this.salary * 12;
            case 'B':
                return this.salary * 9;
            case 'C':
                return this.salary * 6;
            case 'D':
                return 0;
            default:
                return 0;
        }
    }
}

let students = [];
students.push(new Student(2000, 'A', 'Olga'));
students.push(new Student(2500, 'B', 'Oleg'));
students.push(new Student(3000, 'C', 'Dasha'));
students.push(new Student(3500, 'D', 'Misha'));
students.push(new Student(4000, 'A', 'Ivan'));

function calculateTotalCredit(students) {
    let totalCredit = 0;
    for(let i = 0; i < students.length; i++) {
        totalCredit += students[i].calculateCredit();
    }
    return totalCredit;
}

console.log(calculateTotalCredit(students));

// LVL UP 2

function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels("This website is for losers LOL!")); 


// LVL UP 3

function accum(s) {
    return s.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
}

console.log(accum('abcd')); 
console.log(accum('RqaEzty')); 
console.log(accum('cwAt'));

// LVL UP 4

function highAndLow(numbers) {
    const numArr = numbers.split(' ').map(Number);
    const maxNum = Math.max(...numArr);
    const minNum = Math.min(...numArr);
    
    return `${maxNum} ${minNum}`;
}

console.log(highAndLow('1 2 3 4 5')); 
console.log(highAndLow('1 2 -3 4 5')); 
console.log(highAndLow('1 9 3 4 -5')); 

// LVL UP 5

function isIsogram(str) {
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < lowerCaseStr.length; i++) {
        for (let j = i + 1; j < lowerCaseStr.length; j++) {
            if (lowerCaseStr[i] === lowerCaseStr[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram("Сон")); 
console.log(isIsogram("Sleep")); 
console.log(isIsogram("Спать")); 

// LVL UP 6

const str = 'ABC';
let total1 = '';
for (let i = 0; i < str.length; i++) {
    total1 += str.charCodeAt(i);
}
console.log(total1); 

let total2 = total1.replace(/7/g, '1');
console.log(total2); 

let sum1 = total1.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
let sum2 = total2.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
let difference = sum1 - sum2;
console.log(difference); 

// LVL UP 7

function duplicateEncode(word) {
    word = word.toLowerCase();
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
            result += '(';
        } else {
            result += ')';
        }
    }
    return result;
}

console.log(duplicateEncode('din')); 
console.log(duplicateEncode('recede')); 
console.log(duplicateEncode('Success'));
console.log(duplicateEncode('(( @'));