/* LocalStorage is a web storage object which are not sent to server with each request
    THis data survives a full page refresh and even a full browser restart

    We can get and set values like an object
    eg: localStorage.one = 1
    alert(localStorage.one)
    delete localStorage.one

    NOTE : 
        1: Both key and values must be strings
        2: We can use the two JSON methods to store objects in localStorage
*/

let key = prompt("Enter key you want to set")
let value = prompt("Enter values you want to set")

localStorage.setItem(key, value)
console.log(`The value of at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key =="blue") {
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear() // clear all the localStorage
}


