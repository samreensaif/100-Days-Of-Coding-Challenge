// Day 35 Challenge: Start Coding! 🚀

// Question 103: Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.

import chalk from "chalk";

console.log(chalk.magentaBright(`\n\n\t\tDay 35 Challenge\n\n\tQuestion 103:Random boolean value\n`))

function isboolean() : boolean {

let num : number = Math.random()

console.log(chalk.greenBright(`\nThe computer Generated Random number is`, num))

return num > 0.5 
}

if (isboolean())
{
    console.log(chalk.greenBright(`\nTRUE! the random number is grater than 0.5`))
}
else
{
    console.log(chalk.greenBright(`\nFALSE!! the random number is not grater than 0.5`))
}


// Question 104: Create a function that generates a random hexadecimal color code.

// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.


console.log(chalk.magentaBright(`\n\n\tQuestion 104:Random Hexadecimal color code\n`))

// This function generates a random hexadecimal color code
function getRandomHexColor(): string {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}

console.log(chalk.greenBright(`\nRandom Hexadecimal Color Code:`, getRandomHexColor())); 
// Outputs a random hex color code like #ff3e12


// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6. Use Math.random() along with some arithmetic to achieve this range.


console.log(chalk.magentaBright(`\n\n\tQuestion 105: Simulate a dice roll \n`))


function diceRoll( num : number ) : number 

{

return  (Math.floor(num*6) +1 )

}


console.log(chalk.greenBright(`\nRandom Integer 1-6 : `, diceRoll(Math.random())))






