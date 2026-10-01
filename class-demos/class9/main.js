// window on load is shorthand for this
// today we are converting printing out the mouse position in p5 to js

window.addEventListener("load",()=>{
    // document.body is the selector to retrieve the body html element

    // p5 code:
    // function mousePressed(){
    //      print(mouseX, mouseY)
    //}
    document.body.addEventListener("click", (e)=>{
        console.log[e];
        console.log("document.body was clicked.")
        console.log(`${e.clientX}, ${e.clientY}`);
    })

    // using ids are good for js!
    // any time for an interaction, using ids is best practice!
    let textDiv = document.getElementById("text");
    document.addEventListener("keydown", (e)=>{
        console.log("key pressed!")
        console.log(e.key);

        // adding the key that was typed to the div on my page
        textDiv.textContent += e.key;

        if(e.key == " "){
            textDiv.textContent += " 👽 ";
        }
    })
})
