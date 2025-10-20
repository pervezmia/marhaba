

// practice no. 1

function  number(Num){
    let sum = 0;
    for (const serial of Num){
        if(serial%2==1){
            // console.log(serial);
            sum = sum + serial;
        }
    }
    return sum
    
}
const numOfArray = [1,2,3,4,5,6,7,8,9];
const sumOddNum = number (numOfArray);
console.log("Sum of the Odd numbers is:",sumOddNum);

// practice no. 2
function number1 (arr){
    const f = arr[0];
    const s = arr[1];
    if (f<s){
        return f;
    }else{
        return s;
    }
    
}
const arr = [33,132,34,565,45]
const checkIt = number1(arr);
console.log(checkIt);

// practice no. 3

function carchupi (age){
    if (age<18){
        return 18;
    } else if (age>45){
        return 45;
    }else{
        return age;
    }
    
    
}
const check = carchupi (25);
console.log(check);

// practice no. 4
function add (arry){
    let sum = 0 ;
    for (const lst of arry){
        if (lst%4==0){
            sum =sum+lst;
        }
    }
    return (sum);
}
const arrayNum = [2, 4, 5, 7, 8, 32, 45];
const result = add (arrayNum);
console.log(result);

// practice no. 5
function numb (giveNumber){
    if(giveNumber<=20){
        let num1 = giveNumber*2;
        return num1;
    }else {
        let num2 = giveNumber/20;
        return num2;
    }
    
}
const n = numb (500);
console.log(n)

// practice no. 6
function nag (digit){
    sum = 0;
    for (const d of digit){
        if (d<1){
            sum = sum + d;
        }
    }
    return sum ;
}
const arrayy = [20, -10, -40, -4, 40, -8, -96, -6, 30, 47];
const getdigit = nag(arrayy);
console.log(getdigit);

// practice no. 7
function newF (arrynum){
    let sum = 0;
    for (const nA of arrynum){
        if (nA%3==0){
            sum = sum +nA;
        }
    }
    return sum;
}
const newArray = [0, 30, 41, 85, 65, 75, 45, 78, 96,36, 40];
const numCheck = newF(newArray);
console.log(numCheck);
