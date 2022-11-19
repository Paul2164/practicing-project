
let promise = Promise.resolve(34)

let promise1 = 20

let promise2 = new Promise(function(resolve,reject) {

    setTimeout(() => resolve("OK"),2000)
})


let promise3 = Promise.all([promise,promise1,promise2])

promise3.then((values)=> console.log(values))


function addNumbers (num1,num2) {

    return num1 + num2
}

let numbers = addNumbers(3,5)
console.log(numbers)