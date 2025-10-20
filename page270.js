//practice no.1
if (true == 1){
    console.log("same");
} else {
    console.log("different");
}

//practice no.2
const firstObj ={firstName: "Ahmed"} ;
const secondObj = {lastName: "Pervez"};
if ( firstObj === secondObj){
    console.log(true);
} else {
    console.log(false);
}

//practice no.3
const arry = [2113,321111,3213,2223122,];
const vari = arry;
if (arry === vari){
    console.log(true);
} else {
    console.log(false);
}

//practice no.4
function demo (m,b){
    if (m==b){
        console.log(true);
    }else {
        console.log(false)
    }
}
demo(3,true);

//practice no.5
if("" == false){
    console.log(true);
} else {
    console.log(false);
}

//practice no.6
if (null === undefined){
    console.log(true);
}else{
    console.log(false);
}

//practice no.7
if (1 == "1"){
    console.log(true);
} else {
    console.log(false);
}
//Here is explanation: compare just valu by double equal in js. when js get first value with number then it convert number second value from string or others.