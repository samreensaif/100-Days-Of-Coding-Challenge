// 🚀 Day 19 Challenge: Start Coding! 🚀

// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

// Explain & TIP: We can use a special tool to go through each number in our list and make a new list with each number doubled.

console.log( `\n\t\tDay 19 - Challenge\n\n \t\tQuestion # 55: DOUBLE NUMBERS IN AN ARRAY\n\n`)

let numArray: number[] = [ 2,4,6,8,10];

let newArray =  numArray.map (abc => abc*2 )

console.log(`original array:`, numArray)
console.log (`\nDouble The Numbers in an array:`, newArray)


// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

// Explain & TIP: We can pick out just the words from a mixed bag of items, creating a list that includes only those words.

console.log( `\n\t\tDay 19- Challenge\n\n \t\tQuestion # 56 :KEEP ONLY STRING\n\n`)

let person = ["samreen", 7876, 3360849799, "SSUET"]


console.log(`Original Array:`, person)

//to pick only items which are a type of string we use filter with typeof

let newString = person. filter(abc => (typeof abc) ==="string")   


console.log( ` Array of strings `, newString)

// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

console.log( `\n\t\tDay 19- Challenge\n\n \t\tQuestion # 57 :AVERAGE GRADES\n\n`)


let aveGrades: number[] = [ 34,68,78,57,99] ;

let average: number = aveGrades.reduce((preV , currV) => 

   (preV + currV),0 )/  aveGrades.length


console.log(` average of five given grades is: ${ average} `);