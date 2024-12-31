let num = [1, 2, 3, 4, 5, 6]
let num2 = [1, 2, 3, 4, 5, 6]
let num3 = [1, 2, 3, 4, 5, 6]
console.log(num)
delete num[0] // doesn't effect the length
console.log(num)


let newArray = num.concat(num2, num3); // doesn't change the original array
console.log(newArray)

// Sort Method

let num4 = [3, 4, 13 , 4, 12, 44];
num4.sort(); // it sorts alphabetically, and change the array
console.log(num4)

let compareDesc = (a, b) => {
    return b - a;
}
let compareAsc = (a, b) => {
    return a - b;  // do values lega jiski sabse choti values aayegi woh front mai aayega
}

let num5 = [3, 5, 12, 32, 33, 41, 44]
num5.sort(compareAsc)
console.log(num5)
num5.reverse() // reverse the array
console.log(num5)

// Splice and Slice

let num6 = [551, 22, 3, 14, 5, 6, 7, 8, 228]
// to add element => splice
const numbers = num6.splice(2, 3, 102, 103, 104, 105);
// splice(positionToAdd, No.ofElementToRemove, ElementsToBeAdded);
// and returns the array to deleted elements
console.log(num6)
console.log(numbers)

// slice => slices out a piece from an array, creates a new array
let num7 = [3, 12, 312, 442, 22, 21, 54]
let newNum = num7.slice(3)
let newNum2 = num7.slice(3, 5)
console.log(newNum)
console.log(newNum2)