//practice no.1
let taxRate = 15 ;
function earnMoney (income){
    tax= income/100*taxRate;
    console.log(tax);
}
earnMoney(15);

//practice no.2
function place (){
    let insideSecret = "internal secret hiding place";  
}
place()
console.log(insideSecret);

//practice no.3 
let temp = 40;
if (temp >=40){
    let temparature = "Temparature power is strong."
}
console.log(temparature);

//practice no.4
function schoolDetails () {
    const schoolName = "Anonymous goverment school";
    function displaySchoolName (){
            console.log(schoolName);
    }
    displaySchoolName();
}
schoolDetails();