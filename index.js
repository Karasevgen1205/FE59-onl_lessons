// "use strict";

// // Примитивы и Объекты.
// // Это – значение «примитивного» типа.
// // Есть 7 примитивных типов: string, number, boolean, symbol, null, undefined и bigint.
// // Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean, Symbol и BigInt. Т

// // Особенные примитивы null и undefined являются исключениями. У них нет соответствующих «объектов-обёрток», и они не имеют никаких методов.
// // В некотором смысле, они «самые примитивные».

// // const userAge = 30;
// // const userName = 'Bob';

// // const billion_1 = 1000000000;
// // const billion_2 = 1_000_000_000;
// // const billion_3 = 1e9; // 1e3 === 1 * 1000 // e3 означает *1000

// // console.log(billion_1)
// // console.log(billion_2)
// // console.log(billion_3)

// // let mcs = 0.000001; // let ms = 1e-6; // шесть нулей слева от 1

// // console.log(0xff); // 255
// // console.log(0xFF); // 255 (то же самое, регистр не имеет значения)

// // let a = 0b11111111; // двоичная (бинарная) форма записи числа 255
// // let b = 0o377; // восьмеричная форма записи числа 255

// // console.log( a == b ); // true, с двух сторон число 255

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Math

// // console.log(Math.floor(1.9)) //Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// // console.log(Math.ceil(1.1)) //Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// // console.log(Math.round(1.5)) //Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
// // console.log(Math.trunc(1.5)) //Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.

// // console.log( Math.trunc(Math.random() * 100000)); // 0.1234567894322
// // console.log( Math.random() ); // 0.5435252343232
// // console.log( Math.random() ); // ... (любое количество псевдослучайных чисел)

// // console.log( Math.max(3, 5, -10, 0, 1) ); // 5
// // console.log( Math.min(1, 2) ); // 1

// // console.log( Math.pow(2, 10) ); // 2 в степени 10 = 1024

// // // toFixed - Округляет значение до ближайшего числа, как в большую, так и в меньшую сторону, аналогично методу Math.round:
// // let num = 12.34;
// // console.log(num.toFixed(1)); // "12.3"

// // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // Проверка: isFinite и isNaN
// // Infinity (и -Infinity) — особенное численное значение, которое ведёт себя в точности как математическая бесконечность ∞.
// // NaN представляет ошибку.
// // isNaN(value) преобразует значение в число и проверяет является ли оно NaN:

// // console.log( isNaN(NaN) ); // true
// // console.log( isNaN("str") ); // true

// // // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// // console.log( isFinite("15") ); // true
// // console.log( isFinite("str") ); // false, потому что специальное значение: NaN
// // console.log( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

// // console.log( Number("100px") ); // NaN

// // console.log( parseInt('100px') ); // 100
// // console.log( parseFloat('12.5em') ); // 12.5

// // console.log( parseInt('12.3') ); // 12, вернётся только целая часть
// // console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения н

// // // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // STRING

// let str1 = "Hello\nWorld";

// // // многострочная строка, созданная с использованием обратных кавычек
// let str2 = `Hello
// World`;

// console.log(str1 == str2); // true

// // Экранирование
// alert( 'I\'m the Walrus!' ); // I'm the Walrus!

// // Доступ к символам
// let str = `Hello`;
// // получаем первый символ
// alert( str[0] ); // H
// alert( str.at(0) ); // H
// // получаем последний символ
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) ); // o

// // Изменение регистра
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface

// // Поиск подстроки
// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)


// if (str.indexOf('Widget') === -1) {
//     console.log('не нашли')
// } else {
//     console.log('нашли')
// }

// // includes, startsWith, endsWith
// alert( "Widget with id".includes("Widget") ); // true
// alert( "Hello".includes("Bye") ); // false

// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3

// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

// 'user/картинки/image.svg'.endsWith('.png') //false
// 'image.png'
// 'image.webp'
// 'image.jpg'

