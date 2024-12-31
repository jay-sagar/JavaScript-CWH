// for loops

for(let i = 0; i < 5; i++) {
    console.log(i)
}

let n = 4
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += (i + 1)
}

console.log("Sum of first" + n + "natural numbers is " + sum)

// forin loops => to get keys from object
// also work with arrays
// loops through the keys of an object
let obj = {
    harry: 90,
    subh: 43,
    shivika: 34,
    ritika: 34,
    shiv: 34
}

for (let a in obj) {
    console.log("Marks of " + a +  " are " + obj[a]) // can't ise obj.a
}

// forof loops => to get value from object
// works with iterable ds like array , string etc
// loops through the values of an object if it iterable
for (let a of "harry") {
    console.log(a)
}