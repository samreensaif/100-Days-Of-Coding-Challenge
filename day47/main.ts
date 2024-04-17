// Day 47 Challenge: Start Coding! 🚀

// Question 139: List three reserved words in JavaScript and create a valid use case for each.

import chalk from "chalk"

//Reserved words are words that have special meaning and are reserved for specific purposes within the language.

console.log(chalk.redBright(`\n\n\t\t\tDay 47 Challenge:`))

console.log(chalk.cyanBright(`\n\t\tQuestion 139: LIST 3 RESERVED WORDS`));
console.log(chalk.cyanBright(`\t\t====================================`));

console.log(`\n\t\t1st KEYWORD: "FUNCTION()"`)          //1ST RESERVED WORD: function()

function sum( num1 : number = 5, num2: number = 6)
{
    console.log( `Perform a Function of Sum of two numbers: `, num1+num2)

}

sum();
console.log(`\n\t\t"2nd KEYWORD: "IF - ELSE-IF - ELSE "`)  // 2nd keyword: if statement checks the condition

let age : number = 16

if ( age >= 18  )
    {
        console.log(`\n\nYou Can Drive `,age );
    }
else
{
    console.log(`\n\n You Cannot Drive  `);
}
        
console.log(`\n\t\t"3rd KEYWORD: "for() "`)  // 3rd keyword: for is a loop performing iteration

    for ( let i = 0 ; i<=10 ; i++ )
       {
        console.log(`\t${i}`)

       } 


// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.

console.log(chalk.cyanBright(`\n\t\tQuestion 140: USE OF RESERVED WORDS AS A VARIABLE SHOWS ERROR`));
console.log(chalk.cyanBright(`\t\t==============================================================\n\n`));

let num : number = 10;

//let break : string = " stop "         // show error as break is a reserved keyword in Typescript

console.log(`\n\n ${num}\n\n`)
console.log(`"Using a reserved word as a variable name causes a syntax error in JavaScript.`)

// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.


console.log(chalk.cyanBright(`\n\t\tQuestion 141: Significance of the await reserved word in asynchronous JavaScript.`));
console.log(chalk.cyanBright(`\t\t================================================================================\n\n`));


async function greet() 
{
    
    let sayHello = await someAsyncFunction(); // Wait for the promise to resolve
    
    console.log(sayHello); // Output the result of the asynchronous operation
}

async function someAsyncFunction()

{
    return "Hello, world!"; // Simulated asynchronous operation
}

greet();            //call async function greet and inside greet function someAsyncFunction calls
