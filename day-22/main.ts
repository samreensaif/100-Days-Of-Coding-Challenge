// 🚀 Day 22 Challenge: Start Coding! 🚀

// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

// Explain & TIP: In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.

console.log(`\n\t\t🚀 Day 22 Challenge: Start Coding! 🚀 \n\n\t\t "Question 64: Combine Strings and Number"\n\n`)
//1st version
function merge(age: string, num: number){

    console.log( age + num )

    console.log(`\n${age}${num}` )

}
merge( "Age: ",30)

//2nd version
function stringNum(age: string, num: number){

    return (age + num)

}
console.log( stringNum( "Age: ",30))

// Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

console.log(`\n\t\t🚀 Day 22 Challenge: Start Coding! 🚀 \n\n\t\t "Question 65: Determine The Remainder"\n\n`)

//1st version: By Using Arrow Function

let modulus = (num1: number, num2: number): number =>  num1%num2  

//if there is only 1 line of code then no need to write return keyword

let remainder =  modulus(10,3);

console.log(`The Remainder of two given numbers is: `,remainder)

if(remainder == 0){ console.log (`\nso the numbers are even`)}
else { console.log (`\nso the numbers are odd`)}

//2nd Version: By Using Normal Function

function remainder1  (num1: number, num2: number): number
{
      return num1%num2
}
let modul = remainder1(12,4);

console.log(`\nThe Remainder of two given numbers is: `,modul)

if(remainder===0){ console.log (`\nso the numbers are even`)}
else { console.log (`\nso the numbers are odd`)}

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

// Explain & TIP: The && operator in JavaScript checks if both sides are true. It's great for confirming several things are true all at once.


console.log(`\n\t\t🚀 Day 22 Challenge: Start Coding! 🚀 \n\n\t\t "Question 66: "Logical And Verification"\n\n`)

function checkBothTrue ( check1: boolean,check2: boolean):boolean
{

    return check1 && check2;
}

console.log ( checkBothTrue(true,true))         // true

console.log(checkBothTrue( false,true))         //false

console.log(checkBothTrue( true, false))        //false

console.log("The End!!!")





















































