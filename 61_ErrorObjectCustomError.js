const prompt = require("prompt-sync")({sigint: true})

try {
    let age = prompt("Enter your number : ")
    age = Number.parseInt(age)
    if (age > 120) {
        throw new ReferenceError("This is probably not true")

    }
} catch(err) {
    console.log(err.message)
    console.log(err.name)
    // console.log(err.stack)
} 
