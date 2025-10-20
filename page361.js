// class Player {
//     constructor (n,r,o){
//         this.n = n;
//         this.r = r;
//         this.o = o;
//     }
//     getR(){
//         return this .r;
//     }
// }
// const player1 = new Player("opu",5555,66);
// const opuRun = player1.getR();
// console.log(opuRun);
// console.log(player1);


// class Players {
//     constructor (nm,rn,ut){
//         this.nm = nm;
//         this.rn = rn;
//         this.ut = ut;
//     }
//     addRun(run){
//         this.rn = this.rn + run;
//     }
// }
// const player2 = new Players ("pritom",500,40);
// player2.addRun(50);
// player2.addRun(100);
// const ptmTotalRun = player2.rn
// console.log(player2);
// console.log(ptmTotalRun);


// class BankAccount {
//     constructor (owner,balance){
//         this.owner = owner;
//         this.balance = balance;
//     }

//     deposite(amount){
//         this.balance +=amount;
//         return this.balance;
//     }

//     withdraw(amount){
//         if(this.balance>=amount){
//             this.balance -= amount;
//             return amount;
//         }else{
//             return "Insufficient Balance";
//         }
//     }
// }
// const myAccount = new BankAccount("pervez",7000);
// myAccount.deposite(3000);
// myAccount.withdraw(2000);
// console.log(myAccount);


//practice no 1 
class RichHotel {
    constructor(name,room,cost){
        this.name = name;
        this.room = room;
        this.cost = cost;        
    }
    getName(){
        return this.name;
    }
}
const myHotel = new RichHotel("RichKids",400,5000);
const hotelNm = myHotel.getName();
console.log(hotelNm);

//practice no 2
class Employee {
    constructor(name,title,salary){
        this.name = name;
        this.title = title;
        this.salary = salary;
    }
    getSalary(){
        return this.salary;
    }
}
const employee9 = new Employee("pervez","Junior Developer",40000);
console.log(employee9);
const employee9Salary = employee9.getSalary();
console.log(employee9Salary);

//practice no 3
class Library {
    constructor(books){
        this.books =books;
    }
    
    addBook(b1,b2){
        this.books.push(b1,b2);
        return this.books;
    }
    
    hasBook(b){
        if(this.books.includes(b)){
            return true;
        }else{
            return false;    
        }
    }
}
const boi = new Library([]);
const addboi = boi.addBook('tawfiq',"marhaba");
const checkBoi = boi.hasBook("marhabas");
console.log(boi);
console.log(addboi);
console.log(checkBoi);

//practice no 4
class ShoppingCart {
    constructor(products,totalPrice){
        this.products = products;
        this.totalPrice = totalPrice;
    }

    addToCart(proName,proPrice){
        this.products.push(proName)
        this.totalPrice += proPrice;
        
        return this.proName, this.proPrice;
    }

    getTotalPrice (){
        return this.totalPrice;
    }
}
const myShoppingCart = new ShoppingCart([],0);
const myAddToCart = myShoppingCart.addToCart("marhaba",780);
const myAddToCart2 = myShoppingCart.addToCart("marhaba",780);
const myAddToCart3 = myShoppingCart.addToCart("tawfiq",65);
const totalPrice = myShoppingCart.getTotalPrice();
console.log(totalPrice);
console.log(myShoppingCart);