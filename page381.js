//practice no 1
const name = {
    brand: "dell",
    getBrand(){
        console.log(`I like ${this.brand} brand.`);
    }
}
name.getBrand();

const mobile = {
    brand: "Redmi"
}
mobile.getBrand = name.getBrand
mobile.getBrand();

//practice no 2
// this bolte bojhai function ba method kon context a run hosse. 

//Global context a this window ba global this k bojhai.
//use strict sho global context a this undefined k bojhai.
//object method a this oi object k bojhai.
//constructor function a this notun make hoya object k bojhai.
//class a this notun make hoya object k bojhai.
//event listener a this j element a event ghotese take bojhai.
//object method arrow function a this window ba global this bojhai. 

//practice no 2

const manager = {
    name:"jon",
    task:["post crea"],
    //assignWork method a this bolte object k bujhaitese. 
    assignWork(){
        `${this.task.push("post publish","post modify")}`
    }
}
manager.assignWork();
console.log(manager.task);