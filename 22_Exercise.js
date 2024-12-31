const prompt = require('prompt-sync')({sigint: true})

let random = Math.random() * 100;
random = Math.round(random)
console.log(random)

let input;

do {
    input = prompt("Enter the number : ")
    if (input > random) {
        console.log("You guessed higher, try to guess lower")
    } else if (input < random) {
        console.log("You guessed lower, try to guess higher")
    }
    // input will be in string but we use == so it doesn't matter
} while (input != random)

console.log("You Guessed")
