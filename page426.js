//practice no 1
//data browser a lomba smy dhore store kore rakhar jnno use korte hobe local storage  
//browser bondho kore abar punorai khulle data theke jabe local storage a jodi user nije giya muse na dei toh.

//sesson storage holo alpo smy er jonno data use kora hoi.
//browser close korle ba tab kete dile sesson storage er data chole jai.

//practice no 2
localStorage.setItem("mode","dark");
let ons = localStorage.getItem("mode");
console.log(ons);

localStorage.setItem("mode","white");
let offs = localStorage.getItem("mode");
console.log(offs);

//practice no 3
sessionStorage.setItem("userToken","abcd1234");
let user = sessionStorage.getItem("userToken");
console.log(user);

//practice no 4
localStorage.setItem("userName","Alex");
localStorage.removeItem("userName");

//practice no 5
history.go(2);