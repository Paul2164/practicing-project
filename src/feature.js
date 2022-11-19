
// let promise = Promise.resolve(34)

// let promise1 = 20

// let promise2 = new Promise(function(resolve,reject) {

//     setTimeout(() => resolve("OK"),2000)
// })


// let promise3 = Promise.all([promise,promise1,promise2])

// promise3.then((values)=> console.log(values))


// function addNumbers (num1,num2) {

//     return num1 + num2
// }

// let numbers = addNumbers(3,5)
// console.log(numbers)


// let promise4 = Promise.resolve("successful")

// let promise5 = Promise.reject("oooops")

// let promise6 = new Promise (function(resolve,reject){

//     setTimeout(function() {

//         resolve("Login successful")
//     })
// })

// let promise7 = Promise.allSettled([promise4,promise5,promise6])

// promise7.then(function(result) {

//     result.forEach(function(value) {

//         console.log(value)
//     })
// })


// let promises = Promise.resolve("successful")

// let promises1 = Promise.reject("oooops")

// let promises2 = new Promise (function(resolve,reject){

//     setTimeout(function() {

//         resolve("Login successful")
//     })
// })

// let promises3 = Promise.any([promises,promises1,promises2])

// promises3.then(function(values) {

//     console.log(values)
// })

function sum(a,b) {

    return a + b
}

let add = sum(3,4)

console.log(add)