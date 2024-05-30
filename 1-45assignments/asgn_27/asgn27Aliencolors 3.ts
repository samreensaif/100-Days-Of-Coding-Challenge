//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//FIRST VERSION

let alienColor: string = "green"

 if(alienColor === "green")         

{
    console.log("\nThe alien color is green so the player earned 5 points");
}

else if(alienColor==="yellow")
{
    console.log("the player earned 10 points");
}

else
{
    console.log("the player earned 15 points");
}

//SECOND VERSION
//If the alien is yellow, print a message that the player earned 10 points.

alienColor ="yellow";

if(alienColor === "green") 

{
    console.log("the player earned 5 points");
}

else if(alienColor==="yellow")
{
    console.log("\nThe alien color is yellow so the player earned 10 points");
}

else
{
    console.log("the player earned 15 points");
}

//THIRD VERSION
//If the alien is red, print a message that the player earned 15 points.

alienColor ="red";

if(alienColor === "green") 

{
    console.log("the player earned 5 points");
}

else if(alienColor==="yellow")
{
    console.log("the player earned 10 points");
}

else
{
    console.log("\nThe alien color is red so the player earned 15 points");
}


