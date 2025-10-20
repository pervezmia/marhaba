//practice no 1
//jS object gulo nijeder bivinno layer baniye rakhe jate common jinish gulo ake oporer moddhe share korte pare. ai share korar system e holo js inheritance.

//practice no 2
//JS nije nije prototypical inheritance er maddhome ak object er shate onno object er moddhe secret relation make koree . jate common property and method share korte pare.

//practice no 3
const person = {
    name:"pervez"
}
const personproto = Object.getPrototypeOf(person);
console.log(personproto.toString());

//practice no 4
const student = {
    name : "pervez",
    student: true
}
// const studentProto = Object.getPrototypeOf(student);
// console.log(studentProto.toString());
console.log(student.toString());
// use kora jabe krn js object prototype inheritance er maddhome aro onnk gulo onject er shate connect thake.
