// if the promise is fulfilled then it return resolve otherwise reject

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled")
        resolve(true)
    }, 5000)
})

// console.log(p1)

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
        console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"))
    }, 5000)
})


// we can you then to catch both result and error
p1.then((value) => {
    console.log(value)
})

p2.then((value) => {
    console.log(value)
},(error) => {
    console.log(error)
})

p2.catch((error) => {
    console.log(error)
})
