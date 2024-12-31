const prompt = require('prompt-sync')({sigint: true})

let arr = [1, 2, 3];
let input = prompt("Enter your number : ");
let num = Number.parseInt(input)
arr.push(num)
// arr[arr.length] = num
console.log(arr)

let arr2 = [32, 32, 12, 3];
let a;
do {
    a = prompt("Enter a number : ")
    a = Number.parseInt(a)
    arr.push(a)
    console.log(arr)
} while (a != 0)


let arr3 = [32, 21, 34, 11, 40, 10, 30]
let newArr3 = arr3.filter(value => {
    return value % 10 == 0
})

console.log(newArr3)


let arr4 = [3, 32, 41, 44, 3]
let newArr4 = arr4.map(x => {
    return x*x
})
console.log(newArr4)

let arr5 = [1, 2, 3, 4, 5]
let newArr5 = arr5.reduce((x1, x2) => {
    return x1 * x2
})
console.log(newArr5)