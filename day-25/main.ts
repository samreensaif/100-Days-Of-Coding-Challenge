// 🚀 Day 25 Challenge: Start Coding! 🚀

// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

// Explain & TIP: In JavaScript, you can assign a value to a variable with = and later update it as needed. This is fundamental for keeping track of changing data within your programs.

console.log(`\n\t\tDay 25 Coding Challenge: Start Coding! 🚀\n\n`);
console.log(`\t\tQuestion 73: Assigning and Updating Variables\n\n` );

function decVariable()
{
     let sum = 5+6;

     console.log ( `The value of variable sum:`, sum);

     sum = 7+8;

     console.log(`The updated value of variable sum is:`,sum)
}
decVariable();

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// Explain & TIP: Swapping variables is a common task. You can use a temporary variable to hold one value while you swap them around. It's like juggling where you temporarily place one ball in a basket to free up your hand.

console.log(`\n\n\t\tQuestion 74: Swapping Variables:\n\n` );

function swapVariable(){
 let a = 5;
 let b = 10;

 console.log ( `Initial value of a=${a} and b=${b}\n`);
 let temp = a;

 a=b;
 b=temp;
 
 console.log ( `Final value of a=${a} and b=${b}`);

}

swapVariable();


// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

// Explain & TIP: Compound assignment operators combine an arithmetic operation with assignment, making your code cleaner and more concise. Instead of writing x = x + 2, you can simply write x += 2.

console.log(`\n\n\t\tQuestion 75: Compound Assignment Operators:\n\n` );

let compoundOperation = () =>

{
 let x = 10;

 console.log(`Addition Result by using ${x} += 2 : `, x += 2)

 console.log(`Subtraction Result by using  ${x} -= 2 : `, x -= 2)

 console.log(`Multiplication Result by using  ${x} *= 2 : `, x *= 2)

 console.log(`Division Result by using  ${x} /= 2 : `, x /= 2)


}
compoundOperation();






























