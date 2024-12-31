// NNSSBBU => Primitive Data types
// null, Number, Symbol, String, Boolean, BigInt, undefined 

let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Harry"
let f = Symbol("I am a nice symbol")
let g = undefined

console.log(a, b, c, d, e, f, g)

console.log(typeof d) // to which type of datatype is


// Non-primitive datatype => Objects in js

const item = {
    "Harry": true, // key values pair
    "Subh": false,
    "Lovish": 67,
    "Rohan": undefined,
    age: 12
}

console.log(item["Harry"])
console.log(item["age"])
