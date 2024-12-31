const prompt = require("prompt-sync")({sigint: true});

let a = prompt("Hey what's your age? ") // always store in string
a = Number.parseInt(a) // Converting the string to a number
console.log(typeof a)


// if,else, else if
if (a > 0) {
    // alert("This is valid age")
} else {
    // alert("This not valid age")
}

//Ternary operator
console.log(a < 18 ? "not drive" : "drive")

// Switch case

switch(a) {
    case 18:
        console.log("Your age is 18");
        break;
}