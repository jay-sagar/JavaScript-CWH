let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Initializing hack program...")
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hacking Ashish username....")
    }, 3000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Username found ashish 17....")
    }, 5000);
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Connecting to facebook....")
    }, 7000);
})

const hacking = async () => {
    console.log("Hacking setup")
    const a = await p1;
    console.log(a)
    const b = await p2;
    console.log(b)
    const c = await p3;
    console.log(c)
    const d = await p4;
    console.log(d)
}
hacking()