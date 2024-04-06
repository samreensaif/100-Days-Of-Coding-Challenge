//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
//Most ordinal numbers end in th, except 1, 2, and 3.

let num: number[]=[1,2,3,4,5,6,7,8,9];

let ordinalNum : string ; // take variable but not assign value


for(let num1 of num)

{

 if(num1==1)
{

 ordinalNum  = "st"  //redeclare variable and assign value st here

}
 
else if(num1==2)
{

 ordinalNum = "nd";//redeclare variable and assign value nd here

}

else if(num1==3)
{

 ordinalNum= "rd"; //redeclare variable and assign value rd here

}

else {
    ordinalNum= "th"; //redeclare variable and assign value th here
}

console.log(num1+ordinalNum);
}