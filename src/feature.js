
let promise = Promise.resolve(34)

let promise1 = 20

let promise2 = new Promise(function(resolve,reject) {

    setTimeout(() => resolve("OK"),2000)
})


let promise3 = Promise.all([promise,promise1,promise2])

promise3.then((values)=> console.log(values))