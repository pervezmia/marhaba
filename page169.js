// practice no. 1

function income (incomeAmount){
    if (incomeAmount<=50000){
        return 10;
    } else if (incomeAmount<=100000) {
        return 20;
    } else if (incomeAmount<=200000){
        return 30;
    } else {
        return 40;
    }
}
const isAmount = income (6000);
console.log(isAmount);

// practice no. 2

function delivary (weight) {
    if (weight<10){
        return 100;
    } else if (weight<20){
        return 300;
    } else if (weight<50) {
        return 1000;
    } else {
        return 100;
    }
}
const isCost = delivary(22);
console.log(isCost); 

// practice no. 3

function mark (number){
    if (number>=80){
        return 'A';
    } else if (number>=70){
        return 'B';
    } else if (number>=60){
        return 'C';
    } else if (number>=50){
        return 'D';
    }else{
        return 'F';
    }
}
const isMark = mark (55);
console.log(isMark);