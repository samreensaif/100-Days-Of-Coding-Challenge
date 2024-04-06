// Day 26 Challenge: Start Coding! 🚀

// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). They're like personal assistants that do a specific task for you and report back with the results.

import inquirer from "inquirer";
import chalk, { Chalk, chalkStderr } from 'chalk';


console.log(chalk.redBright.bold(`\n\t\tDay 26 Challenge \n\n\tQuestion 76: Function Parameters and Return Values\n\n`))

function sumResult (num1: number, num2: number): number 
{
  
  let  result = num1 + num2
   
  return result
    
}
let sum = sumResult( 5,7);

console.log(`The sum of two numbers: `, sum)

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

// Explain & TIP: Default parameters allow your functions to have preset values for their parameters. These values are used if no other value is provided, making functions more flexible.
console.log(chalk.redBright.bold(`\n\n\tQuestion 77: Default Parameters:\n\n`))

function greet(name:string = "Anonymous")

{
 console.log(chalk.bgRedBright.bold(`\nHello!!!`, name))

}

greet ("MUSAAB");
greet("Firzah");
greet();

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Explain & TIP: JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.

console.log(chalk.redBright.bold(`\n\n\tQuestion 78: Function Expressions vs. Function Declarations:\n\n`))

//Function Expression

let namePrint = () => 
{
   console.log (chalk.bgGreenBright.bold(`Samreen Saif`))
}
namePrint();
//Function Declaration

function namePrint1()
{
  console.log (chalk.bgGreenBright.bold(`\nKanza Saif`))
}
namePrint1();

