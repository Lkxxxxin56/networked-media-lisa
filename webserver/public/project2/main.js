// VARIABLES
let screensaver;
let folders;
let timer;
let generation = 0;
let maxGeneration = 10;
// let colors = ["red", "orange", "yellow", "green", "blue", "cyan", "purple"];


// WHEN PAGE LOADS
window.onload = () => {
    screensaver = document.getElementById("screensaver");
    // texts = document.querySelector("object text");
    folders =document.querySelectorAll(".object.folder");
    // cursors = document.querySelector("object cursor");

    // start reproduction timer
    timer = setInterval(() => {
        reproduceFolder();
    }, 2000);

    // USER RETURNS
    // document.body.addEventListener("click", ()=>{
    //     console.log("document.body is clicked")
    //     // remove objects marked as reproduced
    //     // keep original HTML objects
    //     // reset generation
    //     generation = 0
    //})
}


// REPRODUCE folder
function reproduceFolder() {

    // select all objects that currently exist
    // let allObjects = document.querySelector("object");

    // Save current objects before creating new ones, so new copies don't reproduce during the same loop

    for (let folder of folders) {

        // clone the object
        let copy = folder.cloneNode(true);

        // mark it as a reproduced object
        copy.classList.add("duplicated");

        // place copy near its parent
        // randomize position / rotation / color
        setInterval(()=>{
            console.log("2 seconds has passed");
            copy.style.top
        }, 2000);

        // add copy to screensaver
        screensaver.appendChild(copy);

    }

    generation++

    // stop reproduction after enough generations
    if (generation >= maxGeneration) {
        clearInterval(timer)
    }
}


// OPTIONAL: BOUNCING
// add movement after reproduction works