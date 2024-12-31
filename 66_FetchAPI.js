let p = fetch("https://goweather.herokuapp.com/weather/almora")
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    // console.log(response.text()) // if you do this .json() will won't work
    return response.json()
}).then((response2) => {
    console.log(response2)
})

// Getting a response is a 2-stage process
/*  1. An object of response class containing "status" & "ok" properties
        status - the https status code, eg 200
        ok - boolean, true if the https status code is 200-299
    
    2. After that we need to call another method to access the body in different formats
        response.text() => read & return the text
        response.json() => pause the response as JSON

        Other method includes response.formData(), response.blob(), response.arrayBuffer() etc

        NOTE: we can use only one body reading method example if we have already got the response with response.text()
                then response.json() won't work
*/
