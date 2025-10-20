//practice no 1
//window object holo browjer a sob jinish dhore rakhe. and main jinish dekhabe.

//practice no 2
console.log(this);
//this er value akta object astese.

//practice no 3
function student (){
    console.log(this);
}
//normal function er vitor this direct window k or main object ojhai.

student ();
const teacher = {
    name : "pervez",
    subject: "Political Science",
    greet : ()=>{
        return`Hello I am teacher ${this.name}`;
    }
};
console.log(teacher.greet());

//Arrow function er vitor this outer scope er this. akhane outer scope holo window or global scope. name property ase holo teacher function er moddhe jhetu window or global window er moddhe name property nai sei jonno arrow function er this undefined dekhabe. 

// uokto example proved hoi j normal function or arrow function same noi.
  

