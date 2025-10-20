//practice no.1
const product = {name:'lapton', Price:50000, brand:"Dell"};
const {brand} = product;
console.log(brand);

//practice no.2
const item = {name:"Mobile", price:20000 , phone:"sumsung"};
const {price, phone} = item;
console.log(price,phone);

//practice no.3
const colors = ["red", 'blue', 'green', 'yellow'];
const [color1,color2] = colors;
console.log(color1,color2);

//practice no.4
const mark = [23,45,213];
const [, second,] = mark;
console.log(second);

//practice no.5
const digits = [2,4,6,8];
const [, two, , eight] = digits;
console.log(two,eight);

//practice no.6
function multify (a,b) {
    return [a*2,b*2];
}
const [pothom,ditiyo] = multify(2,3);
console.log(pothom,ditiyo);

//practice no.7
const person= { name:"Raihan",city:"Dhaka"}
const {name, city, Phone = "N/A"} = person;
console.log(Phone);

//practice no.8
const teacher = { name:"Maria", profession:"Teacher"};
const {name2,profession:job,} = teacher;
console.log(job);