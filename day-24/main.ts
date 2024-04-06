// Day 24 Challenge: Start Coding! 

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

//Three ways of defining 

console.log(`\n\t******Day 24 Coding Challenge****** \n\n\tQuestion 70: Understanding let in Loops\n`)


function numLoop (...numArray: number[]) 
{
    for ( let i = 0; i <numArray.length   ; i++)
{
    console.log (`Numbers in a given array are: ${numArray[i] }`)
}
}
numLoop(1,2,3,4,5)

function numwithlet()
{
    for (let a=1; a<=5 ; a++)
{
    console.log(`number are:`, a)
}
}
numwithlet();

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

console.log(`\n\tQuestion 71: Compare let and const:\n`)

let personName : string = "Samreen Saif";

const personRollnumber: number = 65146;

console.log(`Person Name: ${personName} \nRoll Number: ${personRollnumber}`);

personName = "Firzah Fatima" // can reassign let variable

//personRollnumber = 34523; // cannot reassign const variable

console.log(`Person Name: ${personName} \nRoll Number: ${personRollnumber}`);

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// Explain & TIP: Block scope, created by {} in JavaScript, confines let and const variables to that block, enhancing code organization and preventing accidental access from outside the block.


console.log(`\n\tQuestion 72: Block Scope with let and const:\n`)

function letConst ()

{
    let personName1 : string = "Syed Musaab Saif";  //variable inside a block

    const personRollnumber1: number = 349856;
    
    console.log(`\nPerson Name: ${personName1} \nRoll Number: ${personRollnumber1}`);

}

letConst()

 //console.log(personName1,personRollnumber1)   // variables inside a block are not accessible outside the block

