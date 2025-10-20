// practice no.1
const technologies = ["Condition", "array", "loop"];
const newTech = ['variable', ...technologies];
console.log(newTech);

// practice no.2
const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "papaya", "orange"];
console.log(myFruits);

// practice no.3
const frontEnd = ["JavaScipt"];
const backEnd = ["Node.js"];
const database = ["MongoBD"];
const joinOperator = [...frontEnd, ...backEnd, ...database];
console.log(joinOperator);

// practice no.4
const website = { name: "MySite", type: "e-commerce", status: "active"};
const newWebsite = {...website, theme:"dark"}
console.log(newWebsite);

// practice no.5
const young = {name:"Arif", age:30, country:"B Baria"};
const {country, ...newArray} = young;
console.log(newArray);

// practice no.6
const car = { make: "Toyota", model: "Corolla", year:2020};
const updateCar = {...car, year:2032};
console.log(updateCar);
