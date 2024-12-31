const prompt = require("prompt-sync")({sigint: true})

let age = prompt("Enter your number : ")
age = Number.parseInt(age)
let runAgain = true;

while (runAgain) {

const canDrive = (canDrive) => {
    return age >= 18 ? true : false;
}

if (canDrive(age)) {
    console.log("Yes you can drive")
} else {
    console.error("You cannot drive")
    break;
}
runAgain = confirm("Do you want to play again ?")
age = prompt("Enter your number again :")
}


// Q2

let num = prompt("Enter your number : ")
num = Number.parseInt(num)

if (num > 4) {
    location.href = "https://google.com"
} 

// Q3

let color = prompt("Enter you color : ")
document.body.style.background = color