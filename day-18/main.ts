//Question # 52 : Make a Smartphone Object: Create a simple way to keep track of a smartphone's detailes. Include its brand, model  and other key features like how much storage it has, the size of its screen and how long its battery last.



console.log(`\n\t\t " Day - 18 - Coding - Challenge "
                      
                    Question # 52: SmartPhone Object`);

//create an object name smartPhone.

let smartPhone: {
  brand: string;
  model: string;

  specs: {
    // another object "specs" in Object "smartPhone"
    storage: string;
    size_of_screen: string;
    battery_life: any;
  };
} = {
  brand: "INFINIX",
  model: "SMART 8 +",

  specs: {
    storage: "64GB 3GB RAM, 64GB 4GB RAM, 128GB 4GB RAM",
    size_of_screen: "6.6 inches",
    battery_life: "5000 mAh, non-removable",
  },
};

console.log(smartPhone);

// Question # 53:  Pulling Apart a Nested Object:Instead of taking developers skills I used Housewife responsibilties like cooking, cleaning and laundry. Find a way to get three specific skills from this list and show them.

console.log(`\n\t\t " Day - 18 - Coding - Challenge "                  
                      
                    Question # 53: Pulling Apart a Nested Object\n\n`); //template literals

let houseWife = {
    cooking: ["biryani","qorma","nihari"],
    cleaning: ["kitchen ","house "],
    laundry:[ " kid's clothes", " husband's clothes"]
};


console.log(
  ` Every House Wife should know how to cook ${houseWife.cooking},\n how to clean ${houseWife.cleaning} as well as how to wash ${houseWife.laundry}. `
)

console.log(
`\n\nEvery HouseWife should know how to cook ${houseWife.cooking[0]} , ${houseWife.cooking[1]} and ${houseWife.cooking[2]},
how to clean ${houseWife.cleaning[0]} and ${houseWife.cleaning[1]} as well as 
how to wash ${houseWife.laundry[0]} and ${houseWife.laundry[1]}`
)

console.log(`\n\t\t " Day - 18 - Coding - Challenge "                  
                      
                    Question # 54: Making Flexible Object Keys\n\n`); //template literals

// Question # 54: Making Flexible Object Keys: Learn how to setup a list where you can change the name of each section based on what you need at that moment like adjusting labels based on new information

let studentInformation = { name : "samreen", rNum : 65146, age : 30};

let changeKeyName = { name : "std_name", rNum : "rollNum", age : "stdAge"};

let rstudentInformation = rename( studentInformation, changeKeyName);
/*
{
    name : "Samreen Saif",
    rollnum : 65146,
    age : 30,
    
}

console.log (`\nStudent Name is ${studentInformation.name} having roll # ${studentInformation.rollnum} and age is ${studentInformation.age}`)

renamekeys{name: stdName, 