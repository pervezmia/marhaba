
// practice no.1
const player = {
    name: 'pervez',
    age: 23,
    sport: 'Football',
    team: 'FCB'
}
console.log(player.team)

  // practice no.2
  const laptop = {
      brand : 'dell',
      price: 120000,
      hardDisc: 'HP',
      ram: 'corsiar',
      screenSize: '16 inch'
    }
    console.log(laptop.screenSize);

    // practice no.3
    const favPlace = {
        name: 'jomunar par',
        distance: '10km',
        popularity: 'high'
    }
    console.log(favPlace['popularity']);
    
    // practice no.4
    
    const phone = {
        brand: 'Nokia',
        color: 'black',
        price: 5000
    }
    console.log(phone['price']);
    
    // practice no.5
    
    const library = {
        name: 'publi library',
        location: 'dhaka',
        books: '5000'
    }
    console.log(library.location);
    
    // practice no.5
    const movie = {
        title: 'Inception',
        director: 'Nolan',
        rating: 9
    }
    console.log(movie['rating']);
    
    // practice no.5
    const college = {
        name: 'ndc',
        established: 1949,
        group: ['science', 'arts', 'commerce']
    }
    console.log(college.group[1]);
    // console.log(Object.values(college))
    // console.log(Object.keys(college))

    // practice no.5
    const family = {
        father:{
            name: 'Zaynal Abedin',
            age: 63,
            profession: 'bussiness man'
        },
        mother:{
            name: 'Shefaly Khatun',
            age: 55,
            profession: 'Perfect Home Maker'
        }
    }
    const fatherInfo = family.father.age;
    const motherInfo = family.mother.age;
    const totalAge = fatherInfo+motherInfo;
    console.log(totalAge)
    // console.log(Object.keys(family))
    // console.log(Object.values(family)) 