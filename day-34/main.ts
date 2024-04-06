// Day 34 Challenge: Start Coding! 🚀

// Question 100: Use the JavaScript Math object to find the square root of 144.

// Explain & TIP: The Math.sqrt() function is a straightforward way to calculate the square root of any positive number, directly providing the result you need

import chalk from "chalk";

console.log(chalk.cyanBright(`\n\t********* Day 34 Challenge:*********\n\n\tQuestion 100:The Math.sqrt() function
\t=====================================`))

function sqroot (num : number):number

{
    return Math.sqrt(num)
}

console.log(chalk.redBright(`\nThe Square Root of 144:`, sqroot( 144 )))

console.log(chalk.redBright(`\nThe Square Root of 500:`, Math.round(sqroot( 500 )*100)/100))

// Question 101: Generate a random integer between 1 and 10.

// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.


console.log(chalk.cyanBright(`\n\n\tQuestion 101:The Math.random(),Math.floor(), Math.ceil() function
\t=================================================================`))



console.log(chalk.redBright(`\nRandom Number From 1 - 10`))
console.log(chalk.redBright(`==========================`))

let a = Math.random();
function randomNumber(): number

{

//let a = Math.random();

    return ( Math.floor(a*10), Math.ceil(a*10))

}

console.log(chalk.yellowBright(`\nUse of Random(), Floor() and Ceil() on ${a} :`, randomNumber()))


// Question 102: Calculate and log the absolute difference between the number -5 and 5.

// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.


console.log(chalk.redBright(`\n\n\tUse of Math.abs()`))
console.log(chalk.redBright(`\t===================\n`))

let abs_diff = Math.abs(-5 -5)

console.log( abs_diff )

abs_diff = Math.abs(5 -5)

console.log( abs_diff )

abs_diff = Math.abs(-5 +5)

console.log( abs_diff )
