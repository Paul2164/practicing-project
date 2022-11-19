function dogs() {

    return new Promise(function(resolve,reject) {

        const random = Math.random() * 2000;

        setTimeout(function() {

            resolve([

                "Terry", "Tom", "Bingo", "Jack"
            ])
        }, random)
    })
}

dogs().then(function (values) {

    console.log(values)
})