//practice no.1
const userinfo = new Promise((resolve, reject) => {
    const isUserData = false ;
    const userData = ["pervez","sohag","ahmed","mia"];
    if(isUserData){
        resolve(userData);
    }else{
        reject("here is no user's data");
    }
})
userinfo.then((message)=>{
    console.log(message);
});
userinfo.catch((Error)=>{
    console.log(Error);
});


//practice no.2
const paymentProcess = new Promise ((resolve,reject) => {
    const num = 0;
    if(num>0){
        resolve("available Money in wallet. So you can pay.");
    }else{
        reject("no money no payment.");
    }
})
paymentProcess.then((message)=>{
    console.log(message);
});
paymentProcess.catch((error)=>{
    console.log(error);
})


//practice no.3
function sendEmail (gmail){

    const validEmail = [];

    const sendMail = (new Promise((resolve, reject) => {
    if(validEmail.includes(gmail)){
        resolve("Email from Nigerian prince");
    }else{
        reject("Lets Dance in the spam folder");
    }
    
    }))
    sendMail.then((message)=>{
    console.log(message);
    })
    sendMail.catch((error)=>{
    console.log(error)
    })
 
    return sendMail;
  }
 
mail("sohag@gmail.com")