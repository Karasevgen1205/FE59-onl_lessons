'use strict';

// Задание 1

const word1 = 'true';
const word2 = false;
const word3 = 17;
const word4 = undefined;
const word5 = null;
console.log(`${word1} has type: ${typeof word1}`);
console.log(`${word2} has type: ${typeof word2}`);
console.log(`${word3} has type: ${typeof word3}`);
console.log(`${word4} has type: ${typeof word4}`);
console.log(`${word5} has type: ${typeof word5}`);

// Задание 2

let height = 15;
let width = 20;
if (height > width) {console.log(`Наибольшее чмсло: ${height}`);}
else if (height < width) {console.log(`Наибольшее число: ${width}`);}
else {console.log(`Числа равны`)};

// Задание 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
   }
}

// Задание 4

for (let i = 1; i <= 6; i++) {
    let step = "";
    for (let j = 0; j < i; j++) {
        step += "#";
    }
    console.log(step);
}

let a = 10;
let b = 15;

function number(a, b){
    if (a > b) {
        return a;
    } else return b;
    }