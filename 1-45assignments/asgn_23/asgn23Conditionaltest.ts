// /*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')


let car: string = "subaru";
 

car = "toyota"

console.log(car == "subaru" ? "its Subaru" : "its not Subaru"); // by using ternary operator

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.


if(car === "subaru")
    {  console.log("\nIts Subaru")}
else{console.log("\nIts not Subaru");}


//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let x = 40
let y = 30

//falsey statement

console.log(`Test1: x is equal to 5`, x===5);
console.log(`Test2: x is less than 5`, x<5);
console.log(`Test3: x is greater than multiple of 5`, x===5*5);
console.log(`Test4: x is greater than multiple of 10`, x>10*10);
console.log(`Test5: x is less than y`, x<y);

//truthy statement

console.log(`\n\nTest1: x is not equal to 5`, x!==5);
console.log(`Test2: x is greater than 5`, x>5);
console.log(`Test3: x is greater than multiple of 5`, x>5*5);
console.log(`Test4: x is less than multiple of 10`, x<10*10);
console.log(`Test5: x is greater than y`, x>y);



