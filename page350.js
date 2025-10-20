//practice no 1
let a = 59;
const b = a++; 
const c = ++a;
console.log(b,c);

//practice no 2
let orange = 100;
let vagfol =orange/15;
orange/=15;
console.log(vagfol);
console.log(orange);

//practice no 3
let mango = 20;
mango&&=10;
console.log(mango);//krn mango er value truthy hole logical and assignment oparator redclare kora variable er value change kore dei.

//practice no 4
let bananas = 50;
bananas*=4;
console.log(bananas);

//practice no 5
let grapes = 9;
grapes ||= 19;
console.log(grapes); //kono variable er man jodi truthy hoi taile logical OR assignment oparator redclare kora variable er value change kore na.

//practice no 6
let apples = 20;
apples -= 10;
console.log(apples);

//practice no 7
let price = undefined;
price ||=90;
console.log(price); //price er value change hoise krn holo price er value silo falsy. Logical OR assignment oparator falsy hole value change korte pare onnothai pare na.

//practice no 8
let tomato = 0;
mango &&= 5;
console.log(mango); //  variable er value falsy hole logical and assignment oparator value change korte dei na. but let keyword variable reclare korar sujok dei ai jonnoi mone hoi mango er man 5 hyse.

//practice no 9
let appless = 15;
appless%=6
console.log(appless); //3 hobe krn vag shes holo 3. modulus er shortcut oparator use kora hyse.

