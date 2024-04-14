// Day 44 Challenge: Start Coding! 🚀
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
// Explain & TIP: In modern JavaScript development, modules 
// allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
//import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright(`\n\n\t\tDay 44 Challenge: \n\n\tQuestion 130: Export/Import Function `));
//import sum function from learn.ts file
import { sumFunction } from "./learn.js"; // default import:import single value
console.log(chalk.greenBright(`\n     EXPORT / IMPORT A SUM FUNCTION FROM learn.ts`));
console.log(chalk.greenBright(`     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.redBright(`\n\nThe Sum Of Two Numbers:`, sumFunction(10, 30)));
console.log(chalk.redBright(`\n\nThe Sum Of Two Numbers:`, sumFunction(54, 45)));
// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability is a cornerstone of modern JavaScript application structure.
console.log(chalk.cyanBright(`\n\n\tQuestion 131: Export/Import Class `));
//import class laptop from learn.ts file
// main.ts exports a class laptop from learn.ts
console.log(chalk.greenBright(`\n\tEXPORT / IMPORT A CLASS from learn.ts`));
console.log(chalk.greenBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
import { laptop } from "./learn.js"; //laptop is a class in learn.ts file...default imports: import only 1 value
let myLaptop = new laptop("hp", 200000); //creates an instance of class laptop
console.log(`\n`);
console.log(myLaptop); //display the detailes of class laptop
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
console.log(chalk.cyanBright(`\n\n\tQuestion 132: DEFAULT/NAMED EXPORTS `));
console.log(chalk.greenBright(`\n \tDefault / Named Exports from learn.ts`));
console.log(chalk.greenBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
import { MAX_PRICE, BEST_Laptop } from "./learn.js";
console.log(`\n`);
console.log(MAX_PRICE, BEST_Laptop); // named exports: exports multiple values
