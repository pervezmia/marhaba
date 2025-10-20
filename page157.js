

        // practice No.1
        function number2 (nums){
            const size = nums.length;
            if (size % 2 ===1){
                return true;
            }else{
                return false;
            }

        }
        const isOdd = number2([10,15,20,26,21,23,30,40,25,50,53,35,2])
        console.log(isOdd);

        // practice No.2
        function firstLetterOfName (nam){
            const indexx = nam[0];
            return indexx;
        }
        const getYourFirstLetter = firstLetterOfName("Sohag");
        console.log(getYourFirstLetter)

        // practic no.3

        function numb (number){
            if (number>10){
                const divi = number / 10;
                return divi;
            }else{
                const multi = number * 10;
                return multi;
            }

        }
        const result = numb (3);
        console.log(result);

        // practic no.4

        function resultSheet (markOfSubjects) {
            const firstSubMark = markOfSubjects[0];
            const secondSubMark = markOfSubjects[1];
            let addedTwoSubMark = firstSubMark + secondSubMark;
            return addedTwoSubMark

        }
        const total = resultSheet ([10, 60, 70, 84, 95, 78])
        console.log(total);
        
        // practic no.5

        function number (n) {
            if (n>1){
                const mulDuble = n*2;
                return mulDuble;
            }else{
                const mulTriple = n*3
                return mulTriple;
            }
        }
        const folafol = number (-9);
        console.log(folafol)

        // practic no.6

        function bigName (name1,name2){
            const name1Size = name1.length;
            const name2Size = name2.length;
            if (name1Size > name2Size){
                return true;
            } else {
                return false;
            }
        }

        const isBoroName = bigName ('pervez','sohagMia');
        console.log(isBoroName);

        // practic no.7
        
        function twoNum (n1,n2){
            const gun = n1 * n2;
            if (gun>100){
                const ordhekReturn = gun/2;
                return ordhekReturn;
            }else{
                return gun;
            }

        }
        const gunfol = twoNum(25,20);
        console.log(gunfol);