//practice no.1
function Pervez (secondPara) {
    secondPara();
}

function sohag () {
    console.log("Alhamdulillah");
}
Pervez(sohag);

//practice no.2
function user (objectPara){
    console.log(objectPara) ;
}

userInfo = {
    name: "pervez",
    age: 23,
    address: "Sirajgang"
}
const keys = Object.keys(userInfo);

user(keys);

//practice no.3
function numberProcessor (num,callback){
    result = num/5;
    callback(result);//callback Function k call kora hosse and ai value second Funtion a sand kora hosse
}
function secondFunction (akhaneAktaManSandKorseCallBackKorarPor){
    console.log(akhaneAktaManSandKorseCallBackKorarPor);
}
numberProcessor(30, secondFunction);

//practice no.4
function mother (forHer){
    pray = "May Allah bless them."
    forHer(pray);
}
function father (forThem){

    console.log(forThem);

}
mother(father);