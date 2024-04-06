// Day 27 Challenge: Start Coding! 🚀
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
// Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.
import chalk from "chalk";
console.log(chalk.yellowBright.bold(`\n\t\tDay 27 Challenge\n\tQuestion 79: Creating and Accessing Object Properties:`));
let car = {
    car_name: "Honda",
    car_model: "Civic",
    car_year: 2024,
    car_price: 7000000
};
console.log(chalk.ansi256(201)(`\n\t`, car.car_name, car.car_model, car.car_price, car.car_year));
console.log(`\n\t`, car);
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.
console.log(chalk.yellowBright.bold(`\n\tQuestion 80: Updating Object Properties:`));
// Update the property "car_year" of object car
car.car_year = 2023;
console.log(car);
//Adding new property car.car_color = "Red" to the object car
car.color = "Red";
console.log(car);
//  Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.
console.log(chalk.yellowBright.bold(`\n\tQuestion 81: Iterating Over Object Properties: `));
function makestudentObject(student) {
    console.log(name, rollnum);
}
let studentinfo = makestudentObject, { name = "samreen", rollnum = 19 };
console.log(studentinfo);
