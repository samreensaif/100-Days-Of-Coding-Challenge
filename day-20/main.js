import inquirer from "inquirer";
// Day 20 Challenge: Start Coding! 🚀
// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
console.log("\n\t\t Day20 Challenge \n\n\t\t Question 58 : AVERAGE SCORE CALCULATOR\n\n");
function avgscore(...score) {
    let avg = score.reduce((a, b) => a + b, 0) / score.length;
    return avg;
}
console.log("Average Score Calculator:", avgscore(2, 8, 10));
console.log("\nAverage Score Calculator:", avgscore(10, 20, 30, 40, 50, 60));
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
console.log("\n\n\t\t Question 59 : ADD A SPECIAL NUMBER\n\n");
//first version: add special number to each of the elements of the array
console.log("\nfirst version\n");
function adderNumber(...num) {
    let adder = 213;
    console.log(`\nThe original array is ${num}`);
    {
        for (let i of num)
            console.log(`\n${i}${adder}`);
    }
}
adderNumber(76, 44, 892, 1);
adderNumber(5, 3, 8);
//second version: add the special number to the given number
console.log("\nsecond version\n");
function addnum(num) {
    console.log(`\nAlready have number : ${num}`);
    return num + 392;
}
let newnum = addnum(33);
console.log(`\nnow add 392 to the given number we got: ${newnum}\n`);
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
console.log("\n\n\t\t Question 60: Self Running User Profile\n\n");
const request = await inquirer.prompt([
    { message: " enter your Username", type: "string", name: "username" },
    { message: " enter your age", type: "number", name: "age" }
]);
console.log(`\nUser's Name:`, request.username);
console.log(`\nUser's Age:`, request.age);
let arr = [1, 2];
let arr1 = [3, 4];
let result = arr.concat(arr1);
console.log(result);
