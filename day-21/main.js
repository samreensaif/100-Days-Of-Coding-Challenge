// Day 21 Challenge: Start Coding! 🚀
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// Explain & TIP: Enums are like special lists in your code that help you categorize things. They make your code cleaner and easier to understand.
console.log(`\n\t\tDay-21-Coding-Challenge\n\n\t\t Question # 61: Making Enums\n\n`);
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["motorcycle"] = 2] = "motorcycle";
    vehicles[vehicles["rickshaw"] = 3] = "rickshaw";
    vehicles[vehicles["bus"] = 4] = "bus";
})(vehicles || (vehicles = {}));
console.log(`Vehicle Car: ${vehicles.car}\nVehicle Bus: ${vehicles.bus}`);
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
console.log(`\n\t\tDay-21-Coding-Challenge\n\n\t\t Question # 62: Making an Interface\n\n`);
let student1 = {
    name: "OMAR",
    age: 12,
    class: "7th",
    rollnum: 20,
    courses: ["Math", "Science", "English", "Urdu", "Islamiat"]
};
console.log(`Students Information: \nname: ${student1.name},\nage: ${student1.age},\nclass: ${student1.class},\nroll#: ${student1.rollnum}\ncourses:${student1.courses}\n`);
let student2 = {
    name: "KANZA",
    age: 16,
    class: "11th",
    rollnum: 15,
    courses: ["Math", "Science", "English", "Chemistry"]
};
console.log(`Students Information: \nname: ${student2.name},\nage: ${student2.age},\nclass: ${student2.class},\nroll#: ${student2.rollnum}\ncourses:${student1.courses}`);
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
console.log(`\n\t\tDay-21-Coding-Challenge\n\n\t\t Question # 63: Creating Type Alias\n\n`);
let myCircle = {
    kind: "circle",
    radius: 5
};
let myRectangle = {
    kind: "rectangle",
    length: 6,
    breadth: 7
};
console.log(myCircle);
console.log(myRectangle);
function calculateDiameter(shape) {
    if (shape.kind === "circle" && shape.radius !== undefined) {
        return (shape.radius * 2);
    }
}
console.log("Diameter of a CIrcle", calculateDiameter(myCircle));
function areaRect(shape) {
    if (shape.kind === "rectangle" && shape.length !== undefined && shape.breadth !== undefined)
        return (shape.length * shape.breadth);
}
console.log("Area of Rectangle", areaRect(myRectangle));
const myObj = {
    name: "Muhammad Fasih",
    city: "Karachi",
    isMarried: false ? "Yes" : "No",
};
console.log(myObj);
export {};
