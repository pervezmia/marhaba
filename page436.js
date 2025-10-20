// let products = [
//     {id:1,name:"Smartphone",price:200,stock:10},
//     {id:2,name:"Laptop",price:800,stock:5}
// ];
// let cart = [];
// let orders = [];


let products = [
    {id:1,name:"Smartphone",price:200,stock:10},
    {id:2,name:"Laptop",price:800,stock:5}
];
let cart = [];
let orders = [];

// const {name,city, ...details} = products;
// if()
// console.log();
    
function addToCart (nam){
    try {
    if(!nam === products[1].name || products[0].name){
    throw new Error("product not found.");
}
console.log(products[1].name,products[0].name);
} catch (error) {
    console.error(error);
}
}
addToCart ("Laptop");