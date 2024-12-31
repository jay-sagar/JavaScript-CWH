// The solution to the callback hell is promises
let promise = new Promise(function(resolve, reject) {
    console.log("Hello")
    resolve(56)
})


console.log("hello")
setTimeout(function () {
    console.log("Hello two in 2 sec")
}, 2000)
console.log("My name is " + "Hello Three")

console.log(promise)
