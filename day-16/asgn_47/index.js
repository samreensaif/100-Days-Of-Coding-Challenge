// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// define objects in array
let laptop = [
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
console.log(laptop); //prints array of 3 objects
//array destructuring
let laptop1 = laptop[0];
console.log(`first object in array oflaptop is: `, laptop1); // print 1st object
console.log(laptop[0]);
let laptop2 = laptop[1];
console.log(`second object in array oflaptop is: `, laptop2); //print 2ns object
let laptop3 = laptop[2];
console.log(`third object in array oflaptop is: `, laptop3); //print 3rd object
export {};
