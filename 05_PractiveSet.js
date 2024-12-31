//Q1
let a = "Harry"
let b = 6
console.log(a + b)

//Q2
console.log(typeof (a + b));

//Q3

const c = { // c is reference of this object, you can do changes in object
    name: "Harry", // can write key without double quote
    section : 1,
    isPrincipal: false
}
// c = 54;  // can't do this
// c = {} // can't even store new object to this

//Q4
c['friend'] = "subham"

c['name'] = 'lovish'
console.log(c)

//Q5

const dict = {
    appreciate: "abc",
    yakka: "work"
}

console.log(dict['yakka']) // can access with this
console.log(dict.appreciate) // and this as well