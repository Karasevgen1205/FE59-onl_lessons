import { createContext } from "react";

export const MyContext = createContext<{isBlackTheme: boolean}>({isBlackTheme: false});

// function* func() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 4;
// }

// const generator = func();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
