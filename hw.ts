// interface User {
//     name: string;
//     phone: string;
//     email: string;
//     animals?: string[];
//     cars?: string[];
//     hasChildren: boolean;
//     hasEducation: boolean;
//   }
  
//   const users: User[] = [
//     {
//       name: "Harry Felton",
//       phone: "(09) 897 33 33",
//       email: "felton@gmail.com",
//       animals: ["cat"],
//       cars: ["bmw"],
//       hasChildren: false,
//       hasEducation: true,
//     },
//     {
//       name: "May Sender",
//       phone: "(09) 117 33 33",
//       email: "sender22@gmail.com",
//       hasChildren: true,
//       hasEducation: true,
//     },
//     {
//       name: "Henry Ford",
//       phone: "(09) 999 93 23",
//       email: "ford0@gmail.com",
//       cars: ["bmw", "audi"],
//       hasChildren: true,
//       hasEducation: false,
//     },
//   ];
  
//   //1
//   function getUserNames(users: User[]): string {
//     return users.map((user) => user.name).join(", ");
//   }
  
//   console.log(getUserNames(users));
  
//   //2
//   function getTotalCars(users: User[]): number {
//     return users.reduce((total, user) => total + (user.cars?.length || 0), 0);
//   }
  
//   console.log(getTotalCars(users));
  
//   //3
//   function getUsersWithEducation(users: User[]): User[] {
//     return users.filter((user) => user.hasEducation);
//   }
  
//   console.log(getUsersWithEducation(users));
  
//   //4
//   function getUsersWithAnimals(users: User[]): User[] {
//     return users.filter((user) => user.animals && user.animals.length > 0);
//   }
  
//   console.log(getUsersWithAnimals(users)); 
  
//   //5
//   function getCarBrands(users: User[]): string {
//     const carBrands = new Set<string>();
//     users.forEach((user) => user.cars?.forEach((car) => carBrands.add(car)));
//     return Array.from(carBrands).join(", ");
//   }
  
//   console.log(getCarBrands(users));



  /// Через класс (всё, что выше я закомментил, чтобы не вызывать ошибку)

 
  class UserManager {
    private users: any[];
  
    constructor(users: any[]) {
      this.users = users;
    }
  
    getUserNamesAsString(): string {
      return this.users.map(user => user.name).join(", ");
    }
  
    getTotalCars(): number {
      return this.users.reduce((total, user) => total + (user.cars?.length || 0), 0);
    }
  
    getWithEducation(): any[] {
      return this.users.filter(user => user.hasEducation);
    }
  
    getWithAnimals(): any[] {
      return this.users.filter(user => user.animals?.length > 0);
    }
  
    getCarBrands(): string {
      const carBrands = new Set();
      this.users.forEach(user => {
        if (user.cars) {
          user.cars.forEach(car => carBrands.add(car));
        }
      });
      return Array.from(carBrands).join(", ");
    }
  }
  
  const users = [
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
  
  const userManager = new UserManager(users);
  console.log(userManager.getUserNamesAsString()); 
  console.log(userManager.getTotalCars()); 
  console.log(userManager.getWithEducation().map(user => user.name)); 
  console.log(userManager.getWithAnimals().map(user => user.name)); 
  console.log(userManager.getCarBrands());