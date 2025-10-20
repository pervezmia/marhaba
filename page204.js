    // practice no.1
    const product = {name:"Laptop",price:50000,brand:"Dell"};
    const {name, ...others} = product;
    console.log(others);

    // practice no.2
    const project = {id:101, title:"web app", budget:3000, client: "Tech Corp"}
    const {title, ...aladaProperty} = project;
    console.log(aladaProperty);

    // practice no.3
    const programmer = { name:"Sophia", language:"Javasript", experience:5, speciality:"Frontend", tools:"React"};
    const {language, speciality, ...details} = programmer;
    console.log(details);

    // practice no.4
    const income = [10,20,3,30,300,3000];
    const [ , , ...otherVariable] = income;
    console.log(otherVariable);

    
    // practice no.5
    function num (a, b, ...other) {
        let sum = 0;
        for (const singleNum of other){
            sum = sum + singleNum;
        }
        return sum;
    }
    const number = num(1, 2, 3, 4, 5, 6);
    console.log(number);
    
    // practice no.6
    function digit (...digits){
        const size = digits.length;
        if ( size === 0){
            return 0;
        }
        let sum = 0;
        let average;
        for (const dgit of digits){
            sum = sum + dgit;
            average = sum/size;
        }
        return average;    
    }
    const averageDigit = digit(2,3,4,10,6);
    console.log(averageDigit);