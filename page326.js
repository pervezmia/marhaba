// const url = "https:/jsonplaceholder.typicode.com/users"
// fetch(url)
// .then(response => response.json()) //ai response parameter server theke ki respose pai tai dekhai. ar ai arrow function diya response.json er modhome reponse powa deta gulo re js object a convert kore jate js diya access kora jai ba use kora hoi.
// .then(data => console.log(data)) //ai then diya patto data k aste kore console log kore output disse.
// .catch(error => console.log(error)); //jodi data na pai ba limitation thake taile akta error show korbe.

// practice no 1 
// fetch function theke return kora promiser maddhome "response.json()" call kore, data convert kora hoi jate JS diya access neya jai ba use kora jai

// practice no 2
//Server theke data ante ba pathate fetch k use kora hoi.

// practice no 3
//fetch nijei promise k return kore 
//Server theke nirdishto data ante ba pathate fetch k use kora hoi.

// practice no 4
const url ="https://jsonplaceholder.typicode.com/users";
fetch (url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// practice no 5
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

