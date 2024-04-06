import chalk from "chalk";
// Day 32 Challenge: Start Coding! 🚀
// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
console.log(chalk.blueBright.bold(`\n\t\t\tDay 32 Challenge\n
                    Question 94: Use of .map()
                    ---------------------------`));
function useMap(...str) {
    console.log(`\nOriginal Array:`, str);
    let num = str.map((abc) => abc.length);
    console.log(`\nLength of each elements in the array:`, num);
}
useMap("saif", "samreen", "firzah", "musaab", "kanza", "omar");
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(chalk.blueBright.bold(`\n\n
                    Question 95: Use of .filter()
                    -----------------------------`));
function useFilter(...str) {
    console.log(`Original Array:`, str);
    return str.filter((num) => num > 10);
}
console.log(`\nNew Array of numbers greater than 10:`, useFilter(23, 1, 6, 34, 12, 10, 3, 0));
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
console.log(chalk.blueBright.bold(`\n\n
                    Question 95: Use of .reduce()
                    -----------------------------`));
function useReduce(...str) {
    console.log(`\nOriginal Array:`, str);
    let sum = str.reduce((preValue, currentval) => preValue + currentval);
    return sum;
}
console.log(`\nAfter using .reduce() function:`, useReduce(10, 20, 30, 40, 50));
