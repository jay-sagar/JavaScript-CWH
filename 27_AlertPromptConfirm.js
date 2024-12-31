// used to invoke a mini window with a msg
alert("Hello your alert work")

// used to take a user input a string
prompt("Enter a number ")
let a = prompt("Enter a number", "321") // second arg is default value


let write = confirm("Do you want to write it to the page")
if (write) {
    document.write(a) // write in html
} else {
     document.write("please allow me to write")
}