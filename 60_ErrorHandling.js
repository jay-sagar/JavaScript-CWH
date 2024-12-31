

try {
    setTimeout(() => {
        try {
            console.log(ankita)
        } catch(err) {
            console.log("Ankita errro")
        }
    }, 100)
    console.log(rahul)
    console.log("will this work?")

} catch (error) {
    console.log(error + "err")

} finally{
    console.log("This has to work")
}
