// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.


// define objects in array

let laptop = [
   {
    make : " HP",
    model: "eliteBook",
    year: 2020
},
{
    make : " Intel",
    model: "corei5",
    year: 2018
},
{
    make : " Dell",
    model: "inspiron 14",
    year: 2022
}, ];

console.log(laptop)           //prints array of 3 objects

//array destructuring

let [ltop1,ltop2] = laptop

console.log(`first object in array oflaptop is: `, ltop1)    // print 1st object


let laptop2 = laptop[1];

console.log(`second object in array of laptop is: `, ltop2) //print 2ns object

