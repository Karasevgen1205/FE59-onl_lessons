//1

let Object1 = {
    key1: "ключ",
    key2: "тоже ключ"
  };

  delete Object1.key1;
  delete Object1.key2;

  console.log(Object1);

  //2

  let Object2 = {
    key1: "ключ",
    key2: "тоже ключ"
  };

  if (Object2.hasOwnProperty('key1')) {
    console.log(true);
   
  }
  
  if (Object2.hasOwnProperty('key2')) {
    console.log(true);


}

//3

 const student = {
    name: 'John',
    age: 19,
    isHappy: true
  };  

  console.log('Ключи объекта:');
   for (let key in student) {
    console.log(key);
  }
  
  console.log('Значения ключей объекта:');
  for (let key in student) {
    console.log(student[key]);
  }

//4

const colors = {
    'ru pum pu ru rum': {
red: 'красный',
green: 'зеленый',
blue: 'синий'
},
}

 console.log(colors['ru pum pu ru rum'].red);
 console.log(colors['ru pum pu ru rum'].blue); 

//5

const salaries = {
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
  
  const averageSalary = sum / Object.keys(salaries).length;
  
  console.log(averageSalary);

  //6

   
  let users = {}; 

function validate() {
    let username = prompt("Введите логин");
    let password = prompt("Введите пароль");

    if (username && password) {
        users[username] = password;
        alert("Вы успешно зарегистрированы!");
    } else {
        alert("Ошибка! Логин и пароль должны быть заполнены.");
    }
}

function login() {
    let username = prompt("Введите логин");
    let password = prompt("Введите пароль");

    if (users[username] === password) {
        alert("Добро пожаловать!");
    } else {
        alert("Ошибка! Проверьте правильность введенных данных.");
    }
}

validate();
login();

 
//LVL UP 1

function footballScore(score) {
    let goals = score.split(':');
    let FirstTeamGoals = parseInt(goals[0]);
    let SecondTeamGoals = parseInt(goals[1]);
  
    let FirstTeamGoalsText = '';
    let SecondTeamGoalsText = '';
  
    for (let i = 1; i <= 9; i++) {
      if (FirstTeamGoals === i) {
        FirstTeamGoalsText = getGoalText(i);
      }
      if (SecondTeamGoals === i) {
        SecondTeamGoalsText = getGoalText(i);
      }
    }
  
    console.log(`${FirstTeamGoalsText} : ${SecondTeamGoalsText}`);
  }
  
  function getGoalText(num) {
    switch (num) {
      case 1:
        return 'один гол';
      case 2:
        return 'два гола';
      case 3:
        return 'три гола';
      case 4:
        return 'четыре гола';
      case 5:
        return 'пять голов';
      case 6:
        return 'шесть голов';
      case 7:
        return 'семь голов';
      case 8:
        return 'восемь голов';
      case 9:
        return 'девять голов';
      default:
        return '';
    }
  }
  
  footballScore('2:5');

//LVL UP 2

let student1 = {
    name: 'Polina',
    age: 27,
};

let student2 = {
    name: 'Polina',
    age: 27,
};

if (JSON.stringify(student1) === JSON.stringify(student2)) {
    console.log('Объекты равны');
} else {
    console.log('Объекты не равны');
}

//LVL UP 3

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

    const AnimalNames = animals.cat?.name + " " + animals.dog?.name + " " + animals.bird?.name
    console.log(AnimalNames)
    