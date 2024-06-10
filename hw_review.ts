interface IUser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    // animals?: Array<"cat" | "dog">;
    cars?: string[];
    // cars?: Array<"bmw" | "audi">;
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: IUser[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];

// ****************1************
function getStringUsersNames<T extends IUser>(users: T[], separator: string = ", "): string {
    return users
        .map(user => user.name)
        .join(separator);
    // return array.map(({ name }) => name).join(', ');
}

console.log(getStringUsersNames(users));

// ****************2************
function calcUsersCars<T extends IUser>(users: T[]): number {
    return users
        .map(user => user.cars)
        .filter(cars => cars !== undefined)
        .map(cars => cars!.length)
        .reduce((sum: number, curr: number) => sum + curr, 0);

        //////
        // array.forEach(obj => {
        //     if ('cars' in obj) {
        //         carsNum += obj.cars!.length;
        //     }
        // })
        // return carsNum
}

console.log(calcUsersCars(users));

///////

// function getTotalCars(users: IUser[]): number {
//     return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
//   }

// ****************3************
function getUsersWithEducation<T extends IUser>(users: T[]): T[] {
    return users.filter(user => user.hasEducation);
}

console.log(getUsersWithEducation(users));

// ****************4************
function getUsersWithAnimals<T extends IUser>(arrayUsers: T[]): T[] {
    return arrayUsers.filter(user => user.animals && user.animals.length !== 0);
    // return users.filter((user) => user.animals && user.animals.length > 0);
}

console.log(getUsersWithAnimals(users));

// ****************5************
// function getStringCarsBrand<T extends IUser>(users: T[], removeDuplicates: boolean): string {
//     let usersCars = [].concat(...users.filter(user => user.cars && user.cars.length !== 0).map(user => user.cars)) as string[];

//     if (removeDuplicates) {
//         return usersCars
//             .filter((brand: string, index: number, array: string[]) => array.indexOf(brand) === index)
//             .join(", ");
//     }

//     return usersCars.join(", ");
// }

// console.log(getStringCarsBrand(users, true));
// console.log(getStringCarsBrand(users, false));



function getCarBrands(users: IUser[]): string {
    const carBrands = users.reduce((brands: string[], user) => {
      if (user.cars) {
        brands.push(...user.cars);
      }
      return brands;
    }, []);
    return carBrands.join(", ");
}''

// class UserManager {
//     private users: IUser[];

//     constructor(users: any[]) {
//       this.users = users;
//     }

//     getUserNamesAsString(): string {
//       return this.users.map(user => user.name).join(", ");
//     }

//     getTotalCars(): number {
//       return this.users.reduce((total, user) => total + (user.cars?.length || 0), 0);
//     }

//     getWithEducation(): any[] {
//       return this.users.filter(user => user.hasEducation);
//     }

//     getWithAnimals(): any[] {
//       return this.users.filter(user => user.animals?.length > 0);
//     }

//     getCarBrands(): string {
//       const carBrands = new Set();
//       this.users.forEach(user => {
//         if (user.cars) {
//           user.cars.forEach(car => carBrands.add(car));
//         }
//       });
//       return Array.from(carBrands).join(", ");
//     }
//   }

//   const userManager = new UserManager(users);

/////////////
class UserArrayOperations {
    public users: IUser[]
  
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