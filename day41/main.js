// 🚀 Day 41 Challenge: Start Coding! 🚀
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`\n\n\t\t\tDay 41 Challenge`));
console.log(chalk.blueBright(`\n\tQuestion 121: Use Of For-Loop With Continue Statement`));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\tNumbers From 1-10 But Skip NUmber 5 \n `));
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; //when i == 5 dont print continue
    }
    console.log(chalk.greenBright(`\t\t\t ${i} `));
}
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.
console.log(chalk.blueBright(`\n\tQuestion 122: Use Of While Loop With Break Statement`));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\tNumbers From 10-1 But Break Loop At 5 \n `));
let m = 10;
while (m <= 10) {
    if (m === 5) {
        break; //when m == 5 breaks the statement
    }
    console.log(chalk.greenBright(`\t\t\t${m}`));
    m--;
}
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.
console.log(chalk.blueBright(`\n\tQuestion 123 : Loop over a string and stop when encountered a Vowel `));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
let ask = await inquirer.prompt({
    name: "msg",
    type: "input",
    message: "\nEnter any message you want to check for vowel:  "
});
for (let i = 0; i <= ask.msg.length; i++) {
    if (ask.msg.charAt(i) === "a" || ask.msg.charAt(i) === "e" || ask.msg.charAt(i) === "i" || ask.msg.charAt(i) === "o" || ask.msg.charAt(i) === "u") {
        console.log(chalk.greenBright(`\n\n\t\tIn the string ${ask.msg} vowel comes at position`), chalk.redBright(`${i}`));
        break;
    }
}
