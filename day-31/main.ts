// Day 31 Challenge: Start Coding! 🚀

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

// Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows you to add new items to the end of an array.

console.log(`\n\t++++++ Day 31 Challenge ++++++\n\n\t\tQuestion 91: Use Push()\n\t\t-----------------------`)

let favFruit:string[]=[ `PINEAPPLE`,`BANANA`,`STRAWBERRY`];

console.log(`\nFavourite Fruits:`, favFruit)

favFruit.push(`APPLE`)

console.log(`\nFavourite Fruit Afetr using Push(): `,favFruit);

// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.

console.log(`\n\t\tQuestion 92: Use POP()\n\t\t----------------------`)

function removeFruit(...fruit:string[] ): string | undefined

{
 
    console.log(fruit)

    return fruit.pop()

}

let element = removeFruit("Banana","Mango","PineApple","Strawberry")

console.log(`\nRemoved Fruit:`, element)

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.

console.log(`\n\t\tQuestion 93: Use of Indexof()\n\t\t----------------------------`)

function replaceFruit(...fruit:string[] )
{
     console.log(`\nOriginal List:`, fruit)
    let i = fruit.indexOf("Banana")

    if (i!= -1)
    {
        fruit[i]= "Mango"
        console.log(`List After Replacement: `, fruit)
    }

    else{
        console.log(`Banana is not in the fruit list`)
    }
}
replaceFruit("Cherry","PineApple","Banana","Strawberry")

replaceFruit("Cherry","PineApple","Melon","Strawberry")


