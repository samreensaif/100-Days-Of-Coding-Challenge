// 🚀 Day 40 Challenge: Start Coding! 🚀
// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
// Explain & TIP: A for loop is a concise way to run a block of code a specific number of times. It's perfect for when you know exactly how many iterations you need.
import chalk from "chalk";
console.log(chalk.yellowBright(`\n\n\t\t\tDay 40 Challenge`));
console.log(chalk.blueBright(`\n\n\t\tQuestion 118: Use Of For-Loop`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\tNumbers From 1-10 By Using For-Loop\n `));
for (let i = 1; i <= 10; i++) {
    console.log(`\t\t\t ${i} `);
}
// Question 119: Create a while loop that logs "Hello, World!" 5 times.
// Explain & TIP: A while loop continues to run as long as its condition remains true. It’s ideal for when you want to repeat something until a certain condition changes.
console.log(chalk.blueBright(`\n\n\t\tQuestion 119: Use Of While-Loop`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\n\t Console HELLO WORLD 5-times By Using While-Loop\n `));
let m = 1;
while (m <= 5) {
    console.log(chalk.greenBright(`\t\t ${m}.HELLO WORLD`));
    m++;
}
// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.
console.log(chalk.blueBright(`\n\n\t\tQuestion 120: Use Of For--Of Loop`));
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`));
console.log(chalk.magentaBright(`\n\n\t Favourite Movie Names By Using For-Of Loop\n `));
let movieNames = ["Inside Out", "Coco", "The Lion King", "KungFu Panda", "Toy Story"];
for (let i of movieNames) {
    console.log(chalk.greenBright(`\t\t${i}`));
}
