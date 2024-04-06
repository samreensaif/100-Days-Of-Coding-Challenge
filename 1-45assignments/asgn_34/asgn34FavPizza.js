"use strict";
/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
 and then use a for loop to print the name of each pizza.*/
Object.defineProperty(exports, "__esModule", { value: true });
let favPizza = ["peperoni", "tikka", "cheesy"];
/*• Modify your for loop to print a sentence using the name of the pizza instead of printing just the
name of the pizza. For each pizza you shouldhave one line of output containing a simple statement like
 I like pepperoni pizza.*/
for (let i = 0; i < favPizza.length; i++) {
    console.log(`I like ${favPizza[i]} pizza.`);
}
/*
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an
 additional sentence, such as I really love pizza!*/
console.log("I really love pizza!!\n\n");
//2nd method of using for loop
for (let pizza of favPizza) {
    console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!!");
