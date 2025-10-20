//practice no 1
const price = 4500;
if (price > 6000){
    const discount = price / 100 * 15;
    const pay = price - discount;
    console.log(pay) 
} else if (price > 3000){
    const discount = price / 100 * 5;
    const pay = price - discount;
    console.log(pay)
}else{
    console.log(price)
}

//practice no 2
const age = 15; 
if(age<12){
    console.log("free food");
}else if(age>60){
    console.log("also free food")
}else{
    console.log("price please")
}

//practice no 3
const taka = 6000;
if(taka > 5000){
    console.log("you are rich person so you can marry me.");
}else if (taka>1000){
    console.log("chill life, let's do enjoy.");
}else{
    console.log("deposite please");
}

//practice no 4
const mark = 9;
if(mark >= 80){
    console.log("you have got A+");
}else if (mark >= 50) {
    console.log("you have got pass");
}else{
    console.log("you have got Fail")
}

//practice no 5
const page = 600;
if(page>500){
    console.log("heart attack size book")
}else if(page>100){
    console.log("mid size book");
}else{
    console.log("small book")
}

//practice no 6
const temparature = 33;
if(temparature>=20){
    console.log("hot hot");
}else if(temparature>=0){
    console.log("cool cool")
}else{
    console.log("ice")
}

//practice no 7
const lavel = 58;
if (lavel>50){
    console.log("Pro Gamer");
}else if(lavel>10){
    console.log("Expert")
}else{
    console.log("novice")
}