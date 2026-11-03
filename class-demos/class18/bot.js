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

setInterval(() => {
    // an array of emojis
    let emojis = ['🎃', '🧟‍♀️', '☠️'];
    // randomly generate a number within the array list
    let random = Math.floor(Math.random() * emojis.length);
    let post = emoji[random];
    makeStatus(post);
}, 5000); // 5 seconds