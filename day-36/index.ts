// Day 36 Challenge: Start Coding! 🚀

// Question 106: Determine if a given year is a leap year using comparison operators.

// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blueBright(`\n\t\tDay 36 Challenge\n\n\tQuestion 106: Finding Leap Year\n\t-------------------------------\n\n`))

function isLeapYear (year : number ){
if( (year % 4 === 0 && year % 100 !== 0)|| year % 400 ===0)
    {
        console.log (chalk.yellowBright(`\nYes, ${year}. Its a Leap year `))
    }

    else
    {
        console.log(chalk.yellowBright(`\nNo, ${year}. Its not a Leap Year `))
    }
}

isLeapYear(2004);
isLeapYear(2010);

// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder. A number divisible by both 2 and 3 without a remainder is also divisible by 6.

console.log(chalk.blueBright(`\n\t\t\tDay 36 Challenge\n\n\tQuestion 107: Finding Number divisible by both 2 and 3\n\t------------------------------------------------------\n\n`))

function isdivisible(num: number )  {

if ( num % 2 == 0  && num % 3 !==0 ){

    console.log( chalk.yellowBright(`${num}: Divisible by 2 but not divisible by 3`))
}

 else if  ( num % 2 != 0  && num % 3 ==0 ) { 
     
    console.log(chalk.yellowBright(`${num}: Divisible by 3 but not divisible by 2`))
}

else { 
    
    console.log (chalk.yellowBright(`${num}: Divisible by both 2 & 3`))
}
}
isdivisible( 14 ) //Output even
isdivisible( 6 )  //output / by both 2 & 3
isdivisible( 12 )   //output / by both 2 & 3
isdivisible(9)   //output odd

// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.

console.log(chalk.blueBright(`\n\t\t\tDay 36 Challenge\n\n\tQuestion 108: Comparing 2 strings regardless of case sensitive\n\t------------------------------------------------------------\n\n`))

function comparison(str1: string, str2: string):boolean {

 return str1.toLowerCase() === str2.toLowerCase()

}
 comparison("samreen","SAMReen")

console.log (`The strings are same`)

comparison("samreen","HELLO")

console.log(`The strings are not same`)
