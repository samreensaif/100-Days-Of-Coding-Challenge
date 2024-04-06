// Day 29 Challenge: Start Coding! 🚀

// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.

console.log(`\n\t\tDay 29 Challenge: \n\n\tQuestion 85: Finding the Position of a Substring:\n\n`)

function firstOccurence(str: string): number

{

let positionOfCode = str.indexOf("code")
    
    
    return positionOfCode
}

let i = firstOccurence("this is my first code of typescript")

console.log(`The Index Of Word "code" in the given string is:`, i )


// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

console.log(`\n\n\tQuestion 86: Checking for Text Presence:\n\n`)

function wordPresent(str: string):boolean
{

let ispresent = str.includes("Javascript")
    return ispresent
}

console.log("The word Javascript present or not: ",wordPresent("Javascript"));

console.log("The word Typescript present or not: ",wordPresent("Typescript"));

// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.

// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.

console.log(`\n\n\tQuestion 87: Extracting a Substring::\n\n`)

let str: string = " Indeed!!! Pakistan is one of the beautiful country in the world"

console.log("The first 10 letters in the string:",str.substring(0,10) )