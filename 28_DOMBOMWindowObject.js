// We have following when javascript run in a browser
//     : DOM
//     : BOM
//     : Javascript Core

// Every thinks come in window for eg window.console, window.alert

// DOM => represents the page content as HTML
window.console.log(window)
console.log(document.body)
document.body.style.background = "yellow"

// BOM => Browser Object Model
// represents additional object provided by the browser for working with everything expect the document
// the func alert/confirm/prompt are also a part of the BOM

// eg : location href = "https://abc.com" 