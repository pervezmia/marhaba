//practice no.1
function total (num1 = 0, num2 = 0){
    console.log(num1, num2);
    const result = num1+num2;
    return result;
}
const sum = total(4,7);
console.log(sum);

//practice no.2
function submitMoney (money=50) {
    return money;
}
const taka = submitMoney (400);
console.log(taka);

//practice no.3
function address (name="anonymous",montlyInCome=0){
    console.log(name,montlyInCome);    
}
const data = address("pervez",40000);

//practice no.4
function number (num = 1){
    const squre = num*num;
    return squre;
}
const isSqure = number (4);
console.log(isSqure);

//practice no.5
function productInfo (productName='anonymous',price=1){
    console.log(productName, price);
}
const result = productInfo();

//practice no.6
function favBook (books='JS book'){
    return books;
}
const bookArray = ['marhaba','bangla','english'];
const checkBooks = favBook();
console.log(checkBooks);

//practice no.7

function bookInfo (totalPrice={price:10, quantity:1}){
    return totalPrice;
}
const productInfo1 = {color:'red',product:'BrandNew', quantity:21 }
const info = bookInfo(productInfo1);
console.log(info);

//practice no.8

function numb (num3 = [5,10,15]){
    const mutifiedArray = [];
    for (const num6 of num3){
        const nwArray = num6*2;
        mutifiedArray.push(nwArray);
    }
    return mutifiedArray;
}
const arr = [1,2,3,4,5,6];
const arguarr = numb(arr);
console.log(arguarr);




// practice no.9
function total (amount ={principal:1000, rate:5}){
    const simpleInterest = amount.principal*amount.rate/100;
    return simpleInterest;
}
const obj = {principal:2100,rate:30}
const isAmount = total (obj);
console.log(isAmount);

// practice no.10
function money (moneyPara ={ salary:50000,tax:10}){
    const taxMoney = moneyPara.salary * moneyPara.tax/100 ;
    const withOutTaxMoney = moneyPara.salary -taxMoney;
    return withOutTaxMoney;
}
moneyObj = { salary:800,tax:20};
const totalMoney = money();
console.log(totalMoney);