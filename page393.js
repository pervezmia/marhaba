//practice no 1
// comment++;
// const comment = 23;
// console.log(comment);

//practice no 2
// const divided = views/2; 
// const views =50;
// console.log(divided);

//practice no 3
//let and const diye declare kora variable gulo hoist kore akta jaiga rakhe r ai jaigar name holo Temporal Dead Zone. ata important because of ai zone a variable use kora jabe na korle refferance error dibe.

//practice no 4
// const and let diya jhetu function expression declare korte hoi tai . aita hoisting korleo value set kore na. tai initialization er age call kora jai na. korle comfirm error khete hobe.

//practice no 5
console.log(x)
var x = 10; //var keyword diya kono kisu decalre korle seita initialize kore but value nei na r default valu hisebe undefined nei.
console.log(x)

//practice no 6
// duitai hoiting kore and initialize kore rakhe. let and var er hoisting behavior same na. krn holo let er default kono valu nai tobe var er default value holo undefined.

//practice no 7
compare(87,12);
function compare (num1,num2){
    if(num1>num2){
        console.log(`big num is ${num1}`); //JS prothomei function declaration k upore tule nei. jate declare korar agei jodi khokhon o dorkar hoi taile jeno use korte pare.
    }else{
        console.log(`small num is ${num2}`);
    }
}