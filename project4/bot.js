// import .env variables so we don't put passwords in js files
require('dotenv').config();

// setup mastodon library
const m = require('masto');

// setup masto variable to connect to:
// 1. url   2. token: our password to our account
const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

// async: to make a request to our mastidin server

async function makeStatus(text) {
    // await ensures that it creates the status before we do anything else in our code
	const status = await masto.v1.statuses.create({
		status: text,
		visibility: 'private',
	});
}

async function getThought() {
    let url = "http://localhost:6001/get-data";
    let response = await fetch(url);
    let passengers = await response.json();
    if (passengers.length === 0){
        return null;
    }
    let randomIndex = Math.floor(Math.random() * passengers.length);
    return passengers[randomIndex];
}

function writePost(passenger) {

  let weatherLines = {
        sunny: "London is suspiciously sunny today.",
        rainy: "London is rainy again.",
        foggy: "London has misplaced itself in the fog.",
        cloudy: "The clouds have arrived in London for their shift.",
        snowy: "London is wearing its rare snow coat."
    };

    let opening = weatherLines[passenger.weather];
    return `${opening} ${passenger.passengerName}, a ${passenger.mood} passenger, is wondering if ${passenger.thought}.`;
    // Example: London is suspiciously sunny today. Sam, a curious passenger, is wondering if the London Eye ever gets dizzy.
}

async function testBot() {
    let passenger = await getThought();

    if (!passenger) {
        console.log("No passenger thoughts have been submitted yet.");
        return;
    }

    let post = writePost(passenger);
    console.log(post);
}

testBot();

setInterval(() => {
    // add some code
}, 5000); 