"use strict";
//• Tests for equality and inequality with strings
// Euqality and Inequality Test
console.log("Equality Test for string:", "Apple" === "Apple");
//Inequalty Test with String
console.log("Equality Test for string:", "Apple" != "orange");
//Tests using the lower case function
console.log("lower Case Test, hello = hello", "HELLO".toLowerCase() === "hello");
console.log("lower case test hello = HELLO", "HELLO".toLowerCase() === " HELLO");
console.log("lower case test hello not equal HELLO", "HELLO".toLowerCase() != "HELLO");
console.log("lower case test hello not equal hello", "HELLO".toLowerCase() != "hello");
//Numerical tests involving equality and inequality with numbers 
console.log("Numerical tests involving equality and inequality 24=24", 24 == 24);
console.log("Numerical tests involving equality and inequality 24  equal 42;", 24 === 42);
console.log("Numerical tests involving equality and inequality 24 not equal 42", 24 != 42);
//Greater than or equal to less than or equal to
console.log("Numerical test involving greater than: 24 is greater than 14", 24 > 14);
console.log("Numerical test involving greater than : 24 is greater than 42", 24 > 42);
console.log("Numerical test involving less: than 24 is less than 42", 24 < 42);
console.log("Numerical test involving less: than 42 is less than 24", 42 < 24);
console.log("Numerical test involving less than and equalto:  24 is less than equal to  42", 24 <= 42);
console.log("Numerical test involving greater than and equalto:  42 is less than equal to 24", 24 >= 42);
//• Tests using "and" and "or" operators
console.log(" && operator test: ", 5 === 5 && 10 > 5);
console.log(" && operator test: ", 5 === 5 && 10 < 5);
//test using or operators
console.log(" || operator test: ", 5 === 3 || 10 > 5);
//• Test whether an item is in a array
let favCountry = ["saudia arab", "pakistan", "malaysia", "switzerland"];
console.log(`test for malaysia:`, favCountry.includes("malaysia"));
//Test whether an item is not in a array
console.log(`test for china:`, favCountry.includes("china"));
console.log(`test for china is not in the list :`, !favCountry.includes("china"));
