//. Seeing the World: Think of at least five places in the world you’d like to visit.

//store the favourite place of the world in an array
let seeingWorld: string[] = ["Canada","USA","Malaysia","Australia","Europe"];

// print the original array 
console.log(`\nFive places which I want to see in the world are: \n`);

for(let name of seeingWorld){
    console.log(name)
}

//print the array in an ascending order

let sortCounty = [...seeingWorld].sort();

console.log(`\n\t"Sorted list"\n\t`);

sortCounty.forEach(abc => console.log(abc));

//print original array
console.log("\nOriginal List\n");
seeingWorld.forEach(abc => console.log(abc));

//print the original list in reverse 
let reverseList = [...seeingWorld].reverse();
console.log("\nReverse List\n");
reverseList.forEach(abc=>console.log(abc));

//reprint original array
console.log("\nOriginal List\n");
seeingWorld.forEach(abc => console.log(abc));

//reprint changed order list
console.log("\nOrder is changed now\n");
reverseList.forEach(abc=>console.log(abc));

//back to original order
console.log("\nBack to Original List\n");
seeingWorld.forEach(abc => console.log(abc));

//sort the list again
let sortCounty1 = [...seeingWorld].sort();

console.log(`\n\t"Again Print Sorted list"\n\t`);

sortCounty1.forEach(abc => console.log(abc));

//print sorted reverse list
let reverseList1 = [...sortCounty1].reverse();
console.log("\nReverse Sorted List\n");
reverseList1.forEach(abc=>console.log(abc));

