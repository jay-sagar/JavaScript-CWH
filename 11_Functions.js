function onePlusAvg(x, y) {
    return 1 + (x + y)/2
}

const nameString = () => {
    return "jay";
}

console.log(onePlusAvg(2, 4))

console.log(nameString())

const hello = () => {
    console.log("Hello how are you, I am fine")
    return "hi"
}

const hello2 = hello();
console.log(hello2)