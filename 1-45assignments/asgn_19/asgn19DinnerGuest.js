var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//store the favourite place of the world in an array
var seeingWorld = ["Canada", "USA", "Malysia", "Australia", "Europe"];
// print the original array 
console.log("\nFive places which I want to see in the world are: \n");
seeingWorld.forEach(function (abc) { return console.log(abc); });
//print the array in an ascending order
var sortCounty = __spreadArray([], seeingWorld, true).sort();
console.log("\n\t\"Sorted list\"\n\t");
sortCounty.forEach(function (abc) { return console.log(abc); });
//print original array
console.log("\nOriginal List\n");
seeingWorld.forEach(function (abc) { return console.log(abc); });
//print the original list in reverse 
var reverseList = __spreadArray([], seeingWorld, true).reverse();
console.log("\nReverse List\n");
reverseList.forEach(function (abc) { return console.log(abc); });
//reprint original array
console.log("\nOriginal List\n");
seeingWorld.forEach(function (abc) { return console.log(abc); });
//reprint changed order list
console.log("\nOrder is changed now\n");
reverseList.forEach(function (abc) { return console.log(abc); });
//back to original order
console.log("\nBack to Original List\n");
seeingWorld.forEach(function (abc) { return console.log(abc); });
//sort the list again
var sortCounty1 = __spreadArray([], seeingWorld, true).sort();
console.log("\n\t\"Again Print Sorted list\"\n\t");
sortCounty1.forEach(function (abc) { return console.log(abc); });
//print sorted reverse list
var reverseList1 = __spreadArray([], sortCounty1, true).reverse();
console.log("\nReverse Sorted List\n");
reverseList1.forEach(function (abc) { return console.log(abc); });
//We have to count how many favourite places are there in the array
var count = seeingWorld.length;
console.log("\nTotal number of favourite places are:", count);
