
//practice no.1
function myInfo (nam){
    
    if (typeof nam !== "string"){
        return "Please provide a sting";
    }
    return nam[0];
    
}
const info = myInfo("pervez");
console.log(info);

//practice no.2
function player (players){
    if (typeof players === "object"){
        return players.pop();
    }
    return "provide an object"
}
const names = ["sumon","abdul Hanif","sobuj","yeasin"]
const pp =  player(names);
console.log(pp)

//practice no.3
function getArea (l,w){
    if(typeof l === "number" && typeof w === "number"){
        const area = l*w;
        return area;
    }
    return "provide number please."
}
const inpt = getArea(5,3);
console.log(inpt)