// practice no 1
setTimeout (()=>{
    console.log("I wasted 3 seconds of my life by looking at screen and doing nothing.")
},3000)

// practice no 2
let num = 129;
const interval = setInterval(()=>{
    num +=2;
    console.log(num);
},2000);

// practice no 3
let num1 = 0;
const intervalIt = setInterval(()=>{
    num1++
    const sentence = "I am learning javascript.";
    console.log(sentence);
    if( num1 === 6){
    clearInterval(intervalIt);
    }
},2000)

// practice no 4
// setTimeout() second parameter bad dile 0 milisecond dhore nei