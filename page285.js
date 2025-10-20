// practice no.1
const min = Math.min(45,11,89,23,56,-12,-56);
console.log(min);

// practice no.2
const max = Math.max(21,35,67);
console.log(max);

// practice no.3
const floatingNum = 7.6;
const integer = Math.round(floatingNum);
console.log(integer); 
const floatingNum1 = 7.2;
const integer1 = Math.round(floatingNum1);
console.log(integer1);

// practice no.4
console.log(Math.floor(9.8));
console.log(Math.floor(5,3));

// practice no.5
console.log(Math.ceil(3.1));
console.log(Math.ceil(6.9));

//practice no.6
const neg = -34;
const absolute = Math.abs(neg);
console.log(absolute);

// practice no.7
function number (num){
    console.log(Math.round(num));
    console.log(Math.floor(num));
    console.log(Math.ceil(num));
}
number (5.8);