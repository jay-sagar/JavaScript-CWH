let name = "Harry"
console.log(name.length)

let friend = 'Jay';
console.log(friend)

// Strings can be create with single and double quotes

console.log(name[0])
console.log(name[1])


// Template literals
// also called String interpolation

let boy1 = "Pramod";
let boy2 = "Nikhil"

let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)


// Escape Sequence Characters
let fruit = 'Bana\'na' // print quotes
console.log(fruit)
console.log(fruit.length) // here it will consider ' in length but not \

let fruit2 = "Orange\nHello World" // print space
console.log(fruit2)

let fruit3 = "Apple\rGuava" // carriage return
console.log(fruit3)
// \r (carriage return) moves the cursor to the beginning of the same line.
// In this example, \r moves the cursor back to the beginning of the line, causing "Guava" to overwrite "Apple".