"use strict";

//1
function getSum(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}
let result = getSum(100)
console.log(result);

//2
function calculateOverpayment(loanAmount) {
    const interestRate = 0.17
    const years = 5
    
    let totalInterest = loanAmount * interestRate * years

    return totalInterest
}

let loanAmount = 100000;
let overpayment = calculateOverpayment(loanAmount)
console.log("Переплата по кредиту: " + overpayment)
//3
function trimString(str, from, to) {
    let startIndex = str.indexOf(from)
    let endIndex = str.indexOf(to)
    
    if (startIndex === -1 || endIndex === -1) {
        return "Ошибка: значения 'от' или 'по' не найдены в строке"
    }
    
    return str.slice(startIndex + from.length, endIndex)
}

let trim_result = trimString("Некрупная, отличающаяся крупной, но короткой мордой,", "отличающаяся", "мордой")
console.log(trim_result); 
//4
function SumNumbers(sumnum){
    let summ = 0
    let numStr = sumnum.toString();
    
    for (let k = 0; k < numStr.length; k++) {
        summ += parseInt(numStr[k])
    }
    
    return summ
}
let sumnum = 2024
let summ = SumNumbers(sumnum)
console.log(summ)
//5
function getSumstring(a, b) {
    let sumgetSum = 0;
    if (a === b) {
        return a;
    }
    if (a < b) {
        for (let f = a; f <= b; f++) {
            sumgetSum += f;
        }
    } else {
        for (let f = b; f <= a; f++) {
            sumgetSum += f;
        }
    }
    return sumgetSum;
}


let getsumresult = getSumstring(2, 7);
console.log(getsumresult);
//6 
function fooBoo(boolValue, foo, boo) {
    if (boolValue) {
        foo();
    } else {
        boo();
    }
}

function foo() {
    console.log("foo function");
}

function boo() {
    console.log("boo function");
}

fooBoo(true, foo, boo); 
// fooBoo(false, foo, boo);
//lvl up 1
function isTrianglePossible(first_side, second_side, third_side) {
    if (first_side + second_side > third_side && first_side + third_side > second_side && second_side + third_side > first_side) {
        return true;
    } else {
        return false;
    }
}
let first_side = 6;
let second_side = 7;
let third_side = 5;
console.log(isTrianglePossible(first_side, second_side, third_side)); 
//lvl up 2
function breakChocolate(n, m) {
    if (n <= 0 || m <= 0)  
          return 0;
     else {
        return n * m - 1;
    }
}

console.log(breakChocolate(5, 3));
// lvl up 3
let phonePrice = 400; 
let accessoryPrice = 50; 
const taxRate = 0.1; 
let bankAccountBalance = 1000; 

function calculateTax(amount) {
    return amount * taxRate;
}

function formatPrice(price_formatting) {
    return "$" + price_formatting.toFixed(2);
}

while (bankAccountBalance > 0) {
    let numPhones = prompt("Сколько телефонов Вы хотите купить?");
    if (numPhones === null) {
        break;
    }
    
    let totalPhonePrice = phonePrice * numPhones;
    let totalAccessoryPrice = accessoryPrice * numPhones;
    let totalPurchaseAmount = totalPhonePrice + totalAccessoryPrice;
    totalPurchaseAmount += calculateTax(totalPurchaseAmount);
    confirm("Стоимость покупки: " + formatPrice(totalPurchaseAmount) + " Оставшийся баланс: " + formatPrice(bankAccountBalance - totalPurchaseAmount));
    if (totalPurchaseAmount > bankAccountBalance) {
        alert("У Вас недостаточно средств для покупки " + numPhones + " телефонов.");
        break;}
        else { alert ("Вы успешно приобрели "+ numPhones + " телефонов с аксессуарами")}
        break;
    }
    
    bankAccountBalance -= totalPurchaseAmount;
    
    
    
