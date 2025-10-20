// practice no. 1
const snacksPrice = [30, 45, 20, 60, 10];
const newSnacksPrice = snacksPrice.map(price => price+13);
console.log(newSnacksPrice);

// practice no. 2
const playerName = [ 'Messi', 'Maradona', 'Pele', 'Zidane','Ronaldo'];
const favName = playerName.filter(n => n.length>5);
console.log(favName);

// practice no. 3
const number = [10, 15, 20, 25, 30,35];
const newNum = number.find(n => n>20);
console.log(newNum);

// practice no. 4
const hight = [65, 70, 68, 72, 68, 73];
const bigHight = hight.filter(h => h>69);
console.log(bigHight);

// practice no. 5
const division = [7,10,15,20,25,30];
const neDivision = division.map(item => item/3);
console.log(neDivision);





// practice no. 6
const names = [ "leonardo", "Brad", "Kate Winslet", "audrey", "Johan Depp"];
const thirdName = names.map(nam => nam[2]);
console.log(thirdName);

// practice no. 7
const model = [ 'Tom', 'Harry', 'Sam', 'Jack'];
const searchH = model.find(m => m.length>4);
console.log(searchH);

// practice no. 8
const topRoll = [1,2,3,4,5];
const print = topRoll.forEach(roll => console.log(roll));

//practice no. 9
const animals = ['cow', 'goat', 'sheep','horse'];
const animalsName = animals.forEach(namm => console.log(namm));
