// 🚀 Day 42 Challenge: Start Coding! 🚀

// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access its properties from within its methods.

console.log(`\n\n\t\tDay 42 Challenge`)
console.log(`\t\t================`)

console.log(`\n\n\tQuestion 124: Function Inside The Object`)
console.log(`\t----------------------------------------`)

let studentName = 

{
    name:  "samreen",

   gName: function() 
   {
      return (this.name)  
   }
};

console.log (`\n\t\t${studentName.gName()}`)


// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, providing a cohesive way to manipulate internal data.

console.log(`\n\n\tQuestion 125: Modify The Object`)
console.log(`\t-------------------------------`)


let studentInfo = {

    name:  "samreen",
    rollNum: 2345,

   gInfo: function() 

   {
      
    return  `${this.name} 
\t\t${this.rollNum}`  

   }
};

console.log (`\n\t\t${studentInfo.gInfo()}`)

// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.


console.log(`\n\n\tQuestion 126: Nested Function With In An Object`)
console.log(`\t-----------------------------------------------`)

let car = {

    name : "Toyota",
    year : 2023,

    car_define : function() {

        console.log(`\n\t\t${this.year}`)

        let car_brief = () => 
            {
                console.log(`\n\t\t${this.name}`)
            }
            car_brief();        // second time this function calls and prints year 
    }
}

car.car_define();     // first time this function calls and prints name first