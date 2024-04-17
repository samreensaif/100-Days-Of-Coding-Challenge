// 🚀 Day 46 Challenge: Start Coding! 🚀

// Question 136: Use console.log() to debug and track the value of a variable inside a loop.

import chalk from "chalk";

console.log(chalk.greenBright(`\n\t\t\t\tDay 46 Challenge:\n\n`))

console.log(chalk.yellowBright(`"Question 136: Use console.log() to debug and track the value of a variable inside a loop"`))


console.log(`\n\t\tPRINT NUMBERS FROM 11-20\n`)

let num : number = 11;

for ( let i = 1; i<=10 ; i++)   //for loops iteration start from 1 and ends at 10

    {

        console.log(`iteration # ${i} =`,num );  //print numbers from 11 - 20
        
        num++;          // num value increases everytime from 11 till 20
    }


// Question 137: Implement a try-catch block to handle potential errors in a block of code.


console.log(chalk.yellowBright(`\n\n"Question 137: Implement a try-catch block to handle potential errors in a block of code"`))


console.log(`\n\tTRY-CATCH BLOCK-- TO HANDLE ERRORS\n`)

try{
for ( let i = 1; i<=10 ; i++)   //for loops iteration start from 1 and ends at 10
    {
        console.log(`iteration # ${i} =`,num );  //print numbers from 11 - 20
        
            if( num > 20)       // num value increases everytime from 11 till 20
                {
                    throw new Error("Value of num exceeds 20"); //
                }
            num++; 
    }

} catch(error)
   
        {

    console.error(error)    // now m = 20  so it throws error message
        
        }

// Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.

console.log(chalk.yellowBright(`\n\n"Question 138: Use Of Break Points"`))


console.log(`\n\tUSE OF BREAK POINTS\n`)


let num1 : number = 11;

for ( let i = 1; i<=10 ; i++)   //for loops iteration start from 1 and ends at 10

    {

        console.log(`iteration # ${i} =`,num1 );  //print numbers from 11 - 20
        
        num1++;          // num value increases everytime from 11 till 20
    }