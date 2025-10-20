//practice no 1
//akta function run kore felar poreo sei function scope er birer variable k access korar ability k closure bole.

//practice no 2
function fridgeTacker(){
    let openFridge = 0;    
    return function(){
        openFridge++;
        return openFridge;
    }
    
}
const sumon = fridgeTacker();
const asif = fridgeTacker();
const sujon = fridgeTacker();
const siam = fridgeTacker();
const kafi = fridgeTacker();
console.log(sujon());
console.log(sujon());
console.log(sujon());
console.log(asif());
console.log(asif());
console.log(sumon());
console.log(sumon());
console.log(siam());
console.log(kafi());

//practice no 2
function taskTracker(){
    let doneWork = 0;
    return function(){
        doneWork++;
        return doneWork;
    }
}
const pervez = taskTracker();
const saif = taskTracker();
const moni = taskTracker();
const pops = taskTracker();
// console.log(pervez());
// console.log(pervez());
// console.log(pervez());
// console.log(pervez());
// console.log(pervez());
// console.log(pervez());
// console.log(pervez());
// console.log(saif());
// console.log(saif());
// console.log(saif());
// console.log(saif());
// console.log(saif());
// console.log(moni());
// console.log(moni());
// console.log(moni());
// console.log(moni());
// console.log(pops());
// console.log(pops());
// console.log(pops());
// console.log(pervez());