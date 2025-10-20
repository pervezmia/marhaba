    //practice no. 1
    function evenAverage (numbers){
        const evenArray = [];
        for (const number of numbers){
            if(number%2===0){
                evenArray.push(number);
            }
        }
        const size = evenArray.length;
        if(size === 0){
            return 0;
        }
        
        
        let sum = 0;
        for (const even of evenArray){
            sum = sum + even;
        }
        
        const avrg = sum/size;
        return avrg;
        
    }
    // const array = [1,2,4,5,6,7,9];
    // const array = [1,3,5,7,9];
    const array = [1,2,3,4,5,6,7,8,9];
    const average = evenAverage (array);
    console.log(average);
    
    //practice no. 2
    function oddNumber (numbers1){
        const oddArray = [];
        for (const number1 of numbers1){
            if(number1%2===1){
                oddArray.push(number1);
            }
        }
        const multifyOddArray = [];        
        for (const odd of oddArray){
            const oddMultify = odd * 2;
            multifyOddArray.push(oddMultify);
        }
        return multifyOddArray;      
    }
    const array1 = [2,1,6,3,4,5] 
    // const array1 = [1,2,3,4,5,6,7,8,9];
    const newArray = oddNumber (array1);
    console.log(newArray);

    //practice no. 3
    function isNumber (numbers2){
        for (const number2 of numbers2){
            if (number2%2===0){
                return "No odd numbers found"
            }else{
                return "Odd numbers found"
            }
            
        }
        
    }
    const array2 = [2,4,6];
    // const array2 = [1,2,3,4,5];
    const checkOdd = isNumber(array2);
    console.log(checkOdd);

    //practice no. 4
    
    function oddNumber1 (numbers3){
        const oddArray1 = [];
        for (const number3 of numbers3){
            if(number3%2===1){
                oddArray1.push(number3);
            }
        }
        const size = oddArray1.length;
        if (size === 0){
            return 0;
        }
        
        let sum =0;
        for (odd of oddArray1){
            sum = sum + odd;
        }
        
        const average = sum / size;
        return average.toFixed(2);
    }
    // const array3 = [2,4,6];
    const array3 = [2,3,4,5,6,8,9];
    const twoDigitFloting= oddNumber1(array3);
    console.log(twoDigitFloting);
    
    //practice no. 5

    function oddNumber2 (numbers4){
        const oddArray2 = [];
        for (const number4 of numbers4){
            if(number4%2===1){
                oddArray2.push(number4);
            }
        }
        let newArr = [];
        for (const newArray of oddArray2){ 
            const minus = newArray-1;
            newArr.push(minus);  
        }
        console.log(newArr);
        
        
        
    }
    const array4 = [2,4,6,21,33,55];
    // const array4 = [2,3,4,5,6,7,9,11];
    const minusInArray= oddNumber2(array4);
    console.log(minusInArray);