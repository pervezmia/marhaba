//practice no 1
//class and object er moddhe difference holo
//same typer akadhik object proyojon hole akta class diya huge poriman object create kora jai. jar jnno sudhu object a alada alada object create korte hoi ja sym sapakho.
//class diya j object create korbo tar sob gulor boisisto same eee thakbe. sudhu object a same typer object er jnno bar bar object create kore hobe.

//practice no 2
//Kono cls er nomuna object k instance bole.

//practice no 3
class Vahicle {
    constructor (brand,model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}
const BMWX5 = new Vahicle("BMW","X5",90000);
const teslaModel3 = new Vahicle("Telsa","Model 3", 40000);
console.log(BMWX5);
console.log(teslaModel3);

//practice no 4
class Worker {
    constructor (id,name,hoursworked) {
        this.id = id;
        this.name = name;
        this.hoursworked = hoursworked;
    }
}
const worker1 = new Worker (101,"Tom Cruise",40);
console.log(worker1);

//practice no 5
class Library {
    constructor (name,books,location){
        this.name = name;
        this.books = books;
        this.location = location;
    }
}
const newLibrary = new Library ("Central Library",10000,"Dhaka")
console.log(newLibrary instanceof Library);

//practice no 6
class Classroom {
    constructor (students,section,techer){
        this.students = students;
        this.section = section;
        this.techer = techer;
    }
}
const info = new Classroom ([],"A","Mr.Plumber");
console.log(info);

//practice no 7
class Product {
    constructor (name,category,stock){
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
}
const digitalProduct = new Product("Mobile","Electronics",50);
console.log(digitalProduct);

//practice no 8
class Product1 {
    constructor (name,category,stock=0){
        this.name = name;
        this.category = category;
        this.stock = stock;
    }
}
const digitalProduct1 = new Product1 ("Mobile","Electronics",50);
console.log(digitalProduct1);