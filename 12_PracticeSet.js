const marks = {
    harry: 98,
    rohan: 70,
    akash: 7
}

// Object.keys[marks][i] returns keys of the object
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

for (let i in marks) {
    console.log(marks[i])
}

let cn = 4;
let i;


const prompt = require("prompt-sync")({sigint: true})
while (i != cn) {
    console.log("Try again")
    i = prompt("Enter a Number ")
}

const mean = (a, b, c, d) => {
    return (a + b + c + d) /4;
}

console.log(mean(4, 5, 3, 5))