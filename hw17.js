//block2 ex1
let variable1 = 'true';
let variable2 = false;
let variable3 = 3;
let variable4 = undefined;
let variable5 = null;

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);

//ex2
let height = 15;
let width = 20;

if (height > width) {
    console.log('The biggest number is', height);
} else if (width > height) {
    console.log('The biggest number is', width);
} else {
    console.log('They are even');
}

//ex3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//ex4
let key = true
let documents = false
let pen = true
let apple = false
let orange = true

let shouldGoToWork = false;

if (key && documents && pen && (apple || orange)) {
    shouldGoToWork = true;
}
console.log('Go to work!');

//ex5
let num = parseInt(prompt('Give a number'));

    if (num % 5 === 0) {
        console.log('Fiz');
    }
    if (num % 3 === 0) {
        console.log('Buz');
      }
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizBuz');
}
    
//ex6
// let age = parseInt(prompt('What is your age?'));

// if (age > 18) {
//     console.log('Попей пивка.');
// } else if (age >= 16 && age <= 18) {
//     console.log('Можешь выкурить сигаретку, только маме не говори.');
// } else {
//     console.log('Пей колу.');
// }

//ex7
// let direction = prompt('В какую сторону света вы бы хотели отправиться?');
    
    
// switch (direction) {
//     case 'север':
//        console.log ('На север пойдешь, много денег найдешь.');
//         break;
//     case 'юг':
//         console.log('На юг пойдешь, счастье найдешь.');
//         break;
//     case 'запад':
//         console.log('На запад пойдешь, верного друга найдешь.');
//         break;
//     case 'восток':
//         console.log('На восток пойдешь, разработчиком станешь.');
//         break;
//     default:
//         console.log('Вы ввели неверное направление. Попробуйте еще раз.');
// }