// // Получение подстроки
// // Возвращает часть строки от start до (не включая) end.
// let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// alert( str.slice(0, 5) );
// // 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
// alert( str.slice(0, 1) );

// let str = "stringify";
// alert( str.slice(2) ); // ringify, с позиции 2 и до конца

// // str.substring(start [, end]) //Возвращает часть строки между start и end (не включая) end.

// // Сравнение строк:
// // Строки кодируются в UTF-16. Таким образом, у любого символа есть соответствующий код. Есть специальные методы, позволяющие получить символ по его коду и наоборот.
// alert( 'a' > 'Z' ); // true
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90


// str.trim() — убирает пробелы в начале и конце строки.
// str.repeat(n) — повторяет строку n раз.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//                                      НОВАЯ ТЕМА - ОБЪЕКТЫ
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let user = new Object(); // синтаксис "конструктор объекта" // реже и специфичней
// let user = {};  // синтаксис "литерал объекта"

// const name = '4324';
// name[0];

// const user = {
//     name: 'Bob',
//     age: 30,
//     city: 'Minsk',
//     5: '5 - ключи был числом',
//     '5': '5 - ключи был строка',
//     'new user name': 'efwfe',
//     newUserName: 'wefewf',
//     // age: 66,
// }

// const key = 'city';

// console.log(user);
// // console.log(user.name); // Bob
// // console.log(user.age); // 30
// // console.log(user.city); // 'Minsk',
// // console.log(user['city']); // 'Minsk',
// // console.log(user[key]); // 'Minsk',
// // console.log(user[5]); // '5 - ключи был числом'
// // console.log(user['5']); // '5 - ключи был числом'
// console.log(user['new user name']); // '5 - ключи был числом'
// console.log(user.newUserName); // '5 - ключи был числом'

// delete user.age;

// console.log(user);

// const key = 5;

// const user = {
//     name: 'Bob',
//     age: 30,
//     city: 'Minsk',
// }

// // console.log(user);

// user.pets = true;
// user.age = 27;

// // console.log(user);

// user = 24;// ошибка
// user = {};// ошибка

// const scrollX = this.screenX;

// if (scroll > 0) {
//     if (если пользователь нажал на кнопку "вверх") {
//         this.screenX = 0;
//     }
// }

// console.log(this);

// // составные ключи
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// есть ли свойство в объекте
// const obj = {
//     test: undefined,
//     name: 'Bob',
//     age: 30,
// };

// console.log(obj.test); //выведет undefined, значит свойство не существует?
// console.log(obj.name);
// console.log(obj.jewfnwkjefnwekfwbfhwebfjehwf);
// console.log(obj.ewgehermhlkemfoielfjerio);

// console.log("test" in obj); // true, свойство существует!
// console.log("name" in obj); // true, свойство существует!
// console.log("therrefwergewgw" in obj); // true, свойство существует!

// for(let i = 0; i < 10; ++ i) {}
// for (key in obj) {
//     console.log(key, obj[key]);
//     // тело цикла выполняется для каждого свойства объекта
// }

// for (const key in user) {
//     console.log(typeof key, key, user[key]);
// }

// / КОПИРОВАНИЕ ОБЪЕКТА

// let a = 'nana';
// let b = 'nana';

// console.log(a === b);

// let message = "Привет!";
// let phrase = message; // "Привет!"

// console.log(message);// "Привет!"
// console.log(phrase);// "Привет!"

// message = 'new message';

// console.log(message); //'new message'
// console.log(phrase);// "Привет!"

// let user = {
//     name: "John",
// };

// let admin = user; // копируется ссылка !!!! Все изменения в объекте user будут в объекте admin

// console.log(user);
// console.log(admin);

// user.name = 'new Name: Bil';

// console.log(user);
// console.log(admin);

// let a = {};
// let b = a; // копирование по ссылке

