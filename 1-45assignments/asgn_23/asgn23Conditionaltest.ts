/*Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:
let car = 'subaru';
 conditional test*/
//test #1

let car: string = "subaru";
 
  //TEST #1
console.log ("is car==`subaru`? i predict True");
console.log(car =="subaru");
//Test#2
console.log ("is car===`subaru`? i predict True");
console.log(car ==="subaru");
//Test #3
console.log ("is car ==`Honda`? i predict False");
console.log(car =="Honda");
//Test #4
console.log ("is car !=`Honda`? i predict True");
console.log(car !="Honda");
//Test#5
console.log ("is car !==`ford`? i predict true");
console.log(car !=="ford");
// Test #6
console.log ("is car.uppercase ==`SUBARU`? i predict false");
console.log(car.toUpperCase() =="subaru");

// Test #7
console.log ("is car ==`SUBARU`? i predict false");
console.log(car =="SUBARU");

// Test #8
console.log ("is car ===`SUBARU`? i predict false");
console.log(car ==="SUBARU");

// Test #9
console.log ("is car ===`subaru`? i predict true");
console.log(car ==="subaru");

// Test #10
console.log ("is car ==`plane`? i predict false");
console.log(car =="plane");



