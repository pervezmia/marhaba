const book = {
    // practice no.1
    name : 'salatur rasul s:',
    writer: 'm asadullah al galib',
    price: 110
}
for (const key in book){  //ai line dara book er property gulo re variable hisebe initialize korlam. key = book er property
    const value = book[key]; //ai line a book er key totha property er moddhe j value gulo ase tader initialize korlam. value = book er property value
    console.log(key,value);
}

      // practice no.2
      
      const article = {
          title: 'Learning JS',
          category: "programming"
        };
        if ( "title" in article){
            console.log("ase");
        } else {
            console.log('nai')
        }

        // practice no.3
        const laptop = {
            brand: 'dell',
            model: "inspiron",
            price: 45000
        }
        for (const key in laptop){
            const value = laptop[key]
            console.log(key,value);
        }

        // practice no.4
        const phone = {
            brand: 'sumsung',
            model: 'Galaxy S21',
            price: 8500
        };
        const keys =Object.keys(phone);
        // console.log(keys);
        for (const key of keys){
            console.log(key);
        };

        // practice no.5
        const bike = {
            brand: 'Hero',
            price: 12000,
            model: 'splendor'
        };
        const list = Object.values(bike);
        console.log(list);
        // for (const valu of list){
            //     console.log(valu);
            // };


            // practice no.6
            const books = {
                book1: 'Harry potter',
                book2: 'The Hobbit',
                book: 'Game of Thrones'
            }
            const bookList = Object.values(books);
            // console.log(bookList)
            for (const alada of bookList){
                console.log(alada);
            }
            
            // practice no.7

            const numbers = {
                a : 10,
                b : 20,
                c : 30,
                d : 40
            };
            const totalNum = Object.values(numbers);
            let sum = 0;
            for (const total of totalNum){ 
                sum = sum+total;
            }
            console.log( sum)

            // practice no.8
            const player = {
                name: 'Messi',
                team: 'Argentina',
                goals: 91
            }
            const messiInfo = Object.values(player);
            console.log(messiInfo)
            // for (const alada of messiInfo){
                //     console.log(alada)
                // }

                // practice no.9
                const building = {
                    floor: 10,
                    address:{
                        street: 'Main Road',
                        city: 'Dhaka'
                    },
                    type: 'commacial'
                }
                for (const key in building){
                    const valu = building [key];
                    console.log(key,valu);
                }

