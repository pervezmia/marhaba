//practice no. 1
const number = [ 5, 10, 15, 20, 25];
const total = number.reduce((sum,item) => sum + item, 0);
console.log(total);

//practice no. 2
const product = [
    {name:'shampoo',price:100},
    {name:'soap',price:50},
    {name:'toothpaste', price:75}
]
const total2 = product.reduce((sum,item) => sum +item.price,0);
console.log(total2);

//practice no. 3
const products = [
    {name:"Pen",price: 5},
    {name:"Book",price: 50},
    {name:"Bag",price: 100}
]
const productsPrice = products.reduce((sum,item) => sum+item.price, 0);
console.log(productsPrice);


//practice no. 4
const num = [1,2,3,4,5];
const totall = num.reduce((n,item) => n*item,1);
console.log(totall);

//practice no. 5
const n = [10, 20, 30, 40, 50];
// const nwA = Math.max(...n);
// console.log(nwA);
const nwA = n.reduce((borosongkha, num) => (num>borosongkha? num:borosongkha), n[0]);
console.log(nwA);

//practice no. 6
const price = [100, 200, 300, 400, 500];
const totalPrice = price.reduce((sum,item) => sum+item, 50);
console.log(totalPrice);
