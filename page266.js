// practice no.1

if(!!'false'){
    console.log('truthy');
}else{
    console.log('falsy')
}


// practice no.2
let emptyObject = {};
if(!!emptyObject){
    console.log(true, ": aita akta true value because emtry object and array is counted true.");
}else{
    console.log(false);
}

// practice no.3

let emptyArray = [];
if(!!emptyObject){
    console.log(true);
}else{
    console.log(false);
}

// practice no.4
console.log(!![]);
// akta khali Array er samne dobule logical not use korle output true powa jabe.

