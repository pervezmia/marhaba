//practice no 1
// IIFE holo immediately invoke function expression. IIFE emon akta function toiry kore, jeta immediately execude kore shate shatei kaj end kore.

//practice no 2
(function(){
    console.log("I am isolated from outer scope");
})()

// practice no 3
(() => {
    console.log("borrow from arrow");
})();

//practice no 4
((kelvinTemperature)=>{
    const celsius = kelvinTemperature - 273.15;
    console.log(celsius);
})(400)
