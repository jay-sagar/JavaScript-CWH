const prompt = require("prompt-sync")({sigint: true})


const arr = ["Snake", "Water", "Gun"]

const random = Math.floor((Math.random() * 10)) % arr.length
const randomValue = arr[random]
// console.log(randomValue)

const input = prompt("Choose Any => Snake, Water or Gun : ")

if (input == "Snake") {
    if (randomValue == "Water") {
        console.log("You won")
    } else if (randomValue == "Gun") {
        console.log("You lost")
    } else {
        console.log("Draw")
    }
} else if (input == "Water") {
    if (randomValue == "Gun") {
        console.log("You won")
    } else if(random == "Snake") {
        console.log("You lost")
    } else {
        console.log("Draw")
    }
} else if (input == "Gun") {
    if (randomValue == "Snake") {
        console.log("You won")
    } else if(randomValue == "Water") {
        console.log("You lost")
    } else {
        console.log("Draw")
    }
} else {
    console.log("Your input is wrong, choose correct option")
}