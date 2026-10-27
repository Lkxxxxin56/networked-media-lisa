// Setup
const express = require('express'); 
const nunjucks = require('nunjucks'); 
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

// Variables
let allData = [];

const birdImages = {
    "Blue jay": "/assets/blue-jay.png",
    "Dark-eyed junco": "/assets/dark-eyed-junco.png",
    "European starling": "/assets/european-starling.png",
    "House finch": "/assets/house-finch.png",
    "Rock pigeon": "/assets/rock-pigeon.png",
    "House sparrow": "/assets/house-sparrow.png",
    "Mourning dove": "/assets/mourning-dove.png",
    "Northern cardinal": "/assets/northern-cardinal.png",
    "Tufted titmouse": "/assets/tufted-titmouse.png",
    "White-throated sparrow": "/assets/white-throated-sparrow.png",
    "Other species": "/assets/other-species.png"
};

const boroughY = {
    Bronx: 60,
    Brooklyn: 120,
    Manhattan: 180,
    'Staten Island': 240,
    Queens: 300
};

function visualize(sighting) {
    // Step 1: convert the time into total minutes after midnight.
    const [hours, minutes] = sighting.time.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;

    // Step 2: calculate how much of the 24-hour day has passed.
    // One day has 60 × 24 = 1440 minutes.
    const passedPercent = totalMinutes / 1440;

    // Step 3: convert data into X and Y positions
    // The staff starts at 150, has a width of 800, and ends at 950.
    const x = 150 + passedPercent * 800;
    const y = boroughY[sighting.borough]

    // return the values needed for visualization
    return {
        ...sighting, // inheriting info from sighting
        x: x,
        y: y,
        image: sighting.image || birdImages[sighting.species]
        // if a species not list, display an uploaded bird image with question mark
         || "/assets/other-species.png"
    };
}

function count(sighting) {
    const totalSightings = allData.length;
    const uniqueSpecies = new Set (
        allData.map(sighting => sighting.species)
    // I got help from Codex for the above line of code.
    // Note: Set helps creating a collection of bird species with no duplicates.
    // .map results with an array of submissions.
    // Set creates a set which automatically removes repeats.
    );
    const totalSpecies = uniqueSpecies.size;

    return {
        totalSightings: totalSightings,
        totalSpecies: totalSpecies
    };
}

app.get('/', (request, response)=>{
    console.log("Sightings:", allData);
    const birds = allData.map(visualize);
    console.log("Mapped birds:", birds);
    const counts = count();
    response.render('home.njk', {
        birds: birds,
        totalSightings: counts.totalSightings,
        totalSpecies: counts.totalSpecies
    });
})

app.get('/form', (request, response)=>{
    response.render('form.njk')
})

app.get('/about', (request, response)=>{
    response.render('about.njk')
})

app.post('/submitted', (request, response)=>{
        if (request.body.species === "Other species" && request.body.otherSpecies) {
            request.body.species = request.body.otherSpecies;
            request.body.image = birdImages["Other species"];
        }

        delete request.body.otherSpecies;
        console.log(request.body);
        allData.push(request.body);
        response.redirect('/');
})

app.listen(8080, ()=>{
    console.log('http://localhost:8080')
})
