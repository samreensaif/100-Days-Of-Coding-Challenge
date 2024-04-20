// Day 49 Challenge: Start Coding! 🚀
// Question 145: Create a function that accepts a callback and invokes it with some arguments.
console.log(`\n\t Callback function\n\n`);
function hello(callback) {
    callback("Samreen"); // pass the argument with Samreen to the callback function
}
function arrowFunction(name) {
    console.log(`Hello, ${name}`);
}
hello(arrowFunction); // shows the O/P Hello, Samreen 
// Question 146: Show an example of a callback function used to filter an array of numbers.
console.log(`\n\t Use Callback function in Map() & Filter()\n\n`);
let randomNumbers = [5, 7, 2, 3, 9, 8, 11, 1, 0, 6];
// here arrow function works as a callback
let smallerNum = randomNumbers.filter((element) => element <= 5);
console.log(smallerNum);
let mapNum = randomNumbers.map((element) => (`${element}00`));
console.log(mapNum);
export {};
// Question 147: Explain how to handle errors in a callback pattern.
