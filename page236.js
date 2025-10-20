// practice no.1
const fruits = ['Apple','Banana','Cherry','Date'];
const newArray = fruits.slice(1,3);
console.log(newArray);


// practice no.2
const cars = [ 'Tesla', 'BMW', 'Toyota', 'Ford'];
const specialCar = cars.slice(0,2);
console.log(specialCar);

// practice no.3
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar','Interstellarx'];
const newList = movieList.splice(2,2, "Batman","Superman")
console.log(newList);
console.log(movieList);

// practice no.4
const player = [ 'Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const newPlayer = player.splice(2,1,"Holland");
console.log(newPlayer);
console.log(player);
