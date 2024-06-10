// 1. Создать строку из имен пользователей через запятую
// 2. Подсчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и
// отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы
// строку с названиями марок автомобилей через запятую

interface IUser {
  name: string
  phone: string
  email: string
  animals?: string[]
  cars?: string[]
  hasChildren: boolean
  hasEducation: boolean
}

const users: IUser[] = [
  {
    name: 'Harry Felton',
    phone: '(09) 897 33 33',
    email: 'felton@gmail.com',
    animals: ['cat'],
    cars: ['bmw'],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: 'May Sender',
    phone: '(09) 117 33 33',
    email: 'sender22@gmail.com',
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: 'Henry Ford',
    phone: '(09) 999 93 23',
    email: 'ford0@gmail.com',
    cars: ['bmw', 'audi'],
    hasChildren: true,
    hasEducation: false,
  },
]

const getUserNames = (users: IUser[]): string => {
  return users.map(obj => obj.name).join(', ')
}

const getCountOfUsersCars = (users: IUser[]): number => {
  return users.reduce((sum, obj) => {
    if (obj.cars) {
      return sum + obj.cars.length
    } else {
      return sum
    }
  }, 0)
}
const filterUsersForEducation = (users: IUser[]): IUser[] => {
  return users.filter(obj => obj.hasEducation)
}
const filterUsersForAnimals = (users: IUser[]): IUser[] => {
  return users.filter(obj => obj.animals)
}

const getUserCars = (users: IUser[]): string => {
  return users
    .filter(obj => obj.cars)
    .reduce((carNames, user) => {
      if (user.cars) {
        return carNames ? `${carNames}, ${user.cars.join(', ')}` : user.cars.join(', ')
      }
      return carNames
    }, '')
}

class UserArrayOperations {
  users: IUser[]

  constructor(users: IUser[]) {
    this.users = users
  }

  public getUserNames(): string {
    return this.users.map(obj => obj.name).join(', ')
  }

  public getCountOfUsersCars(): number {
    return this.users.reduce((sum, obj) => (obj.cars ? sum + obj.cars.length : sum), 0)
  }

  public filterUsersForEducation(): IUser[] {
    return this.users.filter(obj => obj.hasEducation)
  }

  public filterUsersForAnimals(): IUser[] {
    return this.users.filter(obj => obj.animals)
  }

  public getUserCars(): string {
    return this.users
      .filter(obj => obj.cars)
      .reduce((carNames, user) => {
        if (user.cars) {
          return carNames ? `${carNames}, ${user.cars.join(', ')}` : user.cars.join(', ')
        }
        return carNames
      }, '')
  }
}

const newUser = new UserArrayOperations(users)

console.log(newUser.getUserNames())
console.log(newUser.getCountOfUsersCars())
console.log(newUser.filterUsersForEducation())
console.log(newUser.filterUsersForAnimals())
console.log(newUser.getUserCars())
