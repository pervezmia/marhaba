// practice no 1
const fruits = ["apple","banana","mango","lichu"];
const includes = fruits.includes("mango");
if(includes == true){
    console.log("mango ache");
}else{
    console.log("mango nai gache uth");
}

// practice no 2
const names = ["babul","alif","rajib"];
const babulIndex = names.indexOf("babul");
console.log(babulIndex);

// practice no 3
const friends = ["rimon","rifat","rajib"];
const rifatIndex = friends.indexOf("rifat");
console.log(rifatIndex);

// practice no 4
const city = ["Dhaka","Chittagong","Sylhet"];
city.push("rajshahi");
const Rajshahi = city.includes("Rajshahi");
console.log(Rajshahi);

// practice no 5
const array = ["dighi","megh","bristy","borsha"];
const checkBristy = array.includes("bristy");
if(checkBristy){
    console.log("I need Umberalla");
}else{
    console.log("No rain no pain");
}

// practice no 6
const sports = ["football","cricket","volibol"];
const checkBadmilton = sports.includes("Badmilton");
console.log(checkBadmilton);
