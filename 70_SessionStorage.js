/* Used less often than localStorage. Properties and methods are same as localStorage but

    1: The sessionStorage exits only within the current browser tab.
        Another tab with same page will have a different storage
    2: The data survives page refresh, but not closing/opening the tab
*/ 

sessionStorage.getItem("name")
sessionStorage.clear()
sessionStorage.removeItem("name")
sessionStorage.setItem("name", "jay")
sessionStorage.removeItem("name")

/* Storage Event :
    When the data gets updated in localStorage or sessionStorage,
    storage event triggers with these properties

    1: key => the key
    2: old value => previous value
    3: new value => New value
    4: url => page url
    5: storage area => local or sessionStorage

    We can listen the onstorage event of windows which is triggered when updated are made to the 
    same storage from other documents
    
*/

window.onstorage = (e) => {
    alert("changed")
}