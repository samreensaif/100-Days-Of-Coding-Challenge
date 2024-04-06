"use strict";
// Assignment # 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
console.log(`\n ASSIGNMENT # 46 \n`);
let laptop = {
    make: " HP",
    model: "eliteBook",
    year: 2024,
    describe: function () {
        console.log(`This Laptop is ${laptop.make} model ${laptop.model} makes in the year ${laptop.year}`);
        console.log(`this laptop is ${this.make} ${this.model} in year ${this.year}`);
        console.log(this.make, this.model, this.year);
    }
};
laptop.describe();
// Assignment # 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
console.log(`\n ASSIGNMENT # 47 \n`);
// define objects in array
let laptp = [
    {
        make: " HP",
        model: "eliteBook",
        year: 2020
    },
    {
        make: " Intel",
        model: "corei5",
        year: 2018
    },
    {
        make: " Dell",
        model: "inspiron 14",
        year: 2022
    },
];
console.log(laptp); //prints array of 3 objects
//array destructuring
let laptop1 = laptp[0];
console.log(`first object in array oflaptop is: `, laptop1); // print 1st object
let laptop2 = laptp[1];
console.log(`second object in array oflaptop is: `, laptop2); //print 2ns object
let laptop3 = laptp[2];
console.log(`third object in array oflaptop is: `, laptop3); //print 3rd object
// Assignment # 48. Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
console.log(`\n ASSIGNMENT # 48 \n`);
let hpPrices = [10000, 30000, 15000];
let intlPrices = [20000, 10000, 12000];
let combinelaptopPrices = [...hpPrices, ...intlPrices]; // combine the 2 arrays by spread operator
console.log(combinelaptopPrices); //print the new array
console.log(combinelaptopPrices.sort()); // first sort and then print the new combined array
