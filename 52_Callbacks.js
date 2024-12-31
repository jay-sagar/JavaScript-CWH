// synchronous programming
// execute one by one
// let a = prompt("Hello")
// let b = prompt("Hello")
// let c = prompt("Hello")
// let d = prompt("Hello")

// asynchronous programming
// setTimeout()

// callback function
function loadScript(src, callback) {
    console.log("Loading Script", src);
    if (typeof callback === 'function') {
        callback(src); // Only call if callback is a function
    } else {
        console.error("Callback is not a function");
    }
}

function hello (name) {
    console.log("Hello world", name)
}

function goodMorning(name) {
    console.log("Good morning", name)
}

loadScript("source file", goodMorning)

// A func that does something asynchronously should provide a callback argument
// where we put the function to run after is complete