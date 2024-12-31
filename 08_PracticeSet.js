const prompt = require("prompt-sync")({sigint: true});

let age =prompt("What is your age? ")
// age = Number.parseInt(age)
 // greater than, less than checks only value not datatype

 switch(age) {
    case '12':
        console.log("Your age is 12");
        break;
    case '13':
        console.log("Your age is 13");
        break;
    default:
        console.log("Your age is not special")
}

 // greater than, less than checks only value not datatype
console.log(age > 18 ? "You can drive" : "You cannot drive") 