// console.log( a == b ); // true, обе переменные ссылаются на один и тот же объект
// console.log( a === b ); // true

// // let a = {};
// // let b = {}; // два независимых объекта

// let a = {name: 'Jon'};
// let b = {name: 'Jon'}; // два независимых объекта

// console.log( a == b ); // false
// console.log( a === b ); // false


// Сопсоб клонирования
// 1.
// let user = {
//     name: "John",
//     age: 30
// };

// let clone = {}; // новый пустой объект
// // const key = 'name';

// // clone.name = 'ewfew'; === 
// // clone[key] = 'ewfew'; ===


//   // давайте скопируем все свойства user в него
// for (key in user) {
//     clone[key] = user[key];
// }

// console.log(user);
// console.log(clone);
//   // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные

// console.log(user);
// console.log(clone);
// console.log( user.name ); // все ещё John в первоначальном объекте
// 2.
// Object.assign(dest, [src1, src2, src3...])
// let user = {
//     name: "John",
// };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "John", canView: true, canEdit: true }

// // Если скопированное имя свойства уже существует, оно будет перезаписано:
// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// alert(user.name); // теперь user = { name: "Pete" }

// Скопировать в новый объект
// let user = {
//     name: "John",
//     age: 30
//   };

//   let clone = Object.assign({}, user);


// Но это только поверхностное клонирование
// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     },
//   };

//   let clone = Object.assign({}, user);

//   console.log( user.sizes === clone.sizes ); // true, тот же объект

//   // user и clone обладают общим свойством sizes
//   user.sizes.width++;       // изменяем свойства в первом объекте
//   console.log(clone.sizes.width); // 51, видим результат в другом

// 3.
// let user = {
//     name: "John",
//     age: 30
// };

// let cloneUser = {...user};

//   // А это уже Глубокое клонирование!!!!!!
// const deepClone = JSON.parse(JSON.stringify(user));

// let user = {
//     name: "John",
//     sizes: 34,
// };    

