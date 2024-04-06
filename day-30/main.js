// 🚀 Day 30 Challenge: Start Coding! 🚀
// Question 88: Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
// Explain & TIP: The Math.round() function is perfect for rounding decimals to the closest whole number. It looks at the decimal part and decides whether to round up or down.
import chalk from "chalk";
console.log(chalk.bold.greenBright("\n\t\t+++++ Day 30 Challenge: +++++\n\n\tQuestion 88: Rounding to the Nearest Integer:\n"));
function numDec(num1) {
    let a = Math.round(num1);
    return a;
}
console.log("The Whole Number After Rounding off: ", numDec(456.67467));
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.
console.log(chalk.bold.greenBright("\n\tQuestion 89: Converting Strings to Numbers:\n"));
// function for numeric string  to real whole number
function stronum(str) {
    return parseInt(str);
}
console.log(`Change numeric string into real number `, stronum("123"));
// function for numeric floating string to real number
function stronum1(str) {
    return parseFloat(str);
}
console.log(`Change floating string into a real floating number `, stronum1("986.567"));
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.
console.log(chalk.bold.greenBright("\n\tQuestion 90: Checking if a Value is NaN:\n"));
function num(num1) {
    return isNaN(num1); //isNaN: returns true if string and returns false if number
}
console.log(`The given input is Number or Not`, num("abc")); // returns true
console.log(`\nThe given input is Number or Not`, num(34234)); // returns false
