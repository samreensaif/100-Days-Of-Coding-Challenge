// Day 33 Challenge: Start Coding! 🚀

// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

import chalk from "chalk";

console.log(chalk.bgMagentaBright(`\n\t\t\tDay 33 Challenge\n\n\t\tQuestion 97:Return a Date: "DD-MM-YYYY"`))

let currdate: Date = new Date();      // todays date

let currYear = currdate.getFullYear() // gets full year from todays date

let month = currdate.getMonth();   // gets month from todays date

let day = currdate.getDay();        //gets day from todays date

function currentDate() : string 
{

//gets Month from todays date and padstart makes the month looks total 2 digits if its a single digit month

let currMonth = String(month + 1).padStart(2,"0")   

// gets day from todays date and padstart makes the day looks total 2 digits if its a single digit day

let currDay = String(day).padStart(2,"0")

return (chalk.greenBright(`${currDay}-${currMonth}-${currYear}`))
}

console.log ( `\nTodays Date:`,currentDate());

// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.

console.log(chalk.bgMagentaBright(`\n\tQuestion 98:How many days are left until New Year.`))


function new_Year():number {

let newYear = new Date(currdate.getFullYear() + 1, 0, 1); // January 1st of next year

// console.log(`\n`,newYear)

const diff = newYear.getTime() - currdate.getTime(); // Difference in milliseconds

// console.log(`\n`,diff)

const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days

return days;
}


console.log(`\nDays Remaining to New Year`,new_Year())

// Question 99: Generate a date object representing your next birthday and log it to the console.

// Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.

console.log(chalk.bgMagentaBright(`\n\t\tQuestion 99: Birth date`))

function nextBirthDay( Month: number,Day: number ) :Date
 {

let birthday = new Date(currYear, Month - 1,Day); // Months are 0-indexed

// console.log(birthday)

if (birthday<currdate){

        // If the birthday this year has already passed, use next year's date
        birthday.setFullYear(currYear + 1);
}
        return birthday

}
let nextBirthday = nextBirthDay(1,30); // Example: January,30th
console.log("\nNext birthday on:", nextBirthday.toLocaleDateString());

nextBirthday = nextBirthDay(6,30); // Example: June,30th
console.log("\nNext birthday on:", nextBirthday.toLocaleDateString());



