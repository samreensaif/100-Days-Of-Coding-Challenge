// Day 37 Challenge: Start Coding! 🚀

// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.

import chalk from "chalk";
import inquirer from "inquirer";
import { isDate } from "util/types";

console.log ( chalk.blueBright(`\n\t\t   Day 37 Challenge:\n\n\tQuestion 109: Use Of Date Object getHours
\n +++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n\n`))

let currentDay: Date = new Date(); // get current date from system


let currentHour :number = currentDay.getHours();  // get hours from current date


let currentMin : number = currentDay.getMinutes();  // get minutes from current date



if ( currentHour>= 0 && currentHour < 12 && currentMin >= 0 && currentMin <60)
    {
        console.log(chalk.yellowBright(`\tGood Morning Dear!!! Its ${currentHour}:${currentMin} A.M`) )// 
    }

    else 
    { 
        console.log (chalk.yellowBright(`\tGood AfetrNoon Dear!!! Its ${currentHour}:${currentMin} P.M`))
    }

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.

console.log ( chalk.blueBright(`\n\n\tQuestion 110: Use Of if-else-if Chain
\n\t +++++++++++++++++++++++++++++++++++\n\n`))

console.log(chalk.yellowBright(`\n\tGRADING SYSTEM\n\t--------------\n\n`))

let marksObtained = await inquirer.prompt({

    name : "marks",
    type : "number",
    message : "Enter Total Obtained Marks"

})
 let totalMarks = Math.round((marksObtained.marks / 1100) * 100 );

 console.log (chalk.greenBright`\nPercentage: `, totalMarks + ` %`)

 if (  totalMarks <= 50)
    {
        console.log(chalk.redBright(`\n\tSORRY!!!\n\n\t  FAIL `))
    }
 else if ( totalMarks >=50 && totalMarks <60)
    {
        console.log(chalk.magentaBright(`\n\t  CONGRATULATIONS!!!\n\n\t  You Got C - Grade`))
    }
 else if ( totalMarks >=60 && totalMarks <70)
    {
        console.log(chalk.magentaBright(`\n\t  CONGRATULATIONS!!!\n\n\t  You Got B - Grade`))
    }

else if ( totalMarks >=70 && totalMarks <80)
    {
        console.log(chalk.magentaBright(`\n\t  CONGRATULATIONS!!!\n\n\t You Got A - Grade`))
    
    }
else if ( totalMarks >=80 && totalMarks <=99)
    {
        console.log(chalk.magentaBright(`\n\t  CONGRATULATIONS!!!\n\n\t You Got A-1 - Grade`))
    }

else 
    {
        console.log(chalk.red(`\n\t   CONGRATULATIONS!!!\n\n\t RESULT OF SNDH GOVERNMENT `))
    }