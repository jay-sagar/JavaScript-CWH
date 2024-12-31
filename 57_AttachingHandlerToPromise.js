let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey I am resolved")
        resolve(1)
    }, 200)
})

p1.then(() => {
    console.log("Congratulations ")
    setTimeout(() => {
        console.log("hey")
    }, 2000)
})
p1.then(() => {
    console.log("Hurray")
})

// both will run independently