//practice no 1
let x = null ;
let y = x ?? 75;
console.log(y);

//practice no 2
const product = {
    brand : "BMW",
    model: "corolla"
}
const productInfo = product.stock ?? 0;
console.log(productInfo);

//practice no 3
const productDetails = {
    brand : "BMW",
    model: "corolla",
    price: 40000,
    discount: 0,
}
const discountInfo = productDetails.discount||1200;
console.log(discountInfo);

//practice no 4
const vehicle = {
    brand : "BMW",
    model: "corolla",
    price: 40000,
    discount: 0,
}
const engineInfo = vehicle?.engine??"Engine info missing";
console.log(engineInfo); 

//practice no 5
const restaurant = {
    name : "Favourite Restaurant",
    location: "Sirajgang",
    certified: "BSTI"
}
const isMenu = restaurant.menu??"Menu not available";
console.log(isMenu);

//practice no 6
const profile = {
    name:"Pervez",
    student: "Web devlopment",
    social:{
        facebook:true,
        linkedin:true,
    },

}
const isTwitter = profile?.twitter??"Twitter handle not available";
console.log(isTwitter);

