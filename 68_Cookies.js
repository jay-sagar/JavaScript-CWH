console.log(document.cookie)
document.cookie = "name=jay31312" // it won't overwrite the cookie but it just add into it
document.cookie = "name=jay" // update the name

let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie =  `${key}=${value}`

// This function helps keep the valid formatting. It is used like this:
// this way, the special characters are encoded
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(CSSMathValue)}`
console.log(document.cookie)

/* cookie options : 
    cookies have several options which can be provided after key=value to a set call like this:
    eg: document.cookie = "user=jay; path=/a; expires=Tue, 29 March 2024 05:18:22 GMT"
        in this syntax it doesn't means that we are storing multiple cookies, they are options like path or expires
        
NOTE : name=value pair after encodeURIComponent, should not exceed 4kb
        Total number of cookies per domain is limited to around 20+ (depends on browser as well)
*/