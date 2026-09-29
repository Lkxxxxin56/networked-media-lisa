// this is a comment
// syntax for comments is different for different languages

// alert is a built-in function; "Javascript" is a parameter & its type is a string
alert("Javascript is here!");
console.log("log this info to the console");

// window = the browser window
// addEventListener() = the function, which has 2 parameters separated by a ,
// "load" = first parameter (which type of event we are waiting for)
// ()=>{} = second parameter, a callback function
// this is a shorthand for the event listener
window.onload = () => {
    console.log("the page has loaded")
}