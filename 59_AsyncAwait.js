/* An async func always returns a promise, other values
are wrapped in a promises automatically
So, async ensures that the function returns a promise and wraps
non promises in it 
    async function harry() {
    return 7
    }
    harry.then(alert)
*/



async function jay () {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
    })
    
    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 7000)
    })

    console.log("Fetching delhi weather please wait...")
    let delhiW = await delhiWeather
    console.log("Fetched delhi weather : " + delhiW)

    console.log("Fetching bangalore weather please wait...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched bangalore weather : " + bangaloreW)
}

const cherry = async() => {
    console.log("Hey I am cheery and I am not waiting")
}

const main1 = async() => {
    console.log("Welcome to weather control room")
    let a = await jay()
    let b =  await cherry()

}
main1()
