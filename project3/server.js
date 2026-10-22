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

app.get('/', (request, response)=>{
    response.render('index.njk')
})

app.listen(8080, ()=>{
    // to run the server:
    // 1. make sure you are in the correct folder
    // 2. in terminal use the starting command: node --watch server.js 
    console.log('http://localhost:8080')
})
