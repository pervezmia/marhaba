// practice no.1
const numbers = [21, 44,55,75,77,120];
const isNumber = numbers.some(numbers => numbers>100);
console.log(isNumber);

// practice no.2
const number = [28, 49,50,30,40];
const isdivision = number.every(number => number%5===0);
console.log(isdivision);

// practice no.3
const words = [ 'real',"pera",'moja',"realMoja"];
const isWordEqual = words.some(words => words.length > "hello".length);
console.log(isWordEqual);
 
// practice no.3
const age = [20, 30, 42, 45, 22 ];
const isage = age.every(age => age >= 18);
console.log(isage);