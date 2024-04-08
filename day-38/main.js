// Day 38 Challenge: Start Coding! 🚀
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.
import chalk from "chalk";
console.log(chalk.greenBright(`\n\t\t\t Day 38 Challenge:\n\n\t\tQuestion 112: The Map object in JavaScript\n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n`));
let countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("India", "Delhi");
countries.set("Bangladesh", "Dhaka");
console.log(countries); // console all the keys and pairs
console.log(chalk.blueBright(countries.get("Pakistan"))); //console only 1st key by using get()
console.log(chalk.blueBright(countries.get("India"))); //console only 2st key by using get()
console.log(chalk.blueBright(countries.get("Bangladesh"))); //console only 3st key by using get()
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
console.log(chalk.greenBright(`\n\t\tQuestion 113: The Map object with .has() method \n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
//checks whether Canada presents by using .has() returns false
console.log(chalk.blueBright(`Canada : `, countries.has("Canada")));
//checks whether Bangladesh presents by using .has() returns true
console.log(chalk.blueBright(`Bangladesh : `, countries.has("Bangladesh")));
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.
console.log(chalk.greenBright(`\n\t\tQuestion 114: Iteration over Map object \n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
let studentInfo = new Map();
studentInfo.set("Firzah", { class: "XV", rollnum: "2345" });
studentInfo.set("Musaab", { class: "XIII", rollnum: "8763" });
studentInfo.set("Kanza", { class: "XI", rollnum: "3045" });
studentInfo.set("Omar", { class: "VII", rollnum: "1205" });
console.log(`\n`);
console.log(studentInfo);
console.log(chalk.greenBright('\nGet Value from Iteration\n'));
studentInfo.forEach((value, key) => {
    // Applying chalk formatting
    console.log(chalk.blueBright(`${key}:    ${value.class} ${value.rollnum}`));
});
