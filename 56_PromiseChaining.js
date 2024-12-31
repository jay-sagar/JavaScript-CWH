let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 sec")
        resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise 2")
        }, 2000)
    })
    return p2 // the new p2 returns the value and then new .then execute
}).then((value) => {
    console.log("we are done")
    return 2 // you can return a normal value as well
}).then((value) => {
    console.log("We are pakka done")
})
