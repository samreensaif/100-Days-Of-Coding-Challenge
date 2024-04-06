/*21. They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

interface student {
         name: string,
         fatherName: string,
         age: number,
         email: string,
         schoolName: String
} 

let student: student = { name: "samreen",
      fatherName: "Khurshid Anwar",
       age: 42,
       email: "samreenk81@hotmail.com",
       schoolName: "Happy Home"};

console.log(student);

//Another Object

interface car
{
       car_name: string,
       car_model:number,
       car_automatic:boolean
}

let car: car={
        car_name : "TOYOTA",
        car_model:2022,
        car_automatic:true

}

console.log(`\n `,car);

// one more example of object

interface employee {

       emp_id : number,
       emp_name:string,
       emp_dep: string,
       emp_status: boolean

}
let employee : employee =
{

       emp_id: 2345,
       emp_name: "saif",
       emp_dep: "geology",
       emp_status: true
}
//console.log("\n");

console.log(employee);

