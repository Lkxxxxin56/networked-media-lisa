// VARIABLES
// General
let screensaver;
let folderTimer;
// Folders
let originalFolder;
let folderCount = 1;
let maxFolders = 40;
// Text
let originalText;
let colors = ["red", "orange", "yellow", "lime", "cyan", "magenta"];
let textCount = 1;
let maxTexts = 12;
let messages = [
    "I'm taking over hehe.",
    "YOUR LAPTOP IS MINE NOW 👹",
    "ERROR: HUMAN DETECTED",
    "This laptop is yummy 😋",
    "HAHAHAHAHAHA!"
];

// WHEN PAGE LOADS
window.onload = () => {
    // selecting
    screensaver = document.getElementById("screensaver");
    originalFolder = document.querySelector(".folder");
    originalText = document.querySelector(".text");
    originalFolder.style.left = "0px";
    originalFolder.style.top = "0px";

    // start reproduction folderfolderTimer for folders
    folderTimer = setInterval(() => {
        reproduceFolder();
    }, 1000);

    textTimer = setInterval(() => {
        reproduceText();
    }, 5000);

    // USER RETURNS
    document.body.addEventListener("click", ()=>{
        console.log("document.body is clicked")

        // stop reproductions
        clearInterval(folderTimer);
        clearInterval(textTimer);

        // remove objects marked as duplicated
        let copies = document.querySelectorAll(".duplicated");
        for (let copy of copies){
            copy.remove();
        }
        // reset folder & text counts
        folderCount = 1;
        textCount = 1;
    })
}

// REPRODUCE FOLDERS
function reproduceFolder() {
    console.log("Reproducing folder:", folderCount);
    // stop when there are 40 folders:
    if (folderCount >= maxFolders){
        clearInterval(folderTimer);
        return;
    }
    
    // clone the original folder
    let copy = originalFolder.cloneNode(true);
    // mark it as a reproduced object
    copy.classList.add("duplicated");

    // calculations of columns and rows
    // because I know I want to have 8 folders in one row
    // so i can calculate how many rows i want based on my variable folder number
    // used JS reference site to help with math signs % & floor
    let column = folderCount % 8;
    let row = Math.floor(folderCount/8);
    // calculate position based on screen size
    let x = column * (screensaver.clientWidth/8);
    let y = row * (screensaver.clientHeight/5);
    // position the copies
    copy.style.left = `${x+20}px`;
    copy.style.top = `${y+20}px`;

    screensaver.appendChild(copy);
    folderCount++;
}

// MESSY TEXTS
function reproduceText(){
    console.log("Reproducing text:", textCount);

    if (textCount >= maxTexts){
        clearInterval(textTimer);
        return;
    }

    let copy = originalText.cloneNode(true);
    copy.classList.add("duplicated");

    // select a random msg from the global messages array
    let message = messages[Math.floor(Math.random() * messages.length)];
    copy.textContent = "";

    // wanna add a lot of random properties to text
    // add math.floor bc it rounds the random decimal down to a whole number so it can be used as an array index
    copy.style.color = colors[Math.floor(Math.random() * colors.length)];
    copy.style.top = `${Math.random() * 80}%`;
    copy.style.left = `${Math.random() * 80}%`;
    copy.style.fontSize = `${Math.random() * 20 +16}px`// random size 16-36

    screensaver.appendChild(copy);

    // typewriter effect! (this part i asked codex to help especially, see chat log in documentation or readme!)
    let index = 0;
    let typingTimer = setInterval(() => {
        copy.textContent += message[index];
        index++;
        if (index >= message.length){
            clearInterval(typingTimer);
        }
    }, 50);

    textCount++;
}