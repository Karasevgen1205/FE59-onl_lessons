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

// Advanced level

// Task 1

// Мы на футбольном матче, счет забитых голов одной команды не может
// превышать 9 мячей. Жаль что нам присылают результат матча в формате
// «2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
// программу, которая будет за нас переводить формат и выводить результат в
// консоль

// 1. создаю объект, где в качестве ключа число и в качестве значения текст
// 2. создаю переменную с prompt, куда пользователь вводит счет в любом формате
// 3. извлекаю числа из prompt
// 4. преобразовываю полученные числа из текстового в числовой формат
// 5. результатом получается массив, обращаюсь к первому элементу массива, достаю его и использую его в качестве ключа

const numToText = {
    0: 'ноль',
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять'
}
const score = prompt('Input score:');
const textScore = score.match(/\d+/g); // извлекаем числа из в prompt
let numbScore = textScore.map(Number); // преобразовываем результат в число
console.log(numbScore); // получаю массив 

console.log(numToText[numbScore[0]] + ' : ' + numToText[numbScore[1]]);


// Task 2

// Даны два одинаковых объекта. Сравните их так, чтобы они были равны

let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
console.log(JSON.stringify(student1) === JSON.stringify(student2));

// Task 3

// У нас есть объект с животными. Наша задача узнать имя птицы и вывести его в
// консоль. Но произошла ошибка и в этом объекте нет птицы. Если попробуем
// узнать имя мы получим ошибку. Задача придумать, как обратиться к
// несуществующему объекту и не получить ошибку, чтобы наша программа
// работала дальше.

const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
}
if (animals.bird !== undefined && animals.bird.name !== undefined) {
    console.log (animals.bird.name)
} else {
    console.log('Такого объекта не существует');
}
