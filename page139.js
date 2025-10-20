//practice no.1
const headphone = {
    brand: 'sony',
    price: 3000,
    color: 'red'
}
Object.freeze(headphone);
delete headphone.brand;
headphone.color="blue";
console.log(headphone);

//practice no.2
const player = {
    name: "Messi",
    goals: 800,
    club: "Inter Miami"
}
Object.freeze(player);
delete player.goals;
console.log(player);

//practice no.3
const book ={
    title: 'Harry Potter',
    author: 'JK Rowling',
    pages: 500
}
Object.seal(book);
book.author= "rowling";
console.log(book)

//practice no.4
const  gadgat = {
    name: 'iPhone',
    price: 12000,
    color: 'Black'
}
delete gadgat.price;
console.log(gadgat);

//practice no.4
const animal = {
    name: 'Tiger',
    location: 'Sundarban',
}
Object.freeze(animal);
animal.location='bandorban';
console.log(animal);

//practice no.4
const food = {
    name: 'Pizza',
    price: 500,
    size: 'Large' 
}
// Object.seal(food);
food.price= "600";
food.size1= 'medium'
console.log(food);