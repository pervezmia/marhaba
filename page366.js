//practice no 1
// inheritance mane holo tottorodikary kono jinish. coding a inheritance mane holo parent cls er odhine child cls hobe.r parent cls sob common property gulo thakbe r sei gulo sob child eee access nite parbe.

//practice no 2
// parent cls declare korar por child cls declare korte extends diye parent child er name likhte hoi. erpor child er vitor super diya common parameter declare korte hoi.baki parameter normally likhte hoi. 

//practice no 3
class Vahicles {
    constructor(name,brand,color,price){
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.price = price;
    }
}
class Bus extends Vahicles{
    constructor(name,brand,color,price,ac){
        super(name,brand,color,price);
        this.ac = ac;
    }
}

class Truck extends Vahicles {
    constructor(name,brand,color,price,carryWeight){
        super(name,brand,color,price);
        this.carryWeight =carryWeight;
    }
}

class Bike extends Vahicles {
    constructor(name,brand,color,price,isHelmad){
        super(name,brand,color,price);
        this.isHelmad = isHelmad;
    }
}


const bus = new Bus("Bullet","Yamaha","Yello",2400000,false);
const truck = new Truck("Hero","Tata","blue",1600000,"5 ton");
const bike = new Bike("Gixxer","Suzuki","black",200000,true);
console.log(bus.color);
console.log(truck.carryWeight);
console.log(bike.brand);

//practice no 4
//animal-name,leg,gendar,price,color  Bird-name,color,wings,gendar,price  Fish-name,color,price,gendar,seaFish
class Prani {
    constructor(name,gendar,color,price){
        this.name = name;
        this.gendar = gendar;
        this.color = color;
        this.price = price;
    }
}

class Animal extends Prani {
    constructor(name,gendar,color,price,isLeg){
        super(name,gendar,color,price);
        this.isLeg = isLeg;
    }
}

class Bird extends Prani {
    constructor(name,gendar,color,price,wings){
        super(name,gendar,color,price);
        this.wings = wings;
    }
}

class Fish extends Prani{
    constructor(name,gendar,color,price,isSeaFish){
        super(name,gendar,color,price);
        this.isSeaFish = isSeaFish;
    }
}

const animal = new Animal("Cow","Female","Glack",70000,4);
const bird = new Bird("Eagle","male","Gray",8000,true);
const fish = new Fish("Tuna Fish","Female","White",2000,true);
console.log(animal.isLeg);
console.log(bird.price);
console.log(fish.name);
console.log(fish)

//practice no 5
class Furniture {
    constructor(type,material,color,legs,){
        this.type = type;
        this.material = material;
        this.color = color;
        this.legs = legs
    }
}
class Table extends Furniture {
    constructor(type,material,color,legs,shape){
        super(type,material,color,legs);
        this.shape = shape;
    }
}

class Chair extends Furniture{
    constructor(type,material,color,legs,backRest){
        super(type,material,color,legs);
        this.backRest = backRest;
    }
}
const table = new Table ("Table","Wood","Brown",4,"Rectangular"); 
const chair =  new Chair ("Chair","Plastic","Red",4,true);

console.log(table.color);
console.log(chair.backRest);

//practice no 6
class Animals {
    constructor(type,color,size,food){
        this.type = type;
        this.color = color;
        this.size = size;
        this.food = food;
    }
}
class Dog extends Animals{
    constructor(type,color,size,food,hound){
        super(type,color,size,food);
        this.hound = hound;
    }
}

class Cat extends Animals{
    constructor(type,color,size,food,eyeType){
        super(type,color,size,food);
        this.eyeType = eyeType;
    }
}

class Parrot extends Animals {
    constructor(type,color,size,food,wings){
        super(type,color,size,food);
        this.wings = wings;
    }
}

const dog = new Dog ("Dog","Red","Large","meat",true);
const cat = new Cat ("Dog","Red","Large","meat","caty");
const parrot = new Parrot ("Dog","Red","Large","meat",true);
console.log(dog);
console.log(cat.eyeType);
console.log(parrot);

//practice no 6
//DRY principle means Don't repeat yourself. orthath repeat komate hobe code a. similar type onnk gulo cls thakle inheritance use kore repeat komate hobe. similar cls likhle same property gulo div akta cls rekhe er por unique property gulo child cls a rekhe code korle tokhon code DRY use kora hobe.
//for example:
class Device {
    constructor (name,brand){
        this.name = name;
        this.brand = brand;
    }
}
class Monitor extends Device {
    constructor (name,brand,visible){
        super(name,brand);
        this.visible = visible;
    }
}

class Processor extends Device {
    constructor(name,brand,functionality){
        super(name,brand);
        this.functionality = functionality;
    }
}
const monitor = new Monitor("Hickvision pro 10","Hickvision",true);
const processor = new Processor("AMD 5600g","AMD",true);
console.log(monitor.name);
console.log(monitor);
console.log(processor.functionality);
console.log(processor);
//ukto example dekhano holo kivabe DRY use same property bar bar likhte theke beche shortcut use kore same code lekha jai.