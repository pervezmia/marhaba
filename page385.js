//practice no 1
const team = {
    name:"Pervez",
    players:12,
    play(){
        console.log(`player name is: ${this.name}. Total player ${this.players}`);
    }
    
}

team.play()

const tournament = {
    name: "jon",
    players: 25
}
const tournamentInfo = team.play.bind(tournament);
tournamentInfo();

//practice no 2
const car = {
    speed: 564,
    price: 756777,
    drive(){
        console.log(`Speed ${this.speed} and Price ${this.price}.`);
    }
}
car.drive();

const bike = {
    speed:125,
    price:120000
}
car.drive.call(bike);

const truck = {
    speed:200,
    price:900000
}
car.drive.call(truck);

//practice no 3
const employee = {
    name:"Pervez",
    role:"Boss",
    details(){
        console.log(`name ${this.name} role ${this.role}`);
    }
}
employee.details()

const manager = {
    name:"Sohag",
    role:"Big Boss"
}
employee.details.apply(manager);

//practice no 4
const classroom = {
    name:"pervez",
    students: ["pori","rup","iva","momi"],
    attendance(){
        console.log(`${this.students.join(",")}`);
    }
}
classroom.attendance();

const lab = {
    name:"sohag",
    students:["rony","sumon","kotlin"],
}
const labInfo = classroom.attendance.bind(lab);
labInfo();