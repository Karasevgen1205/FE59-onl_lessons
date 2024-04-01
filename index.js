
// 1
let string = 'true'
let boolean = false
let number = 3
let undef = undefined
let object = null
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof number)
console.log(typeof undef)
console.log(typeof object);

//2
let height = 15
let width = 20
if (height > width) {
  console.log("Наибольшее число: " + height)
} else if (height < width) {
  console.log("Наибольшее число: " + width)
} else {
  console.log("Числа равны");
}

//3
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
//4
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldgotowork = (key && documents && pen) && (apple || orange)
console.log(shouldgotowork);
//5
let promptnumber = prompt("Введите число:")
if (promptnumber % 5 === 0 && promptnumber % 3 === 0) {
  console.log("fizbuz")
} else if (promptnumber % 5 === 0) {
  console.log("fiz")
} else if (promptnumber % 3 === 0) {
  console.log("buz")
} else {
  console.log("Число не делится без остатка ни на 3, ни на 5")
};
//6
let age = prompt("Введите Ваш возраст:")
if (age >= 18) {
    console.log("Попей пивка")
} else if (age >= 16 && age < 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори")
} else {
    console.log("Пей колу")
}
// 7
let direction = prompt("В какую сторону света Вы хотели бы отправиться? (юг, север, запад, восток)")
switch (direction) {
    case "юг":
        console.log("На юг пойдешь, счастье найдешь")
        break
    case "север":
        console.log("На север пойдешь, много денег найдешь")
        break
    case "запад":
        console.log("На запад пойдешь, верного друга найдешь")
        break
    case "восток":
        console.log("На восток пойдешь, разработчиком станешь")
        break
    default:
        console.log("Попробуйте еще раз");
}
// lvl up
// 1
let userName = 'пОлИнА';
let userSurname ='нАбЕрЕжНаЯ'
let correctedName = userName.toLowerCase().replace("п", "П");
let correctedSurname = userSurname.toLowerCase().replace("н", "Н")
alert('Привет, ' + correctedName + '!');
// lvl up
// 2
let startnumber = prompt("Введите число:")
let subtract = prompt("Сколько отнять?")
let add = prompt("Сколько прибавить?")
let multiply = prompt("На сколько умножить?")
let divide = prompt("На сколько разделить?")

let result = ((((startnumber - subtract) + parseFloat(add)) * parseFloat(multiply)) / parseFloat(divide));

alert(`((${number} - ${subtract} + ${add}) * ${multiply}) / ${divide} = ${result}`);
//lvl up
// 3
let steps = 7; 
for (let i = 1; i <= steps; i++) {
    let step = '';
    for (let j = 1; j <= i; j++) {
        step += '#';
    }
    console.log(step);}