// for(key in user) {
//     console.log(key, user[key]);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  THIS - контекст вызова - это ифнормация с котороый вызывается наша функция
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let user = {
//     name: 'John',
//     sizes: 34,
//     sayHi: function() {
//         // console.log('Hi');
//         // console.log(user.name); // Не надо делать
//         console.log(this); //- сам объект
//         // console.log(this.name);
//     },
// };

// user.sayHi(); // Hi

// const clone = user;

// console.log(this);

// let user = {
//     name: "User",
// };
// let admin = {
//     name: "Admin",
// };

// function sayHi() {
//     console.log(this);
// }

// sayHi();

// user.sayHi = sayHi;
// admin.sayHi = sayHi;

// user.sayHi();
// admin.sayHi();

// используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // эти вызовы имеют  разное значение this
// // "this" внутри функции - это объект "перед точкой"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// admin['f'](); // Admin (нет разницы между использованием точки или квадратных скобок для доступа к объекту)


// const userName = 'John';
// const sizes = 34;

// function neName() { // это функция
//     // console.log('Hi');
//     // console.log(user.name); // Не надо делать
//     console.log(this); //- сам объект
//     // console.log(this.name);
// };

// let user = {
//     userName, // то же что и userName: userName,
//     sizes, // sizes: sizes
//     sayHi: function() { // это метод объекат
//         // console.log('Hi');
//         // console.log(user.name); // Не надо делать
//         console.log(this); //- сам объект
//         // console.log(this.name);
//     },
// };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Функции конструкторы
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Обычный синтаксис {...} позволяет создать только один объект.
// Но зачастую нам нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.

// Это можно сделать при помощи функции-конструктора и оператора "new".


// Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:

// Имя функции-конструктора должно начинаться с большой буквы.
// Функция-конструктор должна выполняться только с помощью оператора "new".

// Ниже два одинаковых объекта
// let user = new Object(); // синтаксис "конструктор объекта" // реже и специфичней // {}
// let user = {};  // синтаксис "литерал объекта" // {}

// let user = {
//     name: "Jack",
//     isAdmin: false
// };

// function User(name) {
//     // this = {};  (неявно)

//     //  добавляет свойства к this
//     this.name = name;
//     this.isAdmin = false;

//     // return this;  (неявно)
//   }

//   const user = new User("Jack");

//   console.log(user.name); // Jack
//   console.log(user.isAdmin); // false

// Когда функция вызывается как new User(...), происходит следующее:

// Создаётся новый пустой объект, и он присваивается this.
// Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства.
// Возвращается значение this.


// тоже самое что и
// let user = {
//     name: "Jack",
//     isAdmin: false
//   };


// НО ТЕПЕРЬ Теперь, если нам будет необходимо создать других пользователей, мы можем просто вызвать new User("Ann"), new User("Alice") и так далее.
// Данная конструкция гораздо удобнее и читабельнее, чем многократное создание литерала объекта.

//////!!!!!!!!!!!!!!!
// RETURN В функциях

// function BigUser() {
//     this.name = "John";
//     return { name: "Godzilla" };  // <-- возвращает этот объект
//   }

//   alert( new BigUser().name );  // Godzilla, получили этот объект

// или
// function SmallUser() {

//     this.name = "John";

//     return; // <-- возвращает this
//   }

//   alert( new SmallUser().name );  // John
//////!!!!!!!!!!!!!!!
// Пропуск скобок
// Кстати, мы можем не ставить круглые скобки после new:

// let user = new User; // <-- без скобок
// // то же, что и
// let user = new User();
// Пропуск скобок считается плохой практикой, но просто чтобы вы знали, такой синтаксис разрешён спецификацией.

//////!!!!!!!!!!!!!!!
// Создание методов в конструкторе
// Использование конструкторов для создания объектов даёт большую гибкость.
// Функции-конструкторы могут иметь параметры, определяющие, как создавать объект и что в него записывать.
// Конечно, мы можем добавить к this не только свойства, но и методы.
// Например, new User(name) ниже создаёт объект с заданным name и методом sayHi:

// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//       alert( "Меня зовут: " + this.name );
//     };
//   }

//   let john = new User("John");

//   john.sayHi(); // Меня зовут: John

  
//   john = {
//      name: "John",
//      sayHi: function() { ... }
//   }
  

// ОПЦИОНАЛЬНЯ ЦЕПОЧКА
// let user = {}; // пользователь без свойства "address"
// console.log(user.address); // undefined

// // console.log(undefined.ewfknwj)// Ошибка!
// // console.log((user.address === undefined).street); // Ошибка!


// console.log(user.address ? user.address.street : undefined);
// console.log(user.address?.street?.knrnergjnrek?.fkweiofwkf?.fewplfowkefop); // undefined (без ошибки)



// zadanie_1

const user = {
  name: 'Bob',
  age: 30,
}
delete user.age;
delete user.name
console.log(user);

// zadanie_2

const object = {
  city: 'Minsk',
  password: 1234,
};

if(Object.keys(object).includes('password')){
  console.log('true')
  } else {
  console.log('false')
  }

// zadanie_3 

const student = {
 name: 'John',
 age: 19,
 isHappy: true,
 };
 for (const i in student) {

 console.log([i]);
 console.log(student[i]);
};

// zadanie_4

const colors = {
 'ru pum pu ru rum': {
 red: 'красный',
 green: 'зеленый',
  blue: 'синий'
 },
  };
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].green)

// zadanie_5

let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199
  }
  const Sum = (salaries.andrey + salaries.sveta + salaries.anton + salaries.igor + salaries.alexandra) / 5;
  console.log(Sum)

// zadanie_6

let userInfo = {
  users: [],
  passwords: [],
};

userInfo["users"] = prompt('Введите ваше имя');
userInfo["passwords"] = prompt('Введите ваш пароль');
console.log(userInfo);