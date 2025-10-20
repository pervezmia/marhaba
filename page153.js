    //practice no.1
    function isOverTen(num){
        if (num>10){
            return true;
        }
        return false
    }
    const result = isOverTen(122);
    console.log(result);

        //practice no.2
    function check (num){
        if (num%13==0){
            return true;
        }
        return false;
    }
    const submitNum = check (133);
    console.log(submitNum);

    //practice no.3

    function lunch (rice, cury, drinks){
        const sum = rice + cury + drinks;
        return sum;

    }
    const showPrice = lunch (50, 150, 30);
    console.log(showPrice);

    //practice no.4

    function citizenship (age) {
        if (age>18){
            const eligible = "Eligible for Voting";
            return eligible;
        }
        const noEligible = "Not Eligible";
        return noEligible;
    }
    const check1 = citizenship (10);
    console.log(check1);

    //practice no.5

    function name1 (userName){
        const nam = userName;
        return nam;
    }
    const len = name1 ("Pervez");
    console.log(len.length);


    //practice no.6

    function num ( num1, num2, num3){
        const total = num1 + num2 + num3;
        return total;
    }
    const gor = num (20, 30, 50);
    console.log(gor);

    //practice no.7

    function submitNumber (num){
        if (num<1){
            const multi = num*-1;
            return multi;
        }
        return num
    }
    const checkNegative = submitNumber (-950);
    console.log(checkNegative);