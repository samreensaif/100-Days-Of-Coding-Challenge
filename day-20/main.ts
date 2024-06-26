import inquirer from "inquirer"

// Day 20 Challenge: Start Coding! 🚀

// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

console.log("\n\t\t Day20 Challenge \n\n\t\t Question 58 : AVERAGE SCORE CALCULATOR\n\n")


function avgscore (...score:number[]):number
{

let avg= score.reduce((a,b)=>a+b,0)/score.length

return avg
}


console.log("Average Score Calculator:",avgscore(2,8,10));
console.log("\nAverage Score Calculator:",avgscore( 10,20,30,40,50,60));

// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

console.log("\n\n\t\t Question 59 : ADD A SPECIAL NUMBER\n\n")

//first version: add special number to each of the elements of the array

console.log("\nfirst version\n")
 function adderNumber (...num: number[])
 {
 let adder :number = 213

 console.log( `\nThe original array is ${num}`)
 {
    for( let i of num)

    
    console.log (`\n${i}${adder}`)

 }
}
adderNumber(76,44,892,1)
adderNumber(5,3,8)
//second version: add the special number to the given number

console.log("\nsecond version\n")
function addnum (num: number):number
{
    console.log(`\nAlready have number : ${num}` )

    return num+392;
}

let newnum = addnum(33 );


console.log( `\nnow add 392 to the given number we got: ${newnum}\n`);

// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

console.log("\n\n\t\t Question 60: Self Running User Profile\n\n")

//This is done using an immediately invoked function expression (IIFE). An IIFE is a function that runs as soon as it is defined.

let user_profile =(function() {

    let usrName="Samreen";
    let usrage=33
    
    return { display_info:function(){
    
        console.log(`UserName : ${usrName} and UserAge is: ${usrage}`);
    
    }
    }
    })()
    user_profile.display_info()

    /* Step-by-Step Data Flow
IIFE Execution:

Variables usrName and usrage are initialized.
An object with the display_info method is created and returned.
Assignment:

The returned object is assigned to user_profile.
Method Invocation:

When user_profile.display_info() is called, the method has access to usrName and usrage due to closure, and it logs "UserName: Samreen and UserAge is: 33" to the console.
In summary, the data (user name and age) is defined inside the IIFE, returned as part of an object, and accessed by the display_info method when invoked, utilizing closures to retain access to the original data.
*/

















