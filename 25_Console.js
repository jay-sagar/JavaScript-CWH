console.clear() // clear console

// console.log(console) // all values
console.error("Hello Warning")


console.assert(5 > 53) // used a assert, if Condition is true it won't return anything
// but if it false it return "Assertion Failed" 
console.assert(5 < 53)

let obj = {
    a : 1,
    b : 2,
    c : 3
}
console.table(obj) // display a tabular data

console.warn("Hey don't drink soda")

console.info("info") // used for special info

console.table(console)

console.time("forLoop")
for (let index = 0; index < 5; index++) {
console.log(index)    
}
console.timeEnd("forLoop") // tells how much time does it take to complete a action
