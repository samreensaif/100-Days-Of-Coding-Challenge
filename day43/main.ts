// 🚀 Day 43 Challenge: Start Coding! 🚀

// Question 127: Convert a traditional function expression to an arrow function.


import chalk from "chalk";

console.log(chalk.yellowBright(`\n\n\t\t\tDay 43 Challenge`))

console.log(chalk.blueBright(`\n\n\t\tQuestion 127: An Arrow Function`))
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))

function sumFunc(num1 : number, num2 : number ) : number    // traditional function with return
{

    return num1 + num2 
}

let sum = sumFunc( 2,4 )

console.log(chalk.cyanBright(`\nSum Of Two Numbers Using Simple Functions: `, sum))

 let sumArrow = (num1 : number, num2 : number ) : number =>   // Arrow function with return
{

    return num1 + num2 
}

let total = sumArrow( 2,4 )

console.log(chalk.cyanBright(`\nSum Of Two Numbers Using Arrow Funtions: `, total))


// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.

// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.

console.log(chalk.blueBright(`\n\n\t\tQuestion 128: Product Of Multiple Numbers By Using An Arrow Function`))
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))

let productArrow = ( ...num : number[]) : number =>
    {

        let product = num.reduce((acc, curr) => acc * curr,1)

        return product

    }

    console.log (chalk.cyanBright( ` \nProduct of  2 & 3:`, productArrow( 2,3)))
    console.log (chalk.cyanBright( ` \nProduct of  2, 3 & 4:`, productArrow( 2,3,4)))
    console.log (chalk.cyanBright( ` \nProduct of  2, 3, 4 & 5:`, productArrow( 2,3,4,5)))
    console.log (chalk.cyanBright( ` \nProduct of  2, 3, 4, 5 & 6:`, productArrow( 2,3,4,5,6)))



// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.

console.log(chalk.blueBright(`\n\n\t\tQuestion 129: How "THIS" behaves in An Arrow Function & A Simple Function`))
console.log(chalk.blueBright(`\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`))

    let car = {
        name: "toyota",
        year: 2023,
    
        carInfo: function() {
           console.log( `${this.name}, ${this.year}`)
        },
    
        carInfo1: function() {
            console.log( `${this.year}, ${this.name}`)
        }
    };
    
    car.carInfo();   // Output: toyota, 2023
    car.carInfo1();  // Output:toyota, 2023,toyota
    //if we define 'this' in arrow function it will likely show  `undefined`
    // so we cannot define this in arrow function. this is for normal function