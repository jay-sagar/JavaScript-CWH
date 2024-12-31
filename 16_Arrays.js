let marks_class_12 = [91, 82, 63, 84, false, "String"] // can add diff type of datatypes
console.log(marks_class_12)
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])

marks_class_12[6] = 89
console.log(marks_class_12)
console.log(marks_class_12.length)

marks_class_12[0] = 32
marks_class_12[1] = "Str2"

marks_class_12[10] = 12
console.log(marks_class_12)

console.log(marks_class_12.length)

// In javascript arrays are object. the typeof operator on array returns object
console.log(typeof marks_class_12)

for (let index = 0; index < marks_class_12.length; index++) {
    const element = marks_class_12[index];
    console.log(element)
}