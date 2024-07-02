// 🚀 Day 28 Challenge: Start Coding! 🚀

// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

// Explain & TIP: The .length property of a string gives you the total number of characters it contains, helping you understand more about the data you're working with.


console.log("\n\t\tDay 28 Coding Challenge\n\n\t\tQuestion 82: Find the Length of a String:\n\n")

function lengthofstring( str:string ) :number 
{

    let length = str.length 
    return length
}

console.log( `Length Of the Given String:`,lengthofstring("samreen"))

console.log( `\n\nLength Of the Given String:`,lengthofstring("My Country Is Pakistan"))

// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.

console.log("\n\t\tQuestion 83: Converting to Upper and Lower Case:\n\n")

function upperlower( str : string)
{

    console.log (`\n Lower Case: `,str.toLowerCase())

    console.log (`\n Upper Case: `,str.toUpperCase())
                     
}

upperlower("paKisTAN zinDABAd")

//2nd approach in solving the above question

function strCases(str1: string): Object {

    return {

        lower: str1.toLowerCase(),
        upper : str1.toUpperCase()
        
    }
    
    }

    console.log(strCases("PakistAN zinDABaD"))

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

// Explain & TIP: The .replace() method can search for a specific text pattern in a string and replace it with something else. By default, it only replaces the first occurrence, but you can use a global regex for multiple replacements.

console.log("\n\t\tQuestion 84: Replacing Text in a String:\n\n")

function replword( str:string)
{

console.log(str.replace(/JavaScript/g,`Typescript`))  

//g stands for global. if we use /gi then i means free from case sensitive

console.log(str.replaceAll(`JavaScript`,`Typescript`))  

}

replword(" Now a days i am learning JavaScript and JavaScript is one of the best language to learn.")