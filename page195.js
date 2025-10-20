// practice no.1
const rolls = [1,2,3,4,5];
const firstRoll = (rollNo) => rollNo[0];
const pervezRoll = firstRoll(rolls);
console.log(pervezRoll);

// practice no.2
const number = (num1, num2, num3) => num1 * num2 * num3;
const multify = number(2,3,4);
console.log(multify);

// practice no.3
const name = () => "unknown";
console.log(name());

// practice no.4
const me = {
    name: "pervez",
    money: 50
}
const totalMoney = (taka) =>{
    const amount = taka.money;
    const lastMoney = amount/5;
    return lastMoney;
    
} 
const pervez = totalMoney(me);
console.log(pervez);

// practice no.5
const playerNumbers = [20, 21, 1, 6, 10, 2, 11];
const size = playerNumbers.length;
console.log(size-1);

const num = (number) => {
    const firstNum = number[0];
    const lastNum = number[6];
    const addTwoNum = firstNum + lastNum;
    return addTwoNum;
    
}
const total2 = num (playerNumbers);
console.log(total2);

// practice no.6
const digit = (digit1=10,digit2=5) => digit1 + digit2;
const totalDigit = digit(20,30);
console.log(totalDigit);
