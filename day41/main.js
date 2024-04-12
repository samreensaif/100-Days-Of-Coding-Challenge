// 🚀 Day 41 Challenge: Start Coding! 🚀
// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright(`\n\n\t\t\tDay 41 Challenge`));
console.log(chalk.blueBright(`\n\tQuestion 121: Use Of For-Loop With Continue Statement`));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\tNumbers From 1-10 But Skip Number 5\n`));
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(chalk.greenBright(`\t\t\t${i}`));
}
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
console.log(chalk.blueBright(`\n\tQuestion 122: Use Of WHile-Loop With Break Statement`));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\tNumbers From 10-1 And Breaks At Skip Number 5\n`));
let m = 10;
while (m <= 10) {
    if (m === 5) {
        break;
    }
    console.log(chalk.greenBright(`\t\t\t${m}`));
    m--;
}
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
console.log(chalk.blueBright(`\n\tQuestion 123: Loop Over A String And Stop When Encountered A Vowel`));
console.log(chalk.blueBright(`\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
let ask = await inquirer.prompt({
    name: "msg",
    type: "input",
    message: "\nEnter any string you want to check for Vowel:"
});
for (let i = 0; i <= ask.msg.length; i++) {
    if (ask.msg.charAt(i) === "a" ||
        ask.msg.charAt(i) === "e" ||
        ask.msg.charAt(i) === "i" ||
        ask.msg.charAt(i) === "o" ||
        ask.msg.charAt(i) === "u")
        console.log(chalk.greenBright(`\n\n\t\t In The String ${ask.msg} Vowel Comes At Position `), chalk.magentaBright(`${i}`));
}
