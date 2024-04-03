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

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = (key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);

// Задание 5

// const number = parseInt(prompt("Введите число:"));

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("FizBuz");
// } else if (number % 3 === 0) {
//     console.log("Buz");
// } else if (number % 5 === 0) {
//     console.log("Fiz");
// }
////////////////////////////////// Закомментил, что бы не было ошибки в консоли

// Задание 6

// const age = parseInt(prompt("Введите ваш возраст:"));

// if (age >= 18) {
//     console.log("Попей пивка");
// } else if (age >= 16 && age <= 18) {
//     console.log("Можешь выкурить сигаретку, только маме не говори");
// } else {
//     console.log("Пей колу");
// }
////////////////////////////////// Закомментил, что бы не было ошибки в консоли

// Задание 7

// const direction = prompt("В какую сторону света вы бы хотели отправиться? (юг, север, запад, восток)");

// switch (direction) {
//     case "юг":
//         console.log("На юг пойдешь, счастье найдешь");
//         break;
//     case "север":
//         console.log("На север пойдешь, много денег найдешь");
//         break;
//     case "запад":
//         console.log("На запад пойдешь, верного друга найдешь");
//         break;
//     case "восток":
//         console.log("На восток пойдешь, разработчиком станешь");
//         break;
//     default:
//         console.log("Попробуйте еще раз, введите одно из четырех направлений: юг, север, запад, восток");
// }
////////////////////////////////// Закомментил, что бы не было ошибки в консоли

// Продвинутый уровень, задание 1 

// const nameLowUP = "пОлИнА нАбЕрЕжНаЯ";
// const lowerCaseName = nameLowUP.toLowerCase(); 
// const splitName = lowerCaseName.split(" "); 
// let correctedName = "";

// for (let i = 0; i < splitName.length; i++) {
//     const word = splitName[i];
//     const correctedWord = word[0].toUpperCase() + word.slice(1);
//     correctedName += correctedWord + " ";
// }

// alert(`Привет, ${correctedName}`); 
////////////////////////////////// Закомментил, что бы не было ошибки в консоли

// Продвинутый уровень, задание 2

// const number = Number(prompt("Введите число:"));
    
// const result = number;

// while (true) {
//     alert(`Вы ввели число: ${result}`)
//   const operation = prompt("Введите операцию (+, -, *, /): ");
  
//   const operand = Number(prompt("Введите число для операции:"));
      
//   switch (operation) {
//     case "+":
//       result += operand;
//       break;
//     case "-":
//       result -= operand;
//       break;
//     case "*":
//       result *= operand;
//       break;
//     case "/":
//       if (operand === 0) {
//         alert("Ошибка: деление на ноль!");
//         continue;
//       }
//       result /= operand;
//       break;
//     default:
//       alert("Неверная операция!");
//       continue;
//   }
  
//   const continueCalculation = confirm("Продолжить (OK) или Завершить (Отмена)?");
//   if (!continueCalculation) {
//     break;
//   }
// }
  
// alert(`Результат: ${result}`);
//////////////////////// Закомментил, что бы не было ошибки в консоли

// Продвинутый уровень, задание 3

for (let i = 1; i <= 6; i++) {
    let step = "";
    for (let j = 0; j < i; j++) {
        step += "#";
    }
    console.log(step);
}