//practice no.1

//js Object
const jsObject = {
    name :"pervez",
    age: 23,
    from: 'Sirajganj'
}
//json Object
const jsString= {
    
    "name":"pervez",
    "age": 23,
    "names": ["pervez","sohag","mia","ahmed"],
} 

//practice no.2
const user = {
    name: "pervez",
    email: "sohag@mail.com",
    address: "Sirajganj",
    ordered: ['bag', 'ball', 'bat']
}

const newUser = JSON.stringify(user);
console.log(newUser);

//practice no.3
const cart = {
    userBuy:["fish","meat","vegitables","fruits","flowers"],
    totalPrice: 1220,
    userDetails:{
        name: "pervez",
        id: 34345,
        contact: "abc@gmail.com"
    }
}
const stringObj = JSON.stringify(cart);
console.log(stringObj);

//practice no.4
const weather = {
    city: "sirajgang",
    temperature: 40,
    humidity: "medium",
    forecast: [36,35,28,30,32,29,31]
}
const jsons = JSON.stringify(weather);
console.log(jsons)

//practice no.5
const movie = {
    title: "Emotion",
    releaseYear: 2038,
    actors: ["tom",'dom','jara','alice'],
    rating: 4.5
}
const overView = JSON.stringify(movie);
const reverse = JSON.parse(overView);
console.log(reverse);

//practice no.6
const project = {
    projectDetails: [
        {projectName: "Super Vision"},
        {projectDescription: "this is good project."},
        {teamMembers: [2,4,6,8,3]},
        {deadlines: 2027},
        {tasks : {
            title:"vision27",
            assignee: 2026,
            status:"rich Kids"
        }}
    ]
}
const stringy = JSON.stringify(project);
console.log(stringy);

//practice no.7
const jsFundamental = {
    levelOne:{
        courseTitle: "grow from noob",
        instructorName: "Pervez",
        duration: "one month",
        lessons: [{lessonName : "JS Fundamental"}, {duration:"1 month"} , {difficultyLevel:'beginner'}],
    },
    levelTwo: {
        courseTitle: "Walking in JS",
        instructorName: "Sohag",
        duration: "two month",
        lessons: [{lessonName : "JS intermediate"}, {duration:"2 month"} , {difficultyLevel:'intermediate'}],
    },
    levelThree: {
        courseTitle: "Flying in JS",
        instructorName: "Ahmed",
        duration: "three month",
        lessons: [{lessonName : "JS advance"}, {duration:"3 month"} , {difficultyLevel:'advance'}],
    }
}
const stringi = JSON.stringify(jsFundamental);
console.log(stringi);

//practice no.8
const productName = {
    productName: "mouse-8",
    reviewerDetails: {
        name:'fokhrul',
        email: "fokhrul@gmail.com"
    },
    rating: 5,
    reviewText: "the product is good."
}
const jsonFile = JSON.stringify(productName);
const jsFile = JSON.parse(jsonFile);
console.log(jsonFile,jsFile);