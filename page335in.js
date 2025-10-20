//practice no 1
try{
    const productInfo = "this a string value";
    // const productInfo = '{"product":"Date","price":450}';
    const jsObject = JSON.parse(productInfo);
    console.log(jsObject);
    
}catch(error){
    console.error("must json file")
}

//practice no 2
function validateInput (input){
    try{
        if(typeof input !== "string" || !input.includes("@")){
            throw new Error("Invalid email format");
        }
        console.log(input);
    }catch(error){
        console.error(error.message);
    }
}
const num = 735;
const mail = "kfkfiffjf";
const email = "per@gmail.com";
validateInput(mail);
validateInput(email);
validateInput(num);

//practice no 3
function target (data){
    try {
        const prs = JSON.parse(data);
        console.log(prs)
        
    }catch(error){
        console.error("Week is over");
    }
}
const pro = {role:"CEO",weeklyHours:1000};
// const pro = `{"role":"CEO","weeklyHours":1000}`;
target(pro)

//practice no 4
function stringOnlyParser (str){
    try{
        if(typeof str !== "string" || str === ""){
            throw new Error("Input must be a String");
        }
        console.log(str);
        
    }catch(error){
        console.error(error.message)
    }
}
stringOnlyParser("pervez")
stringOnlyParser(null)
stringOnlyParser(undefined)
stringOnlyParser("")

//practice no 5
function tryDelete (info){
try{
    if(info!==delete user.Account){
        console.log("deleting account");
    }
}catch(error){
    console.error("Failed to delete account");
}finally{
    console.log("Account deletion attempt finished");
}
}
const user = {Account: "pervez",student: "development"};
tryDelete(user)