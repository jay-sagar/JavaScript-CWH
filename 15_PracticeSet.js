console.log("har\"".length)

const sentence = "The quick brown fox jumps over the lazy dog"
const word = "fox"
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("dog"))

console.log(sentence.toLowerCase())

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof amount)


let friend = "Deepika"

