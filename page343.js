//practice no 1
const userInfo = [{id:1,name:"mukta",address:"mirpur"}];
const addressPrint = userInfo[0].address;
console.log(addressPrint);

//practice no 2
const library = {
    name: "city library",
    books:[
        {id:1, title:"Javascript Basics", price:300},
        {id:2, title:"Python Essentials", price:500}
    ]
}
const index1Price = library.books[1].price;
console.log(index1Price);

//practice no 3
const school = {
    name: "Green High",
    students: [
        {id:1, name:"Samiha"},
        {id:2, name:"Kamal"}
    ]
}
const firstStudentName = school.students[0].name;
console.log(firstStudentName);

//practice no 4
const shop = {
    items:[
        {name:"pen",stock:100},
        {name:"notebook",stock:50}
    ]
}
const noteBookStock = shop.items[1].stock;
console.log(noteBookStock);

//practice no 5
const movie = {
    title:"Inception",
    director:{name:"Nolan",age:50},
    rating:8.8
}
const directorName = movie.director.name;
console.log(directorName);

//practice no 6
const game = {
    name:"football",
    player:[
        {id:1, name:"Lional Messi"},
        {id:2,name:"Cristiano Ronaldo"}
    ]
}
const firstPlayer = game.player[0].name;
console.log(firstPlayer);

//practice no 7
const vehicle = {
    type:"car",
    feature:{
        color:"red",
        brand:{name:"Toyota",model:"Corolla"}
    }
}
const brandName = vehicle.feature.brand.name;
console.log(brandName);