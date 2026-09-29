// this is a comment
// syntax for comments is different for different languages

// alert is a built-in function; "Javascript" is a parameter & its type is a string
alert("Javascript is here!");
console.log("log this info to the console");

// global variables
let colors = ["#a73920", "#CDDDE8", "#EAE0BD", "#997626"];

// window = the browser window
// addEventListener() = the function, which has 2 parameters separated by a ,
// "load" = first parameter (which type of event we are waiting for)
// ()=>{} = second parameter, a callback function
// this is a shorthand for the event listener

window.onload = () => {
    console.log("the page has loaded")
    // all the code should go inside window.onload

    //get an element by id
    let mainElement = document.getElementById("main");
    mainElement.style.color = "green";
    console.log(mainElement);

    //query selector
    // retrives a SINGLE element using CSS selector
    let firstParagraph = document.querySelector("p");
    let blueParagraph = document.querySelector(".blue");
    document.querySelector("#main");

    firstParagraph.textContent = "I have updated the text with JS."
    blueParagraph.style.backgroundColor = "navy";

    // query selector 
    let containerDiv = document.querySelector("#blue-div");
    for (let i = 0; i < 60; i++){
        //creating an element on a webpage:

        // 1. declare what type of element we are creating
        let newSpan = document.createElement("span");

        newSpan.textContent = " new span ";  
        newSpan.classList.add("all-spans");
        //generate a random color
        let c = Math.floor(Math.random() * colors.length);
        newSpan.style.backgroundColor = colors[c];

        // 3. add the created element to the page
        // anywhere on the bottom of the html: document.body
        // in a specific container: select that element
        containerDiv.appendChild(newSpan);
    }

    // set interval is built-in to JS 
    // with 2 params: callback + amount of time in ms
    // option1
    let rotation = 0;
    setInterval(()=>{
        console.log("2 seconds have passed!")
        // two ways to retrive all the elements of a class
        // document.getElementsbyClassName("all-spans");
        let allSpans = document.querySelectorAll(".all-spans");
        console.log(allSpans);
        for(let s of allSpans){
            s.style.transform = `rotate(${rotation}deg)`;
            console.log(s.style.transform);
        }
    }, 2000);


    // option2
    // setInterval(function(){}, 2000);

    // // option3
    // setInterval(intervalFunction, 2000);
}

// helper functions go after window.onload{}
function intervalFunction(){

}