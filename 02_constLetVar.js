var a = 45;
var b = "Harry";
var c = null
var d = undefined

{
    var b = "this" // this will change the value outside the block
    console.log(b)
}

console.log(b)

let e = "Jay"

{
    let e = "Bitch"
    console.log(e)
}

console.log(e)

// var is globally scoped while let and const are block scoped
// var can be updated and redeclare within it's scope
var x = 10;
var x = "String" // totally  fine

// let can be updated but not re redeclare
let y = 10;
// you can't do this
// let y = 20;
// but you can do this
y = "String";


// const can neither be updated nor be re-declared
const author = "Harry"
// author = 9; can't do this

// var are initialized with undefined whereas let and const are not initialized
// const must be intialized during declaration unlike let and var

// const a1; // can't do this
let b1;
var c1;