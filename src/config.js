function getDogs() {

    return new Promise(function(resolve,reject) {

        const random = Math.random() * 2000;

        setTimeout(function() {

            resolve([

                "Terry", "Tom", "Bingo", "Jack"
            ])
        }, random)
    })
}

function getCats() {

    return new Promise(function(resolve,reject) {

        const random = Math.random() * 2000;

        setTimeout(function() {

            resolve([

                "Meow", "Plurr", "Black-cat", "White-cat"
            ])
        }, random)
    })
}

function getBirds() {

    return new Promise(function(resolve,reject) {

        const random = Math.random() * 2000;

        setTimeout(function() {

            resolve([

                "Pigeon", "Dove", "Parrot", "Green-bird"
            ])
        }, random)
    })
}

// getDogs().then(function (values) {

//     console.log(values)

//     return getCats()
// }).then (function(value) {
//     console.log(value)

//     return getBirds()

// }).then(function(value) {

//     console.log(value)
// })

// let p =  Promise.all([

//     getDogs(),getCats(),getBirds()
// ])

// p.then(function(results){

//     console.log(results)
// })


async function go() {


    const[dogs,cats,birds] = await Promise.all([getDogs(),getCats(),getBirds()])

    const allAnimals = dogs.concat(cats,birds)

    console.log(allAnimals)


}

go()