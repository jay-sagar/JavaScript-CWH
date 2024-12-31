let arr = [23, 31, 421]

// map() creates a new array by performing some operations on each array element
// doesn't effect original array
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 1;
    // return value > 30 => if you do this, it will return boolean value
})

console.log(a)

// filter() => filters an array with values that passes a test, creates new array
// doesn't effect original array
let arr2 = [45, 32, 21, 32, 44]
let a2 = arr2.filter((a) => {
    return a<35
})
console.log(a2)

// reduce() => reduces an array to a single value

let arr3 =  [1, 2, 3, 4, 5, 6];
let newArr3 = arr3.reduce((value, value2) => {
    return value + value2
})
console.log(newArr3)


