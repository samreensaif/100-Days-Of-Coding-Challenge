// Day 39 Challenge: Start Coding! 🚀
// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.
import chalk from "chalk";
console.log(chalk.yellowBright(`\n\t\t\tDay 39 Challenge`));
console.log(chalk.blueBright(`\n\n\t\tQuestion 115: Use a switch statement`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.greenBright(`\n\n\t\t\tDAYS OF THE WEEK`));
console.log(chalk.greenBright(`\t\t\t================\n`));
function dayNames(i) {
    switch (i) {
        case 1:
            console.log(chalk.blueBright(`\n\t\t1. SUNDAY`));
            break;
        case 2:
            console.log(chalk.blueBright(`\n\t\t2. MONDAY`));
            break;
        case 3:
            console.log(chalk.blueBright(`\n\t\t3. TUESDAY`));
            break;
        case 4:
            console.log(chalk.blueBright(`\n\t\t4. WEDNESDAY`));
            break;
        case 5:
            console.log(chalk.blueBright(`\n\t\t5. THURSDAY`));
            break;
        case 7:
            console.log(chalk.blueBright(`\n\t\t6. FRIDAY`));
            break;
        case 7:
            console.log(chalk.blueBright(`\n\t\t7. SATURDAY`));
            break;
        default:
            console.log(chalk.redBright("\n\t\t8. Invalid day number"));
            break;
    }
}
dayNames(3); // log Tuesday
dayNames(5); // log Thursday
dayNames(2); // log Monday
dayNames(7); // log Saturday
dayNames(1); // log Sunday
dayNames(8); // Invalid Day Number
// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.
console.log(chalk.blueBright(`\n\n\t\tQuestion 116: Use a switch statement`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.greenBright(`\n\n\t\t\tSEASONS IN A YEAR`));
console.log(chalk.greenBright(`\t\t\t==================\n`));
function season(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log(chalk.blueBright("\n\t\tWinter"));
            break;
        case 3:
        case 4:
        case 5:
            console.log(chalk.blueBright("\n\t\tSpring"));
            break;
        case 6:
        case 7:
        case 8:
            console.log(chalk.blueBright("\n\t\tSummer"));
            break;
        case 9:
        case 10:
        case 11:
            console.log(chalk.blueBright("\n\t\tFall"));
            break;
        default:
            console.log(chalk.redBright("\n\t\tInvalid month"));
            break;
    }
}
season(4); // Outputs: Spring
season(7); // Outputs: Summer
season(11); // Outputs: Fall
season(15); // Outputs : Invalid season
// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
console.log(chalk.blueBright(`\n\n\t\tQuestion 117: Use a switch statement`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.greenBright(`\n\n\t\t\tTO RUN DEFAULT BLOCK`));
console.log(chalk.greenBright(`\t\t\t=====================\n`));
function gradeSystem(str) {
    switch (str) {
        case "A":
            console.log(chalk.blueBright(`\n\t\tGot A-Grade`));
            break;
        case "B":
            console.log(chalk.blueBright(`\n\t\tGot B-Grade`));
            break;
        case "C":
            console.log(chalk.blueBright(`\n\t\tGot C-Grade`));
            break;
        case "D":
            console.log(chalk.blueBright(`\n\t\tGot D-Grade`));
            break;
        default:
            console.log(chalk.redBright("\n\t\tYou Are Fail :("));
            break;
    }
}
gradeSystem("E"); // runs Defult Block
gradeSystem("A"); // Case A
gradeSystem("D"); // Case D
