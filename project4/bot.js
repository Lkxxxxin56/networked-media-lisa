require('dotenv').config();
const m = require('masto');

// insert wing's url here:
const partner_url = "http://157.230.95.119:6004/get-data";

const masto = m.createRestAPIClient({
	url: 'https://networked-media.itp.io/',
	accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
    // await ensures that it creates the status before we do anything else in our code
	const status = await masto.v1.statuses.create({
		status: text,
		visibility: 'public',
	});
}

function botAwake() {
    // Run bot in London time after testing!!!
    const londonTime = Number(
        new Intl.DateTimeFormat("en-GB", {
            timeZone: "Europe/London",
            hour: "2-digit",
            hourCycle: "h23" // 24 hours from 00 to 23
        }).format(new Date()) // format into a string
    ) // Number converts the string into a number
    
    // this is normally how hours are calculated:
    // const hour = new Date().getHours();
    return londonTime >= 9 && londonTime < 21;
}

function writePost(json) {
    // Pick a random passenger
    let randomIndex = Math.floor(Math.random() * json.length);
    let passenger = json[randomIndex];

    // Random weather opening
    const weatherLines = {
        sunny: "London is suspiciously sunny today.",
        rainy: "Of course London is rainy again.",
        foggy: "London has misplaced itself in the fog.",
        cloudy: "The clouds have arrived in London for their shift.",
        snowy: "London is wearing its rare snow coat."
    };
    // I added a weather fallback just in case there is no correct weather in the database
    let opening = weatherLines[passenger.weather] || "Another day above London."

    // 3 options of thoughts based on each mood
    const thoughtsByMood = {
        excited: [
            "I wonder if pigeons have a preferred view.",
            "I wonder if the Thames remembers everyone who waves at it.",
            "Absolutely brilliant. Shall we go round again?"
        ],

        curious: [
            "I wonder if the London Eye ever gets dizzy.",
            "I wonder if umbrellas count as tiny moving roofs.",
            "Does Big Ben judge us for being late?"
        ],

        nostalgic: [
            "I wonder if the city has always been this dramatic.",
            "I wonder if the Eye knows every shortcut through London.",
            "Same skyline, same drizzle. I should have brought my old coat."
        ],

        "slightly terrified": [
            "Does the Eye have a return policy? I can barely see anything.",
            "Lovely view. I would prefer it from a slightly lower altitude.",
            "I trust the engineering. My knees have requested a second opinion."
        ],

        "ready for tea": [
            "I wonder if the Thames is secretly full of tea.",
            "Is anyone else ready for tea?",
            "A magnificent view, slightly undermined by the lack of biscuits."
        ]
    };

    // possible thoughts from one selected mood
    // similar thought fallback added, automaticall prints the "curious" thought
    let possibleThoughts = thoughtsByMood[passenger.mood] || thoughtsByMood.curious;
    if (!possibleThoughts || possibleThoughts.length === 0) {
        return "I'm not thinking anything at the moment..."
    }
    const thought = possibleThoughts [
        Math.floor(Math.random() * possibleThoughts.length)
    ];

    let post = `${opening} ${passenger.name}, feeling ${passenger.mood}, whispers to me: "${thought}"`;
    return post;
}

setInterval(async () => {
    // check bot awake status
    if (!botAwake()) {
        console.log("Bot is sleeping zZzZz");
        return;
    }

    // fetch data
    let response = await fetch(partner_url);
    let json = await response.json();
    //console.log(json);
    if (json.length === 0 ){
        console.log("No json data")
        return;
    }
    
    let post = writePost(json);
    console.log(post);
    
    await makeStatus(post);
    console.log("posted successfully!")

    // Because one full rotation on the London Eye is 30 minutes,
    // I want my bot to post every half an hour, 
    // from 9am-9pm everyday.
    // 1000ms = 1s, 0.5h = 1000ms * 60s * 30min
}, 1000*60*30);

