//45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

import { features } from "process";

// first we make here function name "cars".in this function , we have to pass parameters name manufacturer and model name, then wealso  have to  pass unknown number of parameters by using spread operator"..."which takes an array as an input . here spread operator name is options. through spread operator we take object as an input.  but we dont know the objects properties and their types as well. So first we write key(properties like color) whoes type will be string and which take any type of data may be string may be number may be boolean so type here any. now as we know spread operator take array as an object so we have to write[]in the end. now as this function makes an object so it returns an object . after function parameters we have to write OJECT after : it means this function returns an object.now in the function body, we have to create an object which has properties manufacturer and modelname and side by side we can take multiple unknows properties as well. by using ...Objecr.assign(target{},source) we are actually assign more properties to an object carinfo which which pass through function call.
function cars( manufacturer: string, modelName: string, ...options:{ [key:string]: any} []) : Object
{

let carInfo = {

     manufacturer, 
     modelName,
     ...Object.assign({}, ...options)
}

return carInfo;
}

let carsInfo = cars( " Toyota", "Corolla", { color : "black"}, {features:[` navigation`, `power staering`]})

console.log(carsInfo);