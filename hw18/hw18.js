//block2 ex1

function getSum(n) {

    let total = 0;
    for (let i = 0; i <= n; i++){
        total += i;
    }
    return total;
}
let result = getSum(100);
console.log(result);

//ex2
function calculateInterest(loan) {
    const interestRate = 17 / 100; 
    const years = 5;

    const total = loan * (1 + interestRate * years);
    const interest = total - loan;

    return interest;
}
const loan = 10000; 
const interest = calculateInterest(loan);
console.log(interest);

//ex3
function trimString(str, fromIndex, toIndex) {
    return str.slice(fromIndex, toIndex + 1);
}
const string = "Hello, world!";
const trimmedString = trimString(string, 3, 7);
console.log(trimmedString);

//ex4

function getSumNumbers(number) {
    return String(number).split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
let number = 2021;
console.log(number, ":", getSumNumbers(number));

//ex5
function getSum(a, b) {

    if (a === b) {
        return a;
    }
    
    const minNum = Math.min(a, b);
    const maxNum = Math.max(a, b);
    
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
}

let a = 3;
let b = 7;
console.log(getSum(a, b));

//ex6

function fooBoo(boolValue, foo, boo) {
    
    if (boolValue === true) {
        foo();
    } else {
        boo();
    }
}
function foo() {
    console.log("foo");
}

function boo() {
    console.log("boo");
}

let boolValue = false;
fooBoo(boolValue, foo, boo);