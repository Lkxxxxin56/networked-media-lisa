// this js will go inside of the makeStatus function in your bot
// your partner will make a request to http://your-ip-address/get-data
// when we're testing it on our own machine, we use http://localhost:6001/get-data
// API stands for Application Programming Interfaces

async function getData(){
    let url = "http://localhost:6001/get-data";
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
}

getData();