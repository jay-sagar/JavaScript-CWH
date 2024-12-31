let num = [1, 2, 3, 4, 5]
let b = num.toString() // b is now a string
console.log(b)

let c = num.join("_") // join the items with "_"
console.log(c, typeof c)

let r = num.pop() // returns the popped element
console.log(num, r)

let j =num.push(4) // push returns the new array length
console.log(num, j)

let i = num.shift() //  removes an element from the start of the array
console.log(i, num)

let k = num.unshift(32) // returns new array length
console.log(k, num)