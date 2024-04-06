// Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:
//If the person is less than 2 years old, print a message that the person is a baby.
var age = 1;
//FIRST VERSION AGE = 2years
if (age < 2) {
    console.log("\nIf person's age is less than 2 years old, the person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age === 2 && age < 4) {
    console.log("\nIf person's age is atleast 2 years old but less than 4, the person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age === 4 && age < 13) {
    console.log("\nIf person's age is atleast 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 && age < 20) {
    console.log("\nIf person's age is atleast 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age === 20 && age < 65) {
    console.log("\nIf person's age is atleast 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\nIf person's age is 65 or older, the person is an elder.");
}
//SECOND VERSION PERSON AGE ATLEAST 2 AND LESS THAN 4
age = 3;
if (age == 2) {
    console.log("\nIf person's age is less than 2 years old, the person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("\nIf person's age is atleast 2 years old but less than 4,the person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age === 4 && age < 13) {
    console.log("\nIf person's age is atleast 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 && age < 20) {
    console.log("\nIf person's age is atleast 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age === 20 && age < 65) {
    console.log("\nIf person's age  is atleast 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\nIf person's age is age 65 or older, person is an elder.");
}
//THIRD VERSION AGE IS IN BETWEEN 4 AND 13
age = 11;
if (age == 2) {
    console.log("\nIf person's age is less than 2 years old, the person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("\nIf person's age is atleast 2 years old but less than 4, the person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("\nIf person's age is atleast 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 && age < 20) {
    console.log("\nIf person's age is atleast 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age === 20 && age < 65) {
    console.log("\nIf person's age is atleast 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\nIf person's age is 65 or older, person is an elder.");
}
//FOURTH VERSION AGE IN BETWEEN 13 AND 20 
age = 17;
if (age == 2) {
    console.log("\nIf person's age is less than 2 years old, the person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("\nIf person's age is atleast 2 years old but less than 4,the person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("\nIf person's age is atleast 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("\nIf person's age is atleast 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("\nIf person's age is atleast 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\nIf person's age is 65 or older, person is an elder.");
}
//FIFTH VERSION PERSON AGE IN BETWEEN 20 AND 65
age = 50;
if (age == 2) {
    console.log("\nIf person's age is less than 2 years old, the person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("\nIf person's age is atleast 2 years old but less than 4 so person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("\nIf person's age is atleast 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("\nIf person's age is atleast 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("\nIf person's age is atleast 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\n If person's age 65 or older,the person is an elder.");
}
// SIXTH VERSION AGE ABOVE 65
age > 65;
if (age == 2) {
    console.log("person's age is less than 2 years old so person is a baby.");
}
//If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age === 2 && age < 4) {
    console.log("person's age is atleast 2 years old but less than 4 so person is a toddler.");
}
//If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age === 4 && age < 13) {
    console.log("person is at least 4 years old but less than 13, the person is a kid.");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age === 13 && age < 20) {
    console.log("person is at least 13 years old but less than 20, the person is a teenager.");
}
//• If the person is at least 20 years old but less than 65, 
//print a message that the person is an adult.
else if (age === 20 && age < 65) {
    console.log("person is at least 20 years old but less than 65, the person is an adult.");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("\nIf person's age is 65 or older, person is an elder.");
}
