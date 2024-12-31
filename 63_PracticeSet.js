// problem 3

// let p = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Please this is not acceptable"));
//     }, 2000);
//   });
// };

// let a = async() => {
//     try {
//         let c = await p()
//     console.log(c)
//     } catch (err) {
//         console.log("This error has been handled")
//     }
// }
// a()


// problem 3

let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

const run = async () => {
    console.time("run")
    // let a1 = await p1() // Fetch first 10 products from the database
    // let a2 = await p2() // fetch another 10 products from the database
    // let a3 = await p3() // fetch yet another 10 products from the database
    // console.log(a1, a2, a3)
    // taking 6 seconds which is not optimal

    let a1 = p1()
    let a2 = p2() 
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1, a2, a3])
    console.log(a1a2a3)
    // taking 3 sec optimal
    console.timeEnd("run")
}
run()