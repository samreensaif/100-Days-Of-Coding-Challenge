// Day 45 Challenge: Start Coding! 🚀

// Question 133: Write a JavaScript object and convert it into a JSON string.

import chalk from  "chalk";
import chalkAnimation from "chalk-animation";

let rainbowtitle = chalkAnimation.rainbow(`\n\t\t\t\tDay 45 Challenge`)

rainbowtitle.start();
rainbowtitle.stop();

console.log(chalk.greenBright(`\n\n\tQuestion 133: Write a JavaScript object and convert it into a JSON string`))
console.log(chalk.greenBright(`\t--------------------------------------------------------------------------`))

let car =
{
    car_name : "Toyota",
    model : "Camry",
    year : 2024,
    color : "Black" 
}

console.log(`\n Object Car:`,car )

// Convert the object into a JSON string

let jsonString = JSON.stringify(car);

console.log(chalk.blueBright(`\n Object converted to JASON string:`,jsonString));



// Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.


console.log(chalk.greenBright(`\n\n\tQuestion 134: Take a JSON string and parse it into a JavaScript object.`))
console.log(chalk.greenBright(`\t--------------------------------------------------------------------------`))


console.log(chalk.blueBright(`\n JASON string:`,jsonString));

let parsedObject = JSON.parse(jsonString);

console.log(`\n JASON string to Object`,parsedObject);  


// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

console.log(chalk.greenBright(`\n\n\tQuestion 135. Formatting A Jason String`))
console.log(chalk.greenBright(`\t---------------------------------------`))

let studentInfo = 
{
    studentName:"samreen saif",
    class:"X",
    age:16,
    contactInfo : {
                    mobileNo: 3366754345,
                    emailAdd: "samreensaif@gmail.com"
                },

    hobbies:["reading","cooking","cycling","baking"]
}

let studentJason = JSON.stringify(studentInfo,null,2)
console.log(`\n`)
console.log(`After Formating The JSON STRING`,studentJason);

