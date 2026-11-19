let express = require('express');
let nedb = require('@seald-io/nedb');
let nunjucks = require('nunjucks');

// set up variabes
let app = express();
let database = new nedb({
    filename: "mydatabase.db", 
    autoload: true
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});
app.set('view engine', 'njk');

app.get('/', (request, response)=>{
    response.render("form.njk");
})

app.post('/add-data', (request, response)=>{
    console.log(request.body);
        let dataToBeAdded = {
        name: request.body.name,
        action: request.body.action,
        number: request.body.number,
        timestamp: Date.now()
    };

    // add to data base
    database.insert(dataToBeAdded, (error, newData)=>{
        if(error){
            console.log(error);
            return;
        } else {
            console.log(newData);
            response.send('data added successfully')
        }
    })
})

app.get('/get-data', (request, response)=>{
    let query = {};
    database.find(query, (error, retrievedData)=>{
        console.log(retrievedData);
        response.json(retrievedData);
    })
})

app.listen(6001, ()=>{
    console.log("server is running")
})
