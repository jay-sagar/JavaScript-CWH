
// setTimout execute after a time
let a = setTimeout(function() { // returns the timerId
    console.log("I am inside of setTimeout")
}, 5000)

clearTimeout(a) // clear the timout

console.log(a)  


const sum = (a, b, c) => {
    console.log("Yes I am running " + (a + b + c))
}

setTimeout(sum, 1000, 1, 2, 7) // func, timer, args...

// setInterval execute after a time but continuously
const b = setInterval(function () {
    console.log("setInterval")
}, 2000)

clearInterval(b) // terminate the setInterval

const sum2 = (a, b, c) => {
    console.log("I am running setInterval", a + b + c)
}

setInterval(sum2, 1000, 1, 2, 3)
