// 🚀 Day 23 Challenge: Start Coding! 🚀

// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

// Explain & TIP: JavaScript allows arithmetic operations between mixed types. When you add a number to a string that looks like a number, JavaScript converts the string to a number for the operation.

console.log(`\n########Day 23 Challenge: Start Coding!#######\n\t\tQuestion 67: Arithmetic with Mixed Types\n\n`)

function numString( num: number, str: string)
{

return num+Number(str);
}

let newString = numString(5,"8");
console.log(`Sum of number with string: `,newString);
newString = numString(6,"6")
console.log(`Sum of number with string:`, newString);
newString = numString(7,"4")
console.log(`Sum of number with string:`, newString);

// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

// Explain & TIP: When working with decimals in JavaScript, results can be unexpectedly long. Rounding can help keep numbers manageable.

console.log(`\n\t\tQuestion 68: Multiplying Decimals\n\n`)


function decimal(num1: number, num2: number) : number

{
    console.log(`Result of multiplying 2 floating numbers:`, num1*num2)
    return Math.round(((num1*num2)*100))/100;
}

let result = decimal (3.653, 4.235 )

console.log (`Result after rounding off to 2-decimal places:`, result)

// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

// Explain & TIP: Division can give you a whole part (quotient) and a leftover part (remainder). Returning both in an object is a neat way to keep them together.

console.log(`\n\t\tQuestion 69: Return Object in a Function \n\n`)


function division(dividend: number, divisor:number):{quoteint:number, remainder:number} 

{
     let  quoteint = Math.round((dividend/divisor*100))/100;
     let remainder = dividend%divisor;

return ({quoteint,remainder})
    }


let abc = division(15,3)

console.log (`\nQuotient : `,abc.quoteint, `  Remainder : `, abc.remainder)

 abc = division(110,7)

console.log (`\nQuotient : `,abc.quoteint, `  Remainder : `, abc.remainder)









































