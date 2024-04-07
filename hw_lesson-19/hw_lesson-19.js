// Task 1

// Создать любой объект с двумя ключами и любыми значениями в них, а затем удалить ключи из объекта.

const cat = {
    name: 'Timofey',
    age: 5
}
for (const key in cat) {
    delete cat[key];
}
console.log(cat);

// Task 2

// Создать любой объект с двумя ключами и любыми значениями в них, а затем
// проверить есть ли в объекте определенный ключ и если есть вывести в
// консоль true.

const dog = {
    color: 'black',
    gender: 'male'
}
console.log('color' in dog) // True
console.log('name' in dog) // False

// Task 3

// Дан объект. C помощью цикла for..in вывести в консоль сначала все ключи, потом
// значения ключей объекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const key in student) {
    console.log(key);
};
for (const key in student) {
    console.log(student[key]);
};

// Task 4

// Дан объект. Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum']['red']); // 1 way
console.log(colors['ru pum pu ru rum'].red); // 2 way
console.log(colors['ru pum pu ru rum']['blue']); // 1 way
console.log(colors['ru pum pu ru rum'].blue); // 2 way

// Task 5

// Дан объект. Вычислить среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}
let sumSalary = 0;
let countOfKey = 0;
for (const key in salaries) {
    sumSalary = sumSalary + salaries[key];
    countOfKey++;
}
let averageSalary = sumSalary / countOfKey;
console.log(averageSalary);

// Task 6

// Создать валидатор, запросить у пользователя логин и пароль для регистрации.
// Затем данные записать в объект. Потом попросить пользователя подтвердить данные. Если верно введен логин
// и пароль, вывести сообщение Добро пожаловать.

const userLogin = prompt('Input login');
const userPassword = prompt('Input password');
const user = {
    login: userLogin,
    password: userPassword
}

const userLoginConfirm = prompt('Repeat login');
const userPasswordConfirm = prompt('Repeat password');
const userConfirm = {
    login: userLoginConfirm,
    password: userPasswordConfirm
}

if (user.login === userConfirm.login && user.password === userConfirm.password) {
    console.log('Добро пожаловать!')
} else {
    console.log('Попробуйте еще раз');
}