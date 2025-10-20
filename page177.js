// practice no. 1
function noDublicate (numbers){
    const uniqueArray = [];
    for (const number of numbers ){
        if (uniqueArray.includes(number)===false){
            uniqueArray.push(number);
        }
    }
    return uniqueArray;
}
const array = [1,2,3,3,3,4,5,6,5,6,5,2,8,7,8,11,];
const checkDublicate = noDublicate (array);
console.log(checkDublicate);

// let a =5;
// let b= 7;
// const temp = a;
// a=b;
// b=temp;
// console.log(a,b);
