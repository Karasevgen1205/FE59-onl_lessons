interface IUser {
    name: string;
    phone?: string;
    email?: string;
    animals?: string[];
    cars?: string[];
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
      hasEducation: true,
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true,
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false,
    },
  ];
  
  function getUserNames(users: IUser[]): string {
    return users.map(user => user.name).join(", ");
  }
  console.log(getUserNames(users));
  
  function getTotalCars(users: IUser[]): number {
    return users.reduce((total, user) => total + (user.cars ? user.cars.length : 0), 0);
  }
  console.log(getTotalCars(users));
  
  function filterByEducation(users: IUser[]): IUser[] {
    return users.filter(user => user.hasEducation);
  }
  console.log(filterByEducation(users));
  
  function filterByAnimals(users: IUser[]): IUser[] {
    return users.filter(user => user.animals && user.animals.length > 0);
  }
  console.log(filterByAnimals(users));
  
  function getCarBrands(users: IUser[]): string {
    const carBrands = users.reduce((brands, user) => {
      if (user.cars) {
        brands.push(...user.cars);
      }
      return brands;
    }, [] as string[]);
    return carBrands.join(", ");
  }
  console.log(getCarBrands(users));  