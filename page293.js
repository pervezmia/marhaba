// practice no.1
const num = [1,2,2,3,4,4,5];
const uniqueAry = [...new Set(num)];
console.log(uniqueAry);

// practice no.2
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet);

// practice no.3
const number = [10,20,30];
const myNumber = new Set (number);
myNumber.delete (10);
console.log(myNumber);

// practice no.4
const arry = [1,2,3,4,2,1,5,5];
const arryToSet = new Set (arry); //create set
const ary = [...new Set (arryToSet)];
console.log(ary);