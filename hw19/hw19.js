
//ex 1
// let myObject = {
//     key1: "value1",
//     key2: "value2"
// }
// console.log(myObject)

// delete myObject.key1;
// delete myObject.key2;

// console.log(myObject)

//ex2
let myObject = {
    key1: "value1",
    key2: "value2"
}

let keyToCheck = "key1";
if (keyToCheck in myObject) {
    console.log(true);
} else {
    console.log(false);
}

//ex3

const student = {
    name: 'John',
    age: 19,
    isHappy: true
};

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

//ex4

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    }
};

console.log(colors['ru pum pu ru rum'].red);
console.log(colors['ru pum pu ru rum'].blue);

//ex5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

let averageSalary = sum / Object.keys(salaries).length;

console.log("Average salary is", averageSalary);

//ex6

let userData = {};

function getUserData() {
    let login = prompt("Введите логин:");
    let password = prompt("Введите пароль:");
    return { login, password };
}

function registerUser() {
    let { login, password } = getUserData();

    userData = { login, password };
}

function validateUser() {
    let confirmedLogin = prompt("Введите ваш логин для подтверждения:");
    let confirmedPassword = prompt("Введите ваш пароль для подтверждения:");

    if (confirmedLogin === userData.login && confirmedPassword === userData.password) {
        console.log("Добро пожаловать!");
    } else {
        console.log("Неверные логин или пароль. Попробуйте снова.");
    }
}

//ex7

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

if (JSON.stringify(student1) === JSON.stringify(student2)) {
    console.log("Объекты равны");
} else {
    console.log("Объекты не равны");
}