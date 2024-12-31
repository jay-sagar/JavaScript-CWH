let num = [3, 32, 32, 44 ,21]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

// forEach loop
num.forEach(element => {
    console.log(element * element)
})

num.forEach((value, index, array) => {
    console.log(value, index, array)
})

// Array .from => used to create an array from any other object

let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// ForOf loop
for (let i of num) { // returns values as arrays are object as well
    console.log(i)
}

// Forin loop
for (let i in num) { // returns keys
    console.log(i)
    console.log(num[i])
}

console.log(typeof